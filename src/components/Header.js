import React from 'react';
import './Header.css'
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
        </Container>
    );
};

export default Header;

const Container = styled.div`

`