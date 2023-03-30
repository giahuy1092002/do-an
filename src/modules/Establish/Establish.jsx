import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Establish() {
    return (
        <div>
            <TitleContainer>
                <TitleText>Quản lý thiết bị</TitleText>
                <Link to='add'>
                    <AddButton>Thêm thiết bị</AddButton>
                </Link>
            </TitleContainer>
            <ListEquip>

            </ListEquip>
        </div>
    )
}

export default Establish;

const TitleContainer = styled.div`
    margin-left: 150px;
    margin-top: 50px;
    padding-top: 100px;
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
const AddButton = styled.button`
    color: #333;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    margin-left: 10px;
    font-size:14px;
    font-weight: 600;
    height: 40px;
`;
const ListEquip = styled.div`
    border: 3px solid #10B5E9;
    height: 800px;
    margin-right:150px;
    margin-left: 150px;
`;