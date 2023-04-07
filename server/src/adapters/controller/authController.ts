import { Request, Response } from "express";
import { userInterface } from "../../types/authInterface";
import { userRepository } from "../../application/respositories/userRepository";
import { userDBRepository } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo";
import { addUser } from "../../application/use_cases/auth";

const repository = userRepository(userDBRepository()) 

export const userRegistration = async (req: Request, res: Response) => {
    try{
      const userData:userInterface = req.body
      addUser(userData, repository)
    }catch(error) {
      console.log(error);
    }
}