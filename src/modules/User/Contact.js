import React from "react";
import styled from "styled-components";
import { Input } from "antd";


function Contact() {
    return (
        <div>
            <TitleContainer>
                <CenterText>Gửi phản hồi</CenterText>
            </TitleContainer>
            
            <FormContainer>
                <CustomForm >
                    <FormItem>
                        <span> <Text>*</Text>Họ và tên</span>
                        <FormInput


                        />
                    </FormItem>
                    <FormItem>
                        <span> <Text>*</Text>Số điện thoại</span>
                        <FormInput


                        />
                    </FormItem>
                    <FormItem>
                        <span> <Text>*</Text>Email</span>
                        <FormInput


                        />
                    </FormItem>
                    <FormItem>
                        <span> <Text>*</Text>Phản hổi</span>
                        <Input style={{height:'100px'}}/>
                    </FormItem>




                    <FormItem style={{ marginTop: '20px', marginBottom: '10px' }}>
                        <FormButton type="submit">Gửi</FormButton>
                    </FormItem>
                </CustomForm>

            </FormContainer>
        </div>

    )
}

export default Contact;

const TitleContainer = styled.div`
    padding-top: 50px;
    margin-bottom: 40px;
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
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
}
`;
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
const FormInput = styled(Input)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;
const FormButton = styled.button`
    border-radius: 16px !important;
    border: none !important;
    font-size: 16px;
    font-weight: 600 !important;
    transition: 1s;
    background-color: #087F38;
    color: #fff;
    height: 48px;
    cursor: pointer;
`;
const CustomForm = styled.form`
    width: 600px;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;