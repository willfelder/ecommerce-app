import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        rgb(255,255,255,0.5),
        rgb(255,255,255,0.5)
        ), 
        url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80") center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
    border-radius: 10px;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #dd2100;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
    
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {

    return(
        
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>Login</Button>
                    <Link>Do not remember your password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}
export default Login;