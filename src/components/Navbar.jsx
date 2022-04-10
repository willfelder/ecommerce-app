import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "75px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    transition: all 0.5s ease;
    padding: 10px;
    border-radius: 50%;

    &:hover{
        background-color: #e7e7e7;
    }
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 50px;
`
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "50px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    padding: 5px 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e7e7e7;
        border-radius: 10px;
    }
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {

    return(

        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>YOUR BRAND</Logo>
                </Center>
                
                <Right>
                    <MenuItem>
                        <Link to="/register" style={{ textDecoration: "none", color: "#161616"}}>
                              REGISTER
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/login" style={{ textDecoration: "none", color: "#161616"}}>
                            SIGN IN
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <Link to="/cart" style={{ textDecoration: "none", color: "#161616"}}>
                                <ShoppingCartOutlinedIcon/>
                            </Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}
export default Navbar;