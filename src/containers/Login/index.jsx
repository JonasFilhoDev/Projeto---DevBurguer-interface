import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../hooks/UserContext';

import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { toast } from 'react-toastify';


export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();


    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {
            const response = await api.post(
                '/sessions',
                {
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true,
                },
            );

            if (response.status === 200 || response.status === 201) {
                const userData = response.data;

                await putUserData(response.data);


                setTimeout(() => {

                    if (userData?.admin) {
                        navigate('/admin/pedidos');
                    } else {
                        navigate('/');
                    }

                }, 2000);
                toast.success('Seja bem vindo(a) ao DevBurguer! 🤗');
            } else if (response.status === 400 || response.status === 401) {
                toast.error('E-mail ou senha incorretos! 😰');
            } else {
                throw new Error();
            }

        } catch (error) {
            toast.error('Falha no sistema! Tente novamente mais tarde 🤯')
        }


    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span> Login e senha.</span>

                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <Link to="/cadastro">Clique Aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    );
}
