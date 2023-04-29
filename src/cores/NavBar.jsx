import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FARMEX_LOGO } from "../constants/data";
import { Menu, Dropdown } from 'antd';
import styled from "styled-components";
import { message } from "antd";
import {
    UserOutlined
} from '@ant-design/icons';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('src');
        message.success('Đăng xuất thành công', 1);
        navigate('/login');
    }
    const menuUser = (
        <Menu>
            <Menu.Item>
                <UserItem to='/user'>Thông tin cá nhân</UserItem>
            </Menu.Item>
            <Menu.Item>
                <UserItem to='/login' onClick={handleLogOut}>Đăng xuất</UserItem>
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link exact to="/" className="nav-logo">
                        <img src={FARMEX_LOGO} alt="" style={{ width: '100px', height: '100px' }} />
                        Farmex<DotLogo />
                        <i className="fas fa-code"></i>
                    </Link>

                    <ul className={click ? "nav-menu active" : "nav-menu"} style={{ marginTop: '30px' }}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/manage"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Quản lý và thiết lập
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/view_statistics/chart"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Thông kế
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Liên hệ
                            </NavLink>
                        </li>
                    </ul>
                    <div style={{ marginTop: '10px', marginRight: '30px', cursor: 'pointer' }}>
                        {localStorage.getItem('token') ?
                            <Dropdown overlay={menuUser} placement="bottomLeft">
                                <UserBar>

                                    <UserOutlined style={{ color: '#fff' }} />

                                    <p style={{ marginLeft: '10px', marginTop: '15px', color: "#fff" }}>Hello, user</p>
                                </UserBar>
                            </Dropdown>
                            :
                            <Button
                                onClick={() => navigate('/login')}
                            >Đăng nhập
                            </Button>
                        }
                    </div>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
const UserItem = styled(Link)`
    text-decoration: none;
`;
const UserBar = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`;
const Button = styled.button`
    border-radius: 16px !important;
    border: none !important;
    font-size: 16px;
    font-weight: 600 !important;
    transition: 1s;
    background-color: #087F38;
    color: #fff;
    height: 48px;
    cursor: pointer;
    width:120px;
`;
const DotLogo = styled.span`
    height: 5px;
    width: 5px;
    background-color: yellow;
    border-radius: 50%;
    display: inline-block;
    margin-top:12px;
    margin-left: 5px;
`;