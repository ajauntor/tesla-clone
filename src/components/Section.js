import React from 'react';
import styled from 'styled-components';
import "./Section.css"
import Fade from 'react-reveal/Fade';

const Section = ( props ) => {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{ props.title }</h1>
                <p>{ props.discription }</p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                            {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText && 
                        <RightButton>
                        {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div `
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.58;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin-left: 10px;
`
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.60;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
width: 100%;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``