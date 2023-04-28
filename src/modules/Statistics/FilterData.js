import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

function FilterData({ setDataChart, dataIOT, setOpen }) {
    const [firstDate, setFirstDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const DateFilter = (date) => {
        return date >= new Date(firstDate).toLocaleString() && date <= new Date(lastDate).toLocaleString();
    }
    return (
        <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginRight:'10px'}}>
                <label style={{fontWeight:'500'}}>Từ</label>
                <Input type='datetime-local' onChange={(e) => setFirstDate(e.target.value)} style={{height:'40px'}} />
            </div>
            <div style={{display:'flex',flexDirection:'column',marginRight:'10px'}}>
                <label style={{fontWeight:'500'}}>Đến</label>
                <Input type='datetime-local' onChange={(e) => setLastDate(e.target.value)} style={{height:'40px'}}/>
            </div>
            <Button onClick={() => setDataChart(dataIOT.filter(DateFilter))}>Áp dụng</Button>
            <Button onClick={() => setOpen(false)}>Xóa</Button>
        </div>
    )
}

export default FilterData;

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