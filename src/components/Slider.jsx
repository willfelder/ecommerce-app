import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SliderItems } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #d6d4d4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    transition: all 0.5s ease;

    &:hover{
        background-color: #bdbdbd;
    }
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.backgroundColor};
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    margin-left: 100px;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 5px;
    margin-right: 150px;
`
const Title = styled.h1`
    font-size: 90px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 10px;
    background-color: #dd2100;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #dd5c45;
    }
`
const ShowText = styled.span`
    color: #fff;
`
const containerVariant = {
    hidden: {
        opacity: 0,
        x: '100vh'
    },
    visible: {
        opacity: 1,
        x: 0, 
        transition: {
            type: 'spring',
            delay: 0.5
        }
    }
}

function Slider(){
    const [ slideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return(
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftIcon />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {SliderItems.map(item => (
                        <Slide backgroundColor={item.backgroundColor} key={item.id}>
                            <ImageContainer>
                                <Image src={item.image} />
                            </ImageContainer>
                            <InfoContainer as={motion.div} 
                                           variants={containerVariant}
                                           initial="hidden"
                                           animate="visible">
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Button>
                                    <Link to="/productList" style={{ textDecoration: "none", color: "#161616"}}>
                                        <ShowText>SHOP NOW</ShowText>
                                    </Link>
                                </Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightIcon />
                </Arrow>
            </Container>
    );
}
export default Slider;