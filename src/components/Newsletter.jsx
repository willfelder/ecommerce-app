import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #b8b8b8;
    ${mobile({ width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    outline: none;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #dd2100;
    color: #fff;
    cursor: pointer;
`

const NewsLetter = () => {

    return(
        
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    );
}
export default NewsLetter;