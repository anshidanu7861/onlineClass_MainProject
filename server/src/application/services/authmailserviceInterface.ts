import { mailServiceType } from '../../frameWorks/services/mailService'

export const mailServiceRepository = (repository:ReturnType<mailServiceType>) =>{
 const mailMessages = async(email:string) =>{
    return (await repository).mailMessages(email)
 }
 return { mailMessages }
}

export type mailServiceRepoInterface = typeof mailServiceRepository;