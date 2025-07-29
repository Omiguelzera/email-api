import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const verifyRecaptcha = async (recaptchaToken) => {
    try{
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`);
        return response.data.success;
    } catch (error) {
        console.error(error);
        console.error('Erro ao verificar o reCAPTCHA');
        return false;
    }
}