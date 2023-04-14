import { useDispatch } from 'react-redux'
import axiosConfig from '../config/axiosConfig'
import { setDetails } from '../Redux/userSlice/userSlice'

function userRefreshToken() {
    const dispatch = useDispatch()
    const refreshtoken = async() => {
        console.log('jajajja');
        try{
            const response = await axiosConfig.get('/token')
            const accessToken = response.data.accessToken;
            dispatch(setDetails({ accessToken:accessToken }))
            return accessToken;
        }catch(err) {
            console.log('error');
        }
    }
    return refreshtoken
}

export default userRefreshToken;