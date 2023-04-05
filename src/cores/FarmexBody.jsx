import React from "react";
import styled from "styled-components";
import { FARMEX_BANNER } from "../constants/data";

function FarmexBody(){
    return (
        <BackGroundImage>
           <h1 style={{fontSize:'70px'}}>Smart Farm</h1>
           <p style={{fontSize:'30px',color:'white'}}>Welcome to Farmex Farm</p>
        </BackGroundImage>
    )
}

export default FarmexBody;

const BackGroundImage = styled.div`
    background-image: url('https://www.pixel4k.com/wp-content/uploads/2018/10/dry-wheat-farm-4k_1540141088.jpg');
    background-position: center;
    place-content: center;
    background-size: cover;
    text-align: center;
    height: 1000px;
    color: white;
    display: grid;
`;