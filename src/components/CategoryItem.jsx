import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    color: gray;
    background-color: #fff;
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
`

export default function CategoryItem({ item }){

    return(
        <Container>
            <Image src={item.image} />
            <Info>
                <Title>{item.title}</Title>
                <Button>
                    <Link to="/productList" style={{ textDecoration: "none", color: "#161616"}}>SHOP NOW</Link>
                </Button>
            </Info>
        </Container>
    )
}