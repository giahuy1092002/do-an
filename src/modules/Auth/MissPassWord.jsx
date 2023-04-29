import styled from "styled-components";
import { Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function MissPassWord() {
    const formik = useFormik({
        initialValues: {
            email: "",
            phone: "",
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const forgetPassword = async () => {
        try {
            // make axios post request
            const res = await axios({
                method: "post",
                url: `http://localhost:3001/user/forgetPassword`,
                data: {
                    email: formik.values.email,
                    phone: formik.values.phone,
                },
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
    return (
        <div>
            <TitleContainer>
                <CenterText>Quên mật khẩu</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm>
                    <FormItem>Chỉ cần nhập email và nhấn núi “Gửi”,
                        chúng tôi sẽ gửi mật khẩu tạm thời đến số điện thoại của bạn ngay lập tức
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Email</span>
                        <FormInput placeholder="Nhập email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            id="email"
                        />
                    </FormItem>
                    <div style={{position: "relative" }}>
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
                        <span><Text>*</Text>Số điện thoại</span>
                        <FormInput placeholder="Nhập email"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            id="phone"
                        />
                    </FormItem>
                    <div style={{position: "relative" }}>
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
                        <FormButton onClick={forgetPassword}>Gửi</FormButton>
                    </FormItem>
                </CustomForm>

            </FormContainer>
        </div>

    )
}

export default MissPassWord;

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
    margin-bottom: 25px;
`;
const FormInput = styled(Input)`
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
const CustomForm = styled.div`
    width: 600px;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;