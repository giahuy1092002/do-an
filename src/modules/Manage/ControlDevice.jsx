import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Modal, Button, Input, Table, message, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';

function ControlDevice() {
    const [listEquip, setListEquip] = useState([]);
    const farm_id = '1';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [file, setFile] = useState({});
    const navigate = useNavigate();
    const deleteControlEquip = async (id) => {
        try {
            // make axios post request
            const res = await axios({
                method: "delete",
                url: `http://localhost:3001/device/deleteControlEquip/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then(res => {
                    message.success("Xóa thiết bị thành công", 1);
                })
                .catch(err => {
                    message.error("Xóa thiết bị thất bại", 1);
                })
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
    const handleImage = (e) => {
        setFile(e.target.files[0]);
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal1 = () => {
        setIsModalOpen1(true);
    };

    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };
    const handleSwitchChange = async (checked, record) => {
        try {
            // make axios post request
            await axios({
                method: "patch",
                url: `http://localhost:3001/device/setStatusControlEquip/${record.id}/${checked ? 1 : 0}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data"
                }
            });
        } catch (error) {
            return error.response.data;
        }
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: 'image',
            dataIndex: 'image',
            render: (text) => <img style={{ width: '50px', height: '50px' }} src={text} alt="" />,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status, record) => (
                <Switch
                    defaultChecked={status}
                    onChange={(checked) => handleSwitchChange(checked, record)}
                />
            ),
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <>
                    <Button onClick={showModal1} style={{ color: '#fff', backgroundColor: 'red' }}>Xóa</Button>
                    <Modal
                        style={{ marginTop: '50px' }}
                        title="Xóa thiết bị"
                        open={isModalOpen1}
                        onOk={() => deleteControlEquip(record.id)}
                        onCancel={handleCancel1}>
                        <p>Bạn có muốn xóa thiết bị này hay không?</p>
                    </Modal>
                </>

            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <>
                    <Button onClick={()=>navigate(`control${record.id}`)} style={{ color: '#fff', backgroundColor: 'rgb(53, 120, 229)' }}>Chỉnh sửa</Button>
                </>

            ),
        },

    ];
    const addControlEquip = async () => {
        try {
            // make axios post request
            const res = await axios({
                method: "post",
                url: `http://localhost:3001/device/addControlEquip`,
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
                .then(res => {
                    message.success("Thêm thiết bị thành công", 1);
                })
                .catch(err => {
                    message.error("Thêm thiết bị thất bại", 1);
                })
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            await axios({
                method: "get",
                url: `http://localhost:3001/device/getControlEquipsByFarm/${farm_id}`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((res) => {
                    setListEquip(res.data.data)
                })

        };
        fetchData();
    }, []);
    return (
        <div>
            <div style={{ display: 'flex', marginLeft: '10%' }}>
                <h3 style={{ marginTop: '5px' }}>Thiết bị điều khiển</h3>
                <AddButton type="primary" onClick={showModal} style={{ marginLeft: '20px' }}>
                    Thêm thiết bị
                </AddButton>
            </div>
            <Modal title="Thêm thiết bị" open={isModalOpen} onOk={addControlEquip} onCancel={handleCancel} style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Id</label>
                    <ModalInput onChange={(e) => setId(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Tên thiết bị</label>
                    <ModalInput onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Farm Id</label>
                    <ModalInput />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Ảnh thiết bị</label>
                    <FileInput type="file" style={{ padding: '10px 15px' }} onChange={handleImage} />
                </div>

            </Modal>
            <Table columns={columns} dataSource={listEquip} style={{ margin: '20px 140px' }} />
        </div>
    )
}

export default ControlDevice;
const AddButton = styled(Button)`
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
const ModalInput = styled(Input)`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;

const FileInput = styled.input`
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;