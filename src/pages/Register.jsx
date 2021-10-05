import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        rgb(255,255,255,0.5),
        rgb(255,255,255,0.5)
        ), 
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #fff;
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
    background-color: teal;
    color: #fff;
    cursor: pointer;
`

export default function Register(){

    return(
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input palceholder="name"/>
                    <Input palceholder="last name"/>
                    <Input palceholder="email"/>
                    <Input palceholder="username"/>
                    <Input palceholder="password"/>
                    <Input palceholder="confirm password"/>
                    <Agreement>
                        By creating this account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}