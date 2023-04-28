import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Modal, Button, Input, Table, message } from 'antd';

function DataDevice() {
    const [listEquip, setListEquip] = useState([]);
    const farm_id = '1';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [minAction, setMinAction] = useState('');
    const [maxAction, setMaxAction] = useState('');
    const [file, setFile] = useState({});
    const editDataEquip = async (id) => {

        try {
            // make axios post request
            const res = await axios({
                method: "patch",
                url: `http://localhost:3001/device/editDataEquip/${id}`,
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
                .then(res => {
                    message.success('Chỉnh sửa thiết bị thành công', 1);
                })
                .catch(err=>{
                    message.error("Chỉnh sửa thiết bị thất bại",1);
                })

        } catch (error) {
            return error.response.data;
        }
    }
    const deleteDataEquip = async (id) => {
        try {
            // make axios post request
            const res = await axios({
                method: "delete",
                url: `http://localhost:3001/device/deleteDataEquip/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then(res => {
                    message.success("Xóa thiết bị thành công", 1);
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
    const showModal2 = () => {
        setIsModalOpen2(true);
    };

    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };
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
            title: 'min',
            dataIndex: 'min'
        },
        {
            title: 'max',
            dataIndex: 'max'
        },
        {
            title: 'minAction',
            dataIndex: 'min_action'
        },
        {
            title: 'maxAction',
            dataIndex: 'max_action'
        },
        {
            title: 'image',
            dataIndex: 'image',
            render: (text) => <img style={{ width: '50px', height: '50px' }} src={text} alt="" />,
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <>
                    <Button onClick={showModal1} style={{ color: '#fff', backgroundColor: 'red' }}>Xóa</Button>
                    <Modal title="Xóa thiết bị" open={isModalOpen1} onOk={() => deleteDataEquip(record.id)} onCancel={handleCancel1} style={{ marginTop: '50px' }}>
                        <p>Bạn có muốn xóa thiết bị này không?</p>
                    </Modal>
                </>

            ),
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <>
                    <Button onClick={showModal2} style={{ color: '#fff', backgroundColor: 'rgb(53, 120, 229)' }}>Chỉnh sửa</Button>
                    <Modal title="Chỉnh sửa thiết bị" open={isModalOpen2} onOk={()=>editDataEquip(record.id)} onCancel={handleCancel2}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                            <label>Id</label>
                            <ModalInput onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                            <label>Tên thiết bị</label>
                            <ModalInput onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div style={{ display: 'flex', width: '90%' }}>
                            <div style={{ marginRight: '20px' }}>
                                <label>Min</label>
                                <ModalInput onChange={(e) => setMin(e.target.value)} />
                            </div>
                            <div>
                                <label>Max</label>
                                <ModalInput onChange={(e) => setMax(e.target.value)} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                            <label>Farm Id</label>
                            <ModalInput />
                        </div>
                        <div style={{ display: 'flex', width: '90%' }}>
                            <div style={{ marginRight: '20px' }}>
                                <label>Min action</label>
                                <ModalInput onChange={(e) => setMinAction(e.target.value)} />
                            </div>
                            <div>
                                <label>Max action</label>
                                <ModalInput onChange={(e) => setMaxAction(e.target.value)} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                            <label>Ảnh thiết bị</label>
                            <FileInput type="file" style={{ padding: '10px 15px' }} onChange={handleImage} />
                        </div>

                    </Modal>
                </>

            ),
        }
    ];
    const addInputEquip = async () => {
        try {
            // make axios post request
            const res = await axios({
                method: "post",
                url: `http://localhost:3001/device/addDataEquip`,
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
                .then(res => {
                    message.success("Thêm thiết bị thành công", 1);
                })
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/device/getDataEquipsByFarm/${farm_id}`,
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
                <h3 style={{ marginTop: '5px' }}>Thiết bị input</h3>
                <AddButton type="primary" onClick={showModal} style={{ marginLeft: '20px' }}>
                    Thêm thiết bị
                </AddButton>
            </div>
            <Modal title="Thêm thiết bị" open={isModalOpen} onOk={addInputEquip} onCancel={handleCancel}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Id</label>
                    <ModalInput onChange={(e) => setId(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Tên thiết bị</label>
                    <ModalInput onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ display: 'flex', width: '90%' }}>
                    <div style={{ marginRight: '20px' }}>
                        <label>Min</label>
                        <ModalInput onChange={(e) => setMin(e.target.value)} />
                    </div>
                    <div>
                        <label>Max</label>
                        <ModalInput onChange={(e) => setMax(e.target.value)} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                    <label>Farm Id</label>
                    <ModalInput />
                </div>
                <div style={{ display: 'flex', width: '90%' }}>
                    <div style={{ marginRight: '20px' }}>
                        <label>Min action</label>
                        <ModalInput onChange={(e) => setMinAction(e.target.value)} />
                    </div>
                    <div>
                        <label>Max action</label>
                        <ModalInput onChange={(e) => setMaxAction(e.target.value)} />
                    </div>
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

export default DataDevice;
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