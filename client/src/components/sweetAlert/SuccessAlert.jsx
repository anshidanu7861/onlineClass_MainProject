import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const SweetAlert = () =>{
    const navigate = useNavigate()
    const successfulleyRgistration = () => {
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
    return { successfulleyRgistration };
}

export default SweetAlert;