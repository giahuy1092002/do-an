import React from 'react';
import styled from 'styled-components';
import DataDevice from './DataDevice';
import ControlDevice from './ControlDevice';


function Establish() {
    return (
        <div>
            <TitleContainer>
                <TitleText>Quản lý thiết bị</TitleText>
            </TitleContainer>
            <DataDevice/>
            <ControlDevice/>
        </div>
    )
}

export default Establish;

const TitleContainer = styled.div`
    margin-left: 150px;
    padding-top:50px;
    margin-bottom: 40px;
    align-items: center;
    display: flex;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
    }
`;
const TitleText = styled.div`
    text-align: left;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    color: #333;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
`;


