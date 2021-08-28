import React from 'react';
import styled from 'styled-components';
import "./Section.css"

const Section = () => {
    return (
        <Wrap>
            <h1>hi</h1>
        </Wrap>
    );
};

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('images/model-s.jpg');
`