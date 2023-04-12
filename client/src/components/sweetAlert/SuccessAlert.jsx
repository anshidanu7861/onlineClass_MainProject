import Swal from 'sweetalert2'
import {Link, useNavigate } from 'react-router-dom'
import authAPI from '../../API/authAPI'


const SweetAlert = () =>{
    const { verifyEmail } = authAPI()
    const navigate = useNavigate()

    const successRgistration = () => {
        Swal.fire({
            title: "Complete Your Registration ",
            text: "To verify, Click on the link",
            icon: "success",
            height: "200",
            width: "300",
            confirmButtonText: "Login",
            showCancelButton: false,
            allowOutsideClick: true,
          }).then((result) => {
            if (result) {
              // Redirect to login page
              navigate("/login");
            }
          });
    }
    return {successRgistration};
}

export default SweetAlert;