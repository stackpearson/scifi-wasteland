import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { NavBarLink } from 'react-router-dom';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import tempPhoto from '../assets/sifi_temp.jpg';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function Mods() {
    const FlexContainer = styled.div`
        display: flex;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `
    const FlexBox = styled.div`
        display: flex;
        padding: 10px;

         
    `
    const TextBlock = styled.div`
        line-height: 1.25em;
        font-size: 13pt;
        max-width: 500px;
        min-width: 300px;

    `
    const CarouselContainer = styled.div`
        max-width: 750px;
        margin: 0 auto;    
    `
    const ImgTitle = styled.p`
        padding: 15px;
    `
    return (<>
        <FlexContainer>
            <FlexBox>
                <TextBlock>
                    <p>Sci-Fi Wasteland comes packed with loads of futuristic mods so you can fully immerse yourself! Mods are subject to change, so be sure to hop in our discord, or check out the server for the latest mod list.</p>
                </TextBlock>

            </FlexBox>
        </FlexContainer>
        <CarouselContainer>
            <Carousel showArrows={true}>
                <div>
                    <img src={tempPhoto} />
                    <ImgTitle>Placeholder Img 1</ImgTitle> 
                    <br/>
                </div>
                <div>
                    <img src={tempPhoto} />
                    <p>Placeholder Img 2</p>
                    <br/>
                </div>
                <div>
                    <img src={tempPhoto} />
                    <ImgTitle>Placeholder Img 3</ImgTitle>
                    <br/>
                </div>
                <div>
                    <img src={tempPhoto} />
                    <ImgTitle>Placeholder Img 4</ImgTitle>
                    <br/>
                </div>
            </Carousel>
        </CarouselContainer>

    </>)
}

export default Mods;