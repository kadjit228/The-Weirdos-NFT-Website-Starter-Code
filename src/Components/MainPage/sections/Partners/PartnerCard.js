import React from 'react';
import styled from 'styled-components';
import logo from './../../../../assets/ToolsAssets/tuz.png'


const Item = styled.div`
    width: 18vw;
    height: 22vh;
    margin: 3vw;
    padding: 3vh;
    color: black;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    :hover{
        transform: scale(1.1);
    }
    img{
        width:100%;
        height: auto;
        border-radius: 10px;
        transition: all 0.125s ease;
    }

`

function PartnerCard() {
    return (
        <Item>
                <img src={logo} alt="image" />
                <name>
                    The Best Cat In The World
                </name>
        </Item>
    );
}

export default PartnerCard;