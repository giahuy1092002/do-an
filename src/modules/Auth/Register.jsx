import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message } from "antd";

function Register() {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            password: "",
            email: "",
            repassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Hãy nhập họ và tên"),
            password: Yup.string()
                .required("Hãy nhập mật khẩu")
                .matches(
                    /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
                    "Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
                ),
            email: Yup.string()
                .required("Hãy nhập địa chỉ email")
                .matches(/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    "Email không hợp lệ"
                ),
            phone: Yup.string()
                .required("Hãy nhập số điện thoại")
                .matches(
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    "Số điện thoại không hợp lệ"
                ),
            repassword: Yup.string()
                .required("Hãy nhập lại mật khẩu")
                .oneOf(
                    [Yup.ref("password"), null],
                    "Mật khẩu và xác thực mật khẩu không đúng"
                ),


        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const navigate = useNavigate();
    const register = async () => {
        try {
            const res = await axios({
                method: "post",
                url: 'http://localhost:3001/user/signUp',
                data: {
                    phone: formik.values.phone,
                    email: formik.values.email,
                    password: formik.values.password,
                    rePassword: formik.values.repassword,
                    name: formik.values.name,
                },
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
                .then((res) => {
                    message.success('Đăng ký thành công',1);
                    navigate('/login');
                })
                .catch(err=>{
                    if (err.response.status===404){
                        message.warning('Số điện thoại đã tồn tại',1);
                    }
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
    return (
        <div>
            <TitleContainer>
                <CenterText>Đăng ký</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm onSubmit={formik.handleSubmit} method="POST">
                    <FormItem>
                        <span><Text>*</Text>Họ và tên</span>
                        <FormInput placeholder="Nhập họ và tên"
                            id="name"
                            onChange={formik.handleChange}
                            name="name"
                            value={formik.values.name}
                        />
                    </FormItem>
                    <div style={{ height: "10px", position: "relative" }}>
                        {formik.errors.name && (
                            <p
                                style={{
                                    marginLeft: '5px',
                                    color: "#ff4d4f",
                                    fontSize: "14px",
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.name}{" "}
                            </p>
                        )}
                    </div>
                    <FormItem>
                        <span><Text>*</Text>Số điện thoại</span>
                        <FormInput placeholder="Nhập số điện thoại"
                            id="phone"
                            onChange={formik.handleChange}
                            name="phone"
                            value={formik.values.phone}
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
                                    bottom: "-10px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.phone}{" "}
                            </p>
                        )}
                    </div>
                    <FormItem>
                        <span><Text>*</Text>Email</span>
                        <FormInput placeholder="Nhập email"
                            id="email"
                            onChange={formik.handleChange}
                            name="email"
                            value={formik.values.email}
                        />
                    </FormItem>
                    <div style={{ height: "10px", position: "relative" }}>
                        {formik.errors.email && (
                            <p
                                style={{
                                    marginLeft: '5px',
                                    color: "#ff4d4f",
                                    fontSize: "14px",
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.email}{" "}
                            </p>
                        )}
                    </div>
                    <FormItem>
                        <span><Text>*</Text>Mật khẩu</span>
                        <FormInputPassWord placeholder="Nhập mật khẩu"
                            id="password"
                            onChange={formik.handleChange}
                            name="password"
                            value={formik.values.password}
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
                                    bottom: "-10px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.password}{" "}
                            </p>
                        )}
                    </div>
                    <FormItem>
                        <span><Text>*</Text>Nhập lại mật khẩu</span>
                        <FormInputPassWord placeholder="Nhập lại mật khẩu"
                            id="repassword"
                            onChange={formik.handleChange}
                            name="repassword"
                            value={formik.values.repassword}
                        />
                    </FormItem>
                    <div style={{ height: "10px", position: "relative" }}>
                        {formik.errors.repassword && (
                            <p
                                style={{
                                    marginLeft: '5px',
                                    color: "#ff4d4f",
                                    fontSize: "14px",
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "0",
                                }}
                            >
                                {" "}
                                {formik.errors.repassword}{" "}
                            </p>
                        )}
                    </div>
                    <FormItem>
                        <FormButton type="submit" onClick={register}>Đăng ký</FormButton>
                    </FormItem>
                    <span style={{ marginLeft: '5px' }}>Đã có tài khoản? <FormNote to='/login'>Đăng nhập</FormNote></span>
                </CustomForm>

            </FormContainer>
        </div>
    )
}

export default Register;
const TitleContainer = styled.div`
    padding-top: 10px;
    margin-bottom: 20px;
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
    padding: 12px 10px;
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