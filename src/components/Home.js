import React from 'react';
import './Home.css'
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
               <Section />
               <Section />
               <Section />
               <Section />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height:100vh;
`