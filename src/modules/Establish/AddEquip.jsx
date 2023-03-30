import React from 'react';
import styled from 'styled-components';

function AddEquip() {
  return (
    <Container>
        <TitleContainer>
            <CenterText>
                Thêm thiết bị
            </CenterText>
        </TitleContainer>
    </Container>
  )
}

export default AddEquip;
const TitleContainer = styled.div`
    margin-bottom: 40px;
    padding-top:20px;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
}
`;
const CenterText = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #333;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
`;
const Container = styled.div`
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 500px;
    border: 2px solid #14D756;
    border-radius: 15px;
`;