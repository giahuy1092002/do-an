import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import FilterData from './FilterData';
import exportFromJSON from 'export-from-json';
import { Modal, Button, Table } from 'antd';
import {
    DownloadOutlined,
    FilterOutlined,
    AreaChartOutlined,
    DatabaseOutlined
} from '@ant-design/icons';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);
function Temp() {
    const [dataIOT, setDataIOT] = useState([]);
    const [dataChart, setDataChart] = useState([]);
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Đồ thị cảm biến độ ẩm đất',
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: max,
                        yMax: max,
                        borderColor: 'red',
                        borderWidth: 4,
                    },
                    line2: {
                        type: 'line',
                        yMin: min,
                        yMax: min,
                        borderColor: 'green',
                        borderWidth: 4,
                    },
                }
            }
        },
        scales: {
            x:
            {
                display: false,
            },
        },

    };
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/device/getDataEquipById/v3`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    console.log(res.data.data);
                    setMin(res.data.data.min);
                    setMax(res.data.data.max);
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios({
                method: "get",
                url: `http://localhost:3001/data/get/v3`,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
                .then((res) => {
                    setDataIOT(res.data.map(obj => (
                        [new Date(obj.time).toLocaleString(), obj.data]
                    )));
                    setDataChart(res.data.map(obj => (
                        [new Date(obj.time).toLocaleString(), obj.data]
                    )));
                    return res.data;
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        fetchData();
    }, []);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    var dataObject = dataIOT.map((x, id) => ({
        id: id + 1,
        time: new Date(x[0]).toLocaleString(),
        value: x[1]
    }));
    const exportLocal = () => {
        const fileName = 'LandData';
        const exportType = exportFromJSON.types.csv;
        const data = dataIOT.map((e) => (
            {
                time: new Date(e[0]).toLocaleString(),
                value: e[1]
            }

        ))
        exportFromJSON({ data, fileName, exportType })
    }
    const data = {
        datasets: [
            {
                label: 'Cảm biến độ ẩm đất',
                data: dataChart.map((x) => ([
                    new Date(x[0]).toLocaleString(),
                    x[1]
                ])),
                borderColor: 'rgb(122, 107, 50)',
                backgroundColor: 'rgba(122, 107, 50, 0.5)',
            },
        ],
    };
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
        },
        {
            title: "CreateAt",
            dataIndex: "time",
        },
        {
            title: "Value",
            dataIndex: "value",
        },
    ]

    return (
        <div style={{ marginTop: '20px', marginLeft: '10%' }}>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
                <ButtonDownload onClick={showModal}>
                    <DownloadOutlined style={{ marginTop: '5px', marginRight: '5px' }} />
                    <span style={{ marginLeft: 'auto', marginRight: 'auto' }}>Tải dữ liệu</span>
                </ButtonDownload>
                <ButtonFilter onClick={() => setOpen(true)}>
                    <FilterOutlined style={{ marginTop: '5px', marginRight: '5px' }} />
                    Lọc dữ liệu
                </ButtonFilter>
            </div>
            {
                open && (<FilterData dataIOT={dataIOT} setDataChart={setDataChart} setOpen={setOpen} />)
            }
            <Modal title="Tải dữ liệu tử cảm biến ánh sáng" open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button type="primary"
                        onClick={exportLocal}
                    >
                        Tải file csv
                    </Button>,
                ]}
                style={{marginTop:'50px'}}
            >
                <span>
                    <span style={{ fontWeight: '500' }}>Note:</span>
                    Bạn chỉ có thể tải xuống toàn bộ dữ liệu nguồn cấp dữ liệu mười phút một lần.
                </span>
            </Modal>
            <div style={{ width: '80%', marginBottom: '30px' }}>
                <h2 > <AreaChartOutlined /> Biểu đồ dữ liệu cảm biến độ ẩm đất</h2>
                <Line options={options} data={data} style={{ height: '1000px' }} />
            </div>
            <h2> <DatabaseOutlined /> Bảng số liệu dữ liệu thô</h2>
            <Table columns={columns} dataSource={dataObject} style={{ border: '2px solid #333', width: '80%', marginBottom: '50px' }} />
        </div>
    )
}

export default Temp;
const ButtonDownload = styled.button`
  background-color: #0056af;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 8px 16px;
  font-size:16px;
  font-weight: 500;
  display: flex;
  margin-right: 10px;
`;
const ButtonFilter = styled.button`
  background-color: #767676;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 8px 16px;
  font-size:16px;
  font-weight: 500;
  display: flex;
`;