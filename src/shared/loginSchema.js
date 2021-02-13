import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required().min(4).max(10)
});