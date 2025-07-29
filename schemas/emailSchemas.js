import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  to: yup.string().email().required('O campo "to" é obrigatório e deve ser um e-mail válido.'),
  subject: yup.string().required('O campo "subject" é obrigatório.'),
  text: yup.string().required('O campo "text" é obrigatório.'),
  recaptchaToken: yup.string().required('O token do reCAPTCHA é obrigatório.'),
});

export default emailSchema