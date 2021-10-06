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
        url("https://images.unsplash.com/photo-1614755752522-67afab1eb969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80") center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    border-radius: 10px;
    background-color: #fff;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #dd2100;
    color: #fff;
    cursor: pointer;
`

export default function Register(){

    return(
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating this account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}