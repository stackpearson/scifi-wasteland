import React, {useState} from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import apache from '../assets/apache.jpg';
import armoredBus from '../assets/armored_bus.jpg';
import meruSniper from '../assets/meru_sniper.jpg';
import roamer from '../assets/roamer.jpg';
import { Carousel } from 'react-responsive-carousel';
import tissy from '../assets/tissyCropped.png'
import scifiTrader from '../assets/scifiTrader.png';
import ufo from '../assets/ufoRide.png';
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
                    <p>Sci-Fi Wasteland comes packed with loads of futuristic mods so you can fully immerse yourself! Mods are subject to change, so be sure to hop in our discord, or check out the server for the latest mod list.</p><br/>
                    <p>Check out some shots of in game gear offerings below:</p>
                </TextBlock>

            </FlexBox>
        </FlexContainer>
        <CarouselContainer>
            <Carousel showArrows={true}>
                <div>
                    <img src={scifiTrader} />
                    <ImgTitle>Custom traders</ImgTitle> 
                    <br/>
                </div>
                <div>
                    <img src={tissy} />
                    <ImgTitle>Vast array of gearsets</ImgTitle>
                    <br/>
                </div>
                <div>
                    <img src={meruSniper} />
                    <ImgTitle>Futuristic Weapon packs</ImgTitle>
                    <br/>
                </div>
                <div>
                    <img src={ufo} />
                    <ImgTitle>UFOs</ImgTitle> 
                    <br/>
                </div>
                <div>
                    <img src={roamer} />
                    <ImgTitle>Sci-Fi vehicles</ImgTitle>
                    <br/>
                </div>
                <div>
                    <img src={armoredBus} />
                    <p>Various armed vehicles</p>
                    <br/>
                </div>
                <div>
                    <img src={apache} />
                    <ImgTitle>Apache's</ImgTitle> 
                    <br/>
                </div>
            </Carousel>
        </CarouselContainer>

    </>)
}

export default Mods;