import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { useState } from "react";

function Login() {
    const [username,setUserName]=useState('');
    const [password,setPassWord]=useState('');
    return (
        <div>
            <TitleContainer>
                <CenterText>Đăng nhập</CenterText>
                <CenterText>Nguyễn Lương Gia Huy</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm>
                    <FormItem>
                        <span> <Text>*</Text>Tên đăng nhập</span>
                        <FormInput 
                        placeholder="Nhập tên đăng nhập"
                        type="text"
                        onChange={(e)=>{setUserName(e.target.value)}}
                        />
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Mật khẩu</span>
                        <FormInputPassWord 
                        placeholder="Hãy nhập mật khẩu" 
                        type="password"
                        value={password}
                        onChange={(e)=>{setPassWord(e.target.value)}}
                        />
                    </FormItem>

                    <span>Quên mật khẩu? <FormNote to='/misspassword'>Cài đặt lại mật khẩu</FormNote></span>
                    <FormItem style={{marginTop:'20px'}}>
                        <FormButton>Đăng nhập</FormButton>
                    </FormItem>
                    <span>Chưa có tài khoản? <FormNote to='/register'>Đăng ký</FormNote></span>
                </CustomForm>

            </FormContainer>
        </div>

    )
}

export default Login;

const TitleContainer = styled.div`
    margin-top: 50px;
    padding-top: 100px;
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
    margin-bottom: 30px;
`;
const FormInput = styled(Input)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;
const FormInputPassWord = styled(Input.Password)`
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
const FormNote = styled(Link)`
    color:#087F38;
    text-decoration:none;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;