import Swal from 'sweetalert2'
import {Link, useNavigate } from 'react-router-dom'

const SweetAlert = () =>{
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
              // Redirect to landing page
              navigate("/");
            }
          });
    }
    return {successRgistration};
}

export default SweetAlert;