import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        rgb(255,255,255,0.5),
        rgb(255,255,255,0.5)
        ), 
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
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
    background-color: teal;
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

export default function Login(){

    return(
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input palceholder="username"/>
                    <Input palceholder="password"/>
                    <Button>Login</Button>
                    <Link>Do not remember your password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}