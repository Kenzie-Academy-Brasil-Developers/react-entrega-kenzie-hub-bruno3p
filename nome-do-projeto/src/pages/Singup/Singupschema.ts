import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup.string().required('O e-mail é obrigatório').email("Preencha um e-mail válido"),
    password: yup.string().required('A senha é obrigatória').min(8, "A senha precisa conter no mínimo 8 caracteres."),
    // passwordConfirm:yup.string().required('A confirmar senha é obrigatória').min(8, "A senha precisa conter no mínimo 8 caracteres."),
    bio:yup.string().required('A bio é obrigatória'),
    contact:yup.string().required('O contato é obrigatório'),
    course_module:yup.string().required('O modulo é obrigatório'),
})