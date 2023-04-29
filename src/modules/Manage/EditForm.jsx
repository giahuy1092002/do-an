import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { message } from 'antd';
import { useParams } from 'react-router-dom';

function EditData() {
    const [farm_id, setFarm_id] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [minAction, setMinAction] = useState('');
    const [maxAction, setMaxAction] = useState('');
    const [file, setFile] = useState({});
    const handleImage = (e) => {
        setFile(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    var id_params = useParams().id;
    const [disable, setDisable] = useState(useParams().id.includes('control'))
    if (disable) {
        id_params = id_params.substring(7);
    }
    const editControlEquip = async (id_params) => {

        try {
            // make axios post request
            const res = await axios({
                method: "patch",
                url: `http://localhost:3001/device/editDataEquip/${id_params}`,
                data: {
                    name: name,
                    id: id,
                    farm_id: farm_id,
                    image: file,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(() => {
                    message.success('Chỉnh sửa thiết bị thành công', 1);
                })
                .catch(() => {
                    message.error("Chỉnh sửa thiết bị thất bại", 1);
                })

        } catch (error) {
            return error.response.data;
        }
    }
    const editDataEquip = async (id_params) => {

        try {
            // make axios post request
            const res = await axios({
                method: "patch",
                url: `http://localhost:3001/device/editDataEquip/${id_params}`,
                data: {
                    name: name,
                    id: id,
                    min: min,
                    max: max,
                    farm_id: farm_id,
                    image: file,
                    min_action: minAction,
                    max_action: maxAction
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(() => {
                    message.success('Chỉnh sửa thiết bị thành công', 1);
                })
                .catch(() => {
                    message.error("Chỉnh sửa thiết bị thất bại", 1);
                })

        } catch (error) {
            return error.response.data;
        }
    }
    return (
        <div>
            <TitleContainer>
                <CenterText>Chỉnh sửa thiết bị</CenterText>
            </TitleContainer>
            <Form onSubmit={handleSubmit}>
                <FormItem style={{ flexDirection: 'column' }}>
                    <label>Id</label>
                    <Input onChange={(e) => setId(e.target.value)} />
                </FormItem>
                <FormItem style={{ flexDirection: 'column' }}>
                    <label>Tên</label>
                    <Input onChange={(e) => setName(e.target.value)} />
                </FormItem>
                <FormItem>
                    <div style={{ marginRight: '5%' }}>
                        <label>Min</label>
                        <Input style={{ width: '100%' }} onChange={(e) => setMin(e.target.value)} disabled={disable} />
                    </div>
                    <div style={{ marginLeft: '5%' }}>
                        <label>Max</label>
                        <Input style={{ width: '100%' }} onChange={(e) => setMax(e.target.value)} disabled={disable} />
                    </div>
                </FormItem>
                <FormItem style={{ flexDirection: 'column' }}>
                    <label>Farm Id</label>
                    <Input onChange={(e) => setFarm_id(e.target.value)} />
                </FormItem>
                <FormItem>
                    <div style={{ marginRight: '5%' }}>
                        <label>Min Action</label>
                        <Input style={{ width: '100%' }} onChange={(e) => setMinAction(e.target.value)} disabled={disable} />
                    </div>
                    <div style={{ marginLeft: '5%' }}>
                        <label>Max Action</label>
                        <Input style={{ width: '100%' }} onChange={(e) => setMaxAction(e.target.value)} disabled={disable} />
                    </div>
                </FormItem>
                <FormItem style={{ flexDirection: 'column' }}>
                    <label>Ảnh thiết bị</label>
                    <Input type="file" onChange={handleImage} />
                </FormItem>
                <EditButton onClick={disable ? () => editControlEquip(id_params) : () => editDataEquip(id_params)} >Chỉnh sửa</EditButton>
            </Form>
        </div>

    )
}

export default EditData;
const TitleContainer = styled.div`
    padding-top: 20px;
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

const Form = styled.form`
    width:400px;
    height:600px;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-direction:column;
    margin-top:30px;
`;
const FormItem = styled.div`
    display:flex;
    margin-bottom:15px;
`;
const EditButton = styled(Button)`
    border-radius: 16px !important;
    border: none !important;
    font-size: 16px;
    font-weight: 600 !important;
    transition: 1s;
    background-color: #3578E5;
    color: #fff;
    height: 48px;
    cursor: pointer;
`;