import axios from "axios";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import{ userReducer } from '../Redux/userSlice/userSlice'
import userRefreshToken from "./userRefreshToken";

function useAxiosPrivate() {
    const accessToken = useSelector(userReducer)?.accessToken
    const refresh = userRefreshToken()

    const axiosPrivate = axios.create({
        baseURL:"http://localhost:5000",
        withCredentials: true
    });
    useEffect(()=>{
        console.log('private');
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            (config) =>{
                if(!config?.headers["Authorization"])
                {
                    config.headers["Authorization"] = `Bearer ${accessToken}`
                }
                return config
            },
            (error)=>{
                console.log(error, "error");
                return Promise.reject(error)
            }
        )

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            (response)=>{
                return response
            },
            async(error) =>{
                const prevReq = error?.config
                console.log(error);
                if(error.response.status == 403 && !prevReq.sent)
                {
                    console.log("expire");
                    prevReq.sent = true;
                    const newAccessToken = await refresh()
                    console.log("new accesstoken", newAccessToken);
                    prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevReq)
                }
                return Promise.reject(error)
            }
        )
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor)
            axiosPrivate.interceptors.response.eject(responseInterceptor)
        }
    },[accessToken, refresh ])
    return axiosPrivate
}

export default useAxiosPrivate