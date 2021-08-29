import React from 'react';
import './Home.css'
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
               <Section 
                    title="Model S"
                    discription="Order Online for Touchless Delivery"
                    backgroundImg="model-s.jpg"
                    leftBtnText ="Custom order"
                    rightBtnText ="Existing inventory"/>
               <Section 
                    title="Model Y"
                    discription="Order Online for Touchless Delivery"
                    backgroundImg="model-y.jpg"
                    leftBtnText ="Custom order"
                    rightBtnText ="Existing inventory"/>
               <Section 
                    title="Model 3"
                    discription="Order Online for Touchless Delivery"
                    backgroundImg="model-3.jpg"
                    leftBtnText ="Custom order"
                    rightBtnText ="Existing inventory"/>
               <Section 
                    title="Model X"
                    discription="Order Online for Touchless Delivery"
                    backgroundImg="model-x.jpg"
                    leftBtnText ="Custom order"
                    rightBtnText ="Existing inventory"/>
                <Section 
                     title="Lowest Cost Solar Panels in America"
                     discription="Money-back guarantee"
                     backgroundImg="solar-panel.jpg"
                     leftBtnText ="Order now"
                     rightBtnText ="learn more"/>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height:100vh;
`