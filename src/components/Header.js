import React from 'react';
import './Header.css'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from 'react';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#"> Model S </a>
                <a href="#"> Model 3 </a>
                <a href="#"> Model X </a>
                <a href="#"> Model Y </a>
            </Menu>
            <RightMenu>
                    <a href="#"> Shop </a>
                    <a href="#"> Tesla Account</a>
                    <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomWapperX>
                        <CustomX onClick={() => setBurgerStatus(false)} />
                </CustomWapperX>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
            </BurgerNav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
transition: transform 0.2s ease-in;
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
        font-weight: 600;
    }
}
`
const CustomX = styled(NavigateNextIcon)`
    cursor: pointer;
`

const CustomWapperX = styled.div`
    display: flex;
    justify-content: flex-end;
`
// justify-content: flex-end;