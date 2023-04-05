import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FARMEX_LOGO } from "../constants/data";
import MENU from "../constants/menu";
import PATH from "../constants/path";
import { Menu, Dropdown } from 'antd';
import {message} from 'antd';

function FarmexMenu() {
    const pathname = useLocation();
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        message.success('Đăng xuất thành công',1);
    }
    const menuUser = (
        <Menu>
            <Menu.Item>
                <Link to='/user'>Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/login' onClick={handleLogOut}>Đăng xuất</Link>
            </Menu.Item>
        </Menu>
    );
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
                            onClick={() => navigate(item.link)}
                            key={item.link}
                            active={(pathname === item.link).toString()}
                        >
                            <MenuText>{item.title}</MenuText>
                        </MenuItem>
                    ))}

                </MenuContainer>
                {localStorage.getItem('token') ?
                    <Dropdown overlay={menuUser} placement="bottomLeft">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '15px'
                            }}>
                            <img
                                src="https://icons.veryicon.com/png/o/education-technology/test-website-linear-icon/user-147.png"
                                alt=""
                                width={'30px'}
                                height={'30px'}
                            // style={{paddingTop:'15px'}}
                            />
                            <p style={{ marginLeft: '10px' }}>Hello, user</p>
                        </div>
                    </Dropdown>
                    :
                    <Button
                        onClick={() => navigate(PATH.LOGIN)}
                    >Đăng nhập
                    </Button>
                }

            </MenuBar>
        </TopContainer>
    )
};

export default FarmexMenu;

const TopContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: top 0.3s;
    right: 0;
    top:0;
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
    color: #464D5C;
    &:hover {
        color:#14D756;
    }
`;
const MenuText = styled.span`
    cursor: pointer;
`;