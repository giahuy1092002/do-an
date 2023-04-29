import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
    FileTextOutlined
} from '@ant-design/icons';

function Chart() {
    const [value, setValue] = useState('');
    const [temp, setTemp] = useState(0);
    const [air, setAir] = useState(0);
    const [land, setLand] = useState(0);
    const [light, setLight] = useState(0);
    const [open, setOpen] = useState(true);
    const options = [
        { label: '', value: '' },
        { label: 'Biểu đồ cảm biến nhiệt độ', value: 'temp' },
        { label: 'Biểu đồ cảm biến độ ẩm không khí', value: 'air' },
        { label: 'Biểu đồ cảm biến độ ẩm đất', value: 'land' },
        { label: 'Biểu đồ cảm biến ánh sáng', value: 'light' }
    ]
    const handleSelect = (e) => {
        setValue(e.target.value);
    }
    // get temp
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/data/get/v1`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    setTemp(res.data[res.data.length - 1].data);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);
    // get air
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/data/get/v2`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    setAir(res.data[res.data.length - 1].data);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);
    // get land
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/data/get/v3`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    setLand(res.data[res.data.length - 1].data);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);
    const navigate = useNavigate();
    // get light
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/data/get/v4`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    setLight(res.data[res.datalength - 1].data);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);
    useEffect(() => {
        navigate(value);
    }, [value, navigate])
    return (
        <div style={{ marginBottom: '50px', marginTop: '30px' }}>
            <div style={{ display: 'flex', marginLeft: '10%' }}>
                <h2><FileTextOutlined /></h2>
                <h2>Thông số hiện tại của các cảm biến</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '13%', justifyContent: 'space-around', position: 'relative' }}>
                <div style={{ display: 'flex' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3534/3534501.png" alt="" style={{ width: '30px', height: '30px' }} />
                    <p>Thông số cảm biến nhiệt độ hiện tại:<span style={{ fontWeight: '700' }}>{temp}°C</span> </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1113/1113723.png" alt="" style={{ width: '25px', height: '25px' }} />
                    <p>Thông số cảm biến độ ẩm không khí hiện tại:<span style={{ fontWeight: '700' }}>{air}(g/m³)</span> </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/soil-moisture-monitoring-3917833-3254995.png" alt="" style={{ width: '30px', height: '30px' }} />
                    <p>Thông số cảm biến độ ẩm đất hiện tại:<span style={{ fontWeight: '700' }}>{land}(g/m³)</span></p>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Light_Bulb_or_Idea_Flat_Icon_Vector.svg/1200px-Light_Bulb_or_Idea_Flat_Icon_Vector.svg.png" alt="" style={{ width: '30px', height: '30px' }} />
                    <p>Thông số cảm biến ánh sáng hiện tại:<span style={{ fontWeight: '700' }}>{light}Lux</span></p>
                </div>
            </div>
            <Container style={{ marginTop: '20px' }}>
                <Select style={{ width: "300px", marginRight: '20px' }} onChange={handleSelect} defaultValue={''}>
                    {
                        options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        )
                        )
                    }
                </Select>
                <Button onClick={() => setOpen(false)}>Ẩn</Button>
                <Button onClick={() => setOpen(true)}>Mở</Button>
            </Container>
            {
                open && <Outlet />
            }
        </div>
    )
}

export default Chart;

const Container = styled.div`
    postion: relative;
    margin-left: 10%;
`;
const Select = styled.select`
    border-radius: 4px;
    height:40px;
    padding: 8px 8px;
`;
const Button = styled.button`
    background-color: #0056af;
    color: #fff;
    border: none;
    border-radius: 4px;
    height: 30px;
    margin-right:5px;
    margin-top:30px;
    width:80px;
`;