import dotenv from 'dotenv'
dotenv.config()

const dotenvConfig = {
    access_token_key: process.env.JWT_ACCESS_TOKEN as string,
    refresh_token_key: process.env.JWT_REFRESH_TOKEN as string,
    Nodemailer_host: process.env.Nodemailer_host,
    Nodemailer_user: process.env.Nodemailer_user,
    Nodemailer_pass: process.env.Nodemailer_pass,
}

export default dotenvConfig;