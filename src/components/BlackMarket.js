import React from 'react';
import styled from 'styled-components';
import drugs from '../assets/drugs.png';
import drones from '../assets/drones.png';
import mwp6 from '../assets/mwp6.png';

function BlackMarket() {

    const TextBlock = styled.div`
    padding: 10px;
    border-radius: 10px;
    border-left: 1px solid white;
    border-right: 1px solid white;
    line-height: 1.25em;
    font-size: 13pt;
    max-width: 750px;
    min-width: 300px;
    text-align: center;
    margin: 0 auto;
    `

    const ImageBlock = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 750px;
        margin: 0 auto;
    `
    const ImageContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .5em;
    `
    const Image = styled.img`
        display: block;
        margin: 0 auto;
        width: 100%;
        height: auto;
    `

    return (
    <>
        <TextBlock>
            <p>Welcome to the Black Nebula Market, a perilous haven for the daring. Nestled in a toxic zone, NBC gear is your ticket to survival. Amidst dangerous sci-fi creatures, trade thrives—here, buy and sell drugs, high-tier weapons, and the finest armor. Risk it all for unparalleled rewards.</p>
        </TextBlock><br/>
        <ImageBlock>
            <ImageContainer>
                <Image src={drugs}/>
            </ImageContainer>
            <ImageContainer>
                <Image src={drones}/>
            </ImageContainer>
            <ImageContainer>
                <Image src={mwp6}/>
            </ImageContainer>
        </ImageBlock>
    </>
    )
}

export default BlackMarket;