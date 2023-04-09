import { toast } from 'react-toastify'

export const invalidRegistration = ()=>{
    toast.warn("Invalid form", {
        position: 'top-right',
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:dark
    }) 
}

export const invalidRegistrationCard = ()=>{
    toast.warn("Invalid form", {
        position: 'top-right',
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:dark
    }) 
}