import React, {useState} from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Privacy() {

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
    return (<>
        <TextBlock>
            <p>This is just a test project, we don't have any privacy policy.</p><br/>
        </TextBlock>


    </>)
}

export default Privacy;