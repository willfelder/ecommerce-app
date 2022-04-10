import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #333333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcement = () => {
    
    return(
            <Container>
                Super Deal! Free Shipping on Orders over 50$
            </Container>
    );
}
export default Announcement;