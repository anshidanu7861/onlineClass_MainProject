import { userInterface } from "../../types/authInterface";
import { usertypeofRepository } from "../respositories/userRepository";


export  function addUser(userData: userInterface, repository:ReturnType<usertypeofRepository>) {
    const status = repository.doSignup(userData)
    return status;
}