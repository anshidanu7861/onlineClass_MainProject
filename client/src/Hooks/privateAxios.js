import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../Redux/userSlice/userSlice";
import userRefreshToken from "./userRefreshToken";

function AxiosPrivate() {
    const accessToken = useSelector(userReducer)?.accessToken;
    const refreshtoken = userRefreshToken()


    const axiosPrivate = axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true,
    })

    useEffect(()=>{
        const reqInterceptor = axiosPrivate.interceptors.request.use(
            (config)=>{
                if(!config?.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer${accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const resInterceptor = axiosPrivate.interceptors.response.use(
            (response) => response,
            async(error)=> {
                const prevRequest = error?.config;
                console.log(prevRequest);
                if(error.response.statuse === 403 && !prevRequest.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refreshtoken();
                    prevRequest.headers["Authorization"] = `Bearer${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        );
        return () =>{
            axiosPrivate.interceptors.request.eject(reqInterceptor);
            axiosPrivate.interceptors.response.eject(resInterceptor)
        }
    }, [accessToken, refreshtoken])

    return axiosPrivate;
}

export default AxiosPrivate;