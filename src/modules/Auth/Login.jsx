import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import axios from "axios";
import { message } from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup";


function Login() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            phone: "",
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required("Hãy nhập mật khẩu")
                .matches(
                    /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
                    "Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
                ),
            phone: Yup.string()
                .required("Hãy nhập số điện thoại")
                .matches(
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    "Số điện thoại không hợp lệ"
                ),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const login = async () => {
        const res = await axios({
            method: "post",
            url: 'http://localhost:3001/user/signin',
            data: {
                phone: formik.values.phone,
                password: formik.values.password,
            },
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then((res) => {
                message.success('Đăng nhập thành công', 1)
                localStorage.setItem('token', res.data.token);
                navigate('/');
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    message.warning('Số điện thoại không tồn tại',1);
                }
                else if(err.response.status === 422){
                    message.warning('Nhập sai mật khẩu! Vui lòng nhập lại!',1);
                }
            }
            )
    }
    return (
        <div>
            <TitleContainer>
                <CenterText>Đăng nhập</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm onSubmit={formik.handleSubmit}>
                    <FormItem>
                        <span> <Text>*</Text>Số điện thoại</span>
                        <FormInput
                            placeholder="Nhập số điện thoại"
                            type="text"
                            id="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                    </FormItem>
                    <div style={{ height: "10px", position: "relative" }}>
                        {formik.errors.phone && (
                            <p
                                style={{
                                    marginLeft: '5px',
                                    color: "#ff4d4f",
                                    fontSize: "14px",
                                    position: "absolute",
                                    bottom: "-8px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.phone}{" "}
                            </p>
                        )}
                    </div>

                    <FormItem>
                        <span><Text>*</Text>Mật khẩu</span>
                        <FormInputPassWord
                            placeholder="Hãy nhập mật khẩu"
                            type="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </FormItem>
                    <div style={{ height: "10px", position: "relative" }}>
                        {formik.errors.password && (
                            <p
                                style={{
                                    marginLeft: '5px',
                                    color: "#ff4d4f",
                                    fontSize: "14px",
                                    position: "absolute",
                                    bottom: "-8px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.password}{" "}
                            </p>
                        )}
                    </div>

                    <span style={{ marginLeft: '5px' }}>Quên mật khẩu? <FormNote to='/misspassword'>Cài đặt lại mật khẩu</FormNote></span>
                    <FormItem style={{ marginTop: '20px', marginBottom: '10px' }}>
                        <FormButton type="submit" onClick={login}>Đăng nhập</FormButton>
                    </FormItem>
                    <span style={{ marginLeft: '5px' }}>Chưa có tài khoản? <FormNote to='/register'>Đăng ký</FormNote></span>
                </CustomForm>

            </FormContainer>
        </div>

    )
}

export default Login;

const TitleContainer = styled.div`
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
const FormInputPassWord = styled(Input.Password)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 12px 10px;
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
    text-decoration: none;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;