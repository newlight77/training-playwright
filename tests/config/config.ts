import dotenv from 'dotenv';

let env = process.env.ENV || 'local'

dotenv.config({path: [
    `.env.${env}`,
]})

export const config = {
    url: process.env.URL || ''
}
