import dotenv from 'dotenv'
dotenv.config()

const dotenvConfig = {
    access_token_key: process.env.JWT_ACCESS_TOKEN as string,
    refresh_token_key: process.env.JWT_REFRESH_TOKEN as string,
    Nodemailer_host: process.env.Nodemailer_host as string,
    Nodemailer_user: process.env.Nodemailer_user as string,
    Nodemailer_pass: process.env.Nodemailer_pass as string,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string
}

export default dotenvConfig;