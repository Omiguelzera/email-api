import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { emailSchema } from './schemas/emailSchemas.js';
import { verifyRecaptcha } from './utils/verifyRecaptcha.js';

dotenv.config();

const app = express();
app.use(express.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, 
    },
});


const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: `"Contato via API" <${process.env.EMAIL}>`,
            to,
            subject,
            text,
        });
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error.message);
        throw new Error('Falha ao enviar e-mail');
    }
};


app.post('/send-email', async (req, res) => {
    try {
        
        const { to, subject, text, recaptchaToken } = await emailSchema.validate(req.body, {
            abortEarly: false,
        });

        
        // const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
        //  if (!isRecaptchaValid) {
            //  return res.status(400).json({ message: 'Falha na verificação do reCAPTCHA' });
        //  }

        
        await sendEmail(to, subject, text);
        res.status(200).json({ message: 'E-mail enviado com sucesso' });

    } catch (error) {
        console.error('Erro:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Erro de validação',
                errors: error.errors,
            });
        }

        res.status(500).json({ message: 'Erro ao processar a solicitação' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
});

export default app;
