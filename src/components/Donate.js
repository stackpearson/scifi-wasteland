import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Donate() {
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
        color: #ffdd40;
        flex-wrap: wrap;
        justify-content: center;
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
    const DonoContainer = styled.div`
        padding: 10px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
            background-color: #595963;
            border-radius: 10px;
          }
    `
    const DonoItems = styled.div`
        margin: 10px;
        padding: 10px;
    `
    const PayLink = styled(Link)`
          text-decoration: none;
          color: inherit;
    `
    return (<>
        <TextBlock>
            <p>Sci-Fi Wasteland was brought to life from scratch by our amazing owner & admin team. If you love our server, and want to donate, you're in the right spot. Every dollar is much appreciated and goes directly back into server costs. We can't do this without you!</p><br/>
            <p>When making a one time donation, make sure to tag us in Discord so we can say thanks. Don't forget to select your discord username if making a subscription donation as well. We love our donators and want to make sure we recognize you & give you the thanks you deserve!</p>
        </TextBlock>

        <FlexContainer>
            <FlexBox>
                <PayLink to='https://www.paypal.com/paypalme/SciFiFinances' target='_blank'>
                    <DonoContainer>
                        
                            <DonoItems>
                                <p>One Time Donation: </p>
                            </DonoItems>
                            <DonoItems>
                                <i class="fa-brands fa-paypal fa-2xl"></i>
                            </DonoItems> 
                        
                    </DonoContainer>
                </PayLink>
            </FlexBox>
        </FlexContainer>

        {/* https://donatebot.io/checkout/693526731948294214 */}
        {/* https://www.paypal.com/paypalme/SciFiFinances */}

    </>)
}

export default Donate;