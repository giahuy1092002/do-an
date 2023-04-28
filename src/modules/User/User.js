import { useEffect, useState } from 'react';
import { Input, message } from "antd";
import styled from 'styled-components';
import axios from 'axios';
import { Radio } from 'antd';
import { Modal } from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup";

function User() {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [src, setSrc] = useState('');
    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string()
                .required("Hãy nhập mật khẩu cũ")
                .matches(
                    /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
                    "Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
                ),
            newPassword: Yup.string()
                .required("Hãy nhập mật khẩu mới")
                .matches(
                    /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
                    "Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
                ),
            confirmPassword: Yup.string()
                .required("Hãy nhập lại mật khẩu mới")
                .oneOf(
                    [Yup.ref("newPassword"), null],
                    "Mật khẩu mới và xác thực mật khẩu không đúng"
                ),


        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/user/getProfile`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    setUser(res.data);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);

    const editProfile = async () => {

        try {
            // make axios post request
            const res = await axios({
                method: "patch",
                url: `http://localhost:3001/user/editProfile`,
                data: {
                    name: name,
                    bdate: date,
                    gender: gender,
                    phone: phone,
                    email: email,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'content-type': 'application/x-www-form-urlencoded'
                }
            })
                .then(res => {
                    message.success('Cập nhật thông tin người dùng thành công', 1);
                    return res.data;
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        message.warning('Số điện thoại đã tồn tại', 1);
                    }
                })

        } catch (error) {
            return error.response.data;
        }
    }
    const changePassWord = async () => {

        try {
            // make axios post request
            const res = await axios({
                method: "patch",
                url: `http://localhost:3001/user/changePassword`,
                data: {
                    oldPassword: formik.values.oldPassword,
                    newPassword: formik.values.newPassword,
                    confirmPassword: formik.values.confirmPassword,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'content-type': 'application/x-www-form-urlencoded'
                }
            })
                .then(res => {
                    message.success('Cập nhật thông tin người dùng thành công', 1);
                    return res.data;
                })

        } catch (error) {
            return error.response.data;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    var x = "";
    if (user.bdate) {
        x = user.bdate.substring(0, 10)
    }
    const setAvatar = async () => {
        try {
            // make axios post request
            const res = await axios({
                method: "patch",
                url: `http://localhost:3001/user/setAvatar`,
                data: {
                    image: image,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
    useEffect(() => {
        const getAvatar = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/user/getAvatar`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((res) => {
                    setSrc(res.data.avatar);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        getAvatar();
    }, []);
    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                <ImageContainer src={src} alt="" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                <Input type="file"
                    onChange={handleImage}
                    name="file"
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}
                />
                <FormButton style={{ marginLeft: 'auto', marginRight: 'auto' }} onClick={setAvatar}>Cập nhật ảnh đại diện</FormButton>
            </div>
            <div>
                <h3 style={{ textAlign: 'left', paddingLeft: '70px' }}>Thông tin người dùng</h3>
                <FormContainer>
                    <CustomForm onSubmit={handleSubmit}>
                        <FormItem>
                            <span> <Text>*</Text>Họ và tên</span>
                            <FormInput onChange={(e) => { setName(e.target.value) }} defaultValue={user.name} />
                        </FormItem>
                        <FormItem>
                            <span> <Text>*</Text>Số điện thoại</span>
                            <FormInput onChange={(e) => { setPhone(e.target.value) }} defaultValue={user.phone} />
                        </FormItem>
                        <FormItem>
                            <span> <Text>*</Text>Email</span>
                            <FormInput onChange={(e) => { setEmail(e.target.value) }} defaultValue={user.email} />
                        </FormItem>
                        <FormItem>
                            <FormButtonChange onClick={showModal}>Thay đổi mật khẩu</FormButtonChange>
                        </FormItem>
                        <Modal title={<h3 style={{ fontWeight: '600' }}>Thay đổi mật khẩu</h3>}
                            style={{ marginTop: '50px' }}
                            open={isModalOpen}
                            onOk={changePassWord}
                            onCancel={handleCancel}
                        >
                            <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                                    <h6>Mật khẩu hiện tại</h6>
                                    <FormInputPassWord
                                        style={{ marginTop: '0' }}
                                        id="oldPassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.oldPassword} />
                                </div>
                                <div style={{ height: "10px", position: "relative" }}>
                                    {formik.errors.oldPassword && (
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
                                            {formik.errors.oldPassword}{" "}
                                        </p>
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                                    <h6>Mật khẩu mới</h6>
                                    <FormInputPassWord
                                        style={{ marginTop: '0' }}
                                        id="newPassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.newPassword} />
                                </div>
                                <div style={{ height: "10px", position: "relative" }}>
                                    {formik.errors.newPassword && (
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
                                            {formik.errors.newPassword}{" "}
                                        </p>
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                                    <h6>Nhập lại mật khẩu mới</h6>
                                    <FormInputPassWord
                                        style={{ marginTop: '0' }}
                                        id="confirmPassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword} />
                                </div>
                                <div style={{ height: "10px", position: "relative" }}>
                                    {formik.errors.confirmPassword && (
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
                                            {formik.errors.confirmPassword}{" "}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </Modal>
                        <FormItem>
                            <span> <Text>*</Text>Giới tính</span>
                            <Radio.Group style={{ marginTop: '10px' }} defaultValue={'Nam'}>
                                <Radio value="Nam" onChange={handleGender}>Nam</Radio>
                                <Radio value="Nữ" onChange={handleGender}>Nữ</Radio>
                                <Radio value="Khác" onChange={handleGender}>Khác</Radio>
                            </Radio.Group>
                        </FormItem>
                        <FormItem>
                            <span> <Text>*</Text>Ngày sinh</span>
                            <FormInput
                                type="date"
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                                defaultValue={x}
                            />
                        </FormItem>
                        <FormItem>
                            <FormButton
                                type="submit"
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                                onClick={editProfile}
                            >Cập nhật</FormButton>
                        </FormItem>
                    </CustomForm>
                </FormContainer>
            </div>
        </Container>
    )
}
export default User;

const FormInput = styled.input`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;
const CustomForm = styled.form`
    width: 600px;
    padding-left:70px;
`;
const ImageContainer = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid #333;
    border-radius: 50%;
    margin-bottom: 20px;
    margin-top:50px;
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
    margin-top:10px;
    width: 50%;
`;
const FormButtonChange = styled.button`
    border-radius: 16px !important;
    border: none !important;
    font-size: 16px;
    font-weight: 600 !important;
    transition: 1s;
    background-color: #EB7109;
    color: #fff;
    height: 48px;
    cursor: pointer;
    margin-top:10px;
`;
const Container = styled.div`
    margin-top:50px;
    display: flex;
    padding-left:100px;
    position: relative;
`;
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
}
`;
const FormInputPassWord = styled(Input.Password)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 12px 10px;
`;