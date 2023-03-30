import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "antd";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Register() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [rePassword, setRePassWord] = useState('');
    const register = async () => {

        try {
            // make axios post request
            const res = await axios({
                method: "post",
                url: 'http://localhost:3100/user/signin',
                data:  {
                    phone: phone,
                    email: email,
                    password: password,
                    rePassword: rePassword,
                    name: name
                },
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            console.log({ name, phone, password, rePassword, email });
            // console.log(res.data);
        } catch (error) {
            console.log({ name, phone, password, rePassword, email });
            console.log(error.response.data);
        }
    }
    const handleSubmit = (e) => {

        e.preventDefault();
    }
    return (
        <div>
            <TitleContainer>
                <CenterText>Đăng ký</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm onSubmit={handleSubmit} method="POST">
                    <FormItem>
                        <span><Text>*</Text>Họ và tên</span>
                        <FormInput placeholder="Hãy nhập họ và tên" onChange={(e) => { setName(e.target.value) }}
                            name="name"
                            value={name}
                        />
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Số điện thoại</span>
                        <FormInput placeholder="Nhập số điện thoại" onChange={(e) => { setPhone(e.target.value) }}
                            name="phone"
                            value={phone}
                        />
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Email</span>
                        <FormInput placeholder="Nhập email" onChange={(e) => { setEmail(e.target.value) }}
                            name="email"
                            value={email}
                        />
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Mật khẩu</span>
                        <FormInputPassWord placeholder="Nhập mật khẩu" onChange={(e) => { setPassWord(e.target.value) }}
                            name="password"
                            value={password}
                        />
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Nhập lại mật khẩu</span>
                        <FormInputPassWord placeholder="Nhập lại mật khẩu" onChange={(e) => { setRePassWord(e.target.value) }}
                            name="rePassWord"
                            value={rePassword}
                        />
                    </FormItem>
                    <FormItem>
                        <FormButton type="submit" onClick={register}>Đăng ký</FormButton>
                    </FormItem>
                    <span>Đã có tài khoản? <FormNote to='/login'>Đăng nhập</FormNote></span>
                </CustomForm>

            </FormContainer>
        </div>
    )
}

export default Register;
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
const CustomForm = styled.div`
    width: 600px;
`;
const FormNote = styled(Link)`
    color:#087F38;
    text-decoration: none;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;