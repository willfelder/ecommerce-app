import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListIcon = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "teal", color: "#fff" })}
`  
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`  
const Payment = styled.img`
    width: 50%;
`

export default function Footer(){
    return(
        <Container>
            <Left>
                <Logo>YOUR BRAND</Logo>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, earum doloremque aperiam quas nihil recusandae numquam exercitationem libero repellat alias autem vitae culpa labore eos vero aspernatur? Inventore, deleniti eos!</Description>
                <SocialContainer>
                    <a href="https://www.facebook.com/">
                        <SocialIcon color="3B5999">
                                <FacebookIcon />
                        </SocialIcon>
                    </a> 
                    <a href="https://www.instagram.com/">
                        <SocialIcon color="3B5999">
                            <InstagramIcon />
                        </SocialIcon>
                    </a> 
                    <a href="https://www.twitter.com/">
                        <SocialIcon color="3B5999">
                            <TwitterIcon/>
                        </SocialIcon>
                    </a> 
                    <a href="https://www.pinterestk.com/">
                        <SocialIcon color="3B5999">
                            <PinterestIcon/>
                        </SocialIcon>
                    </a> 
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListIcon>
                        <Link to="/" style={{ textDecoration: "none", color: "#161616"}}>Home</Link>
                    </ListIcon>
                    <ListIcon>
                        <Link to="/home/cart" style={{textDecoration: "none", color: "#161616"}}>Cart</Link>
                    </ListIcon>
                    <ListIcon>
                        <Link to="/home/productList" style={{textDecoration: "none", color: "#161616"}}>Man Fashion</Link>
                    </ListIcon>
                    <ListIcon>
                        <Link to="/home/productList" style={{textDecoration: "none", color: "#161616"}}>Woman Fashion</Link>
                    </ListIcon>
                    <ListIcon>
                        <Link to="/home/productList" style={{textDecoration: "none", color: "#161616"}}>Acessories</Link>
                    </ListIcon>
                    <ListIcon>
                        <Link to="/home/login" style={{textDecoration: "none", color: "#161616"}}>My Account</Link>
                    </ListIcon>
                    <ListIcon>Order Tracking</ListIcon>
                    <ListIcon>Wishlist</ListIcon>
                    <ListIcon>Terms</ListIcon>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: "10px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} /> +49 524 548 942
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{ marginRight: "10px" }} /> contact@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}