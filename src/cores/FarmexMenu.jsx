import React, { useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FARMEX_LOGO } from "../constants/data";
import MENU from "../constants/menu";
import PATH from "../constants/path";
import { Menu, Dropdown } from 'antd';
import { message } from 'antd';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Menu.css';

function FarmexMenu() {
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
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");

    };
    return (
            <TopContainer>
                <MenuBar>
                    <CenterContainer>
                        <LargeMenu>
                            <Logo
                                src={FARMEX_LOGO}
                                alt='logo'
                                width={120}
                                height={120}
                                onClick={() => navigate(PATH.HOME)}
                            />
                            <LogoText
                                onClick={() => navigate(PATH.HOME)}
                            >
                                Farmex
                                <DotLogo />
                            </LogoText>
                        </LargeMenu>
                    </CenterContainer>
                    <MenuContainer>
                        {MENU.map((item) => (
                            <MenuItem
                                key={item.link}
                            >
                                <NavLink className='link'
                                    to={item.link}
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? '#087F38' : "#333",
                                        }
                                    }}
                                >{item.title}</NavLink>
                            </MenuItem>
                        ))}

                    </MenuContainer>
                    {localStorage.getItem('token') ?
                        <Dropdown overlay={menuUser} placement="bottomLeft">
                            <UserBar>
                                <ImageUser src={localStorage.getItem('src')} />
                                <p style={{ marginLeft: '10px', marginTop: '15px' }}>Hello, user</p>
                            </UserBar>
                        </Dropdown>
                        :
                        <Button
                            onClick={() => navigate('/login')}
                        >Đăng nhập
                        </Button>
                    }

                </MenuBar>
            </TopContainer>
        
    )
};

export default FarmexMenu;

const ImageUser = styled.img`
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    border-radius: 50%;
`;
const TopContainer = styled.div`
    position: relative;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    transition: top 0.3s;
    top:0;
    margin-right:10px;
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
    margin-top: 10px;
`;
const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 9vw;
    align-items: center;
    @media only screen and (max-width: 920px) {
      padding-inline: 4vw;
    }
`;
const CenterContainer = styled.div`
    text-align: center;
    height: 110px;
    position: relative;
    @media only screen and (max-width: 920px) {
    height: 48px;
    }
    align-items: center;
`;
const LargeMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Logo = styled.img`
    display: flex;
    align-items: center;
    cursor: pointer;
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
const LogoText = styled.p`
    display:flex;
    font-size:30px;
    color:#333;
    font-weight:600;
    cursor: pointer;
    margin-top:10px;
`;
const MenuContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 920px) {
      display: none;
    }
`;
const MenuItem = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    width: 13vw;
    cursor: pointer;
    padding-inline: 1vw;
    line-height: 20px;
    position: relative;
    margin-top: 10px;
    text-decoration: none;
`;
const MenuText = styled(NavLink)`
    text-decoration: none;
`;
const UserItem = styled(Link)`
    text-decoration: none;
`;
const UserBar = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`;