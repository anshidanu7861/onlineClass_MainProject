import { mailServiceType } from '../../frameWorks/services/mailService'

export const mailServiceRepository = (repository:ReturnType<mailServiceType>) =>{
    const inviteLink = async (email:[string],) => {return (await repository).inviteLink(email)}
    return {
        inviteLink
    }
}

export type mailServiceRepo = typeof mailServiceRepository;