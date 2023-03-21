import React from "react";
import { FARMEX_LOGO } from "../constants/data";
import styled from "styled-components";

function FarmexFooter() {
    return (
        <TopFooter>
            <FooterPadding>
                <Footer>
                    <FooterLinkDiv>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={FARMEX_LOGO}
                                alt='logo'
                                width={60}
                                height={60}
                                style={{}}
                            />
                            <LargeText style={{ display: 'flex', marginBottom: '0' }}>
                                Farmex
                                <DotLogo/>
                            </LargeText>
                        </div>
                        <Text style={{ marginLeft: '20px' }}>Thông minh</Text>
                        <Text style={{ marginLeft: '20px' }}>Năng suất</Text>
                        <Text style={{ marginLeft: '20px' }}>Hiệu quả</Text>
                        <Text style={{ marginLeft: '20px' }}>Chất lượng</Text>
                        <div style={{ margin: '20px 0 0 15px' }}>
                            <Dot/>
                            <Dot/>
                            <Dot/>
                            <Dot/>
                        </div>
                    </FooterLinkDiv>
                    <FooterLinkDiv style={{ marginTop: '35px' }}>
                        <LargeText>Liên kết</LargeText>
                        <Text>Trang chủ</Text>
                        <Text>Về chúng tôi</Text>
                        <Text>Dịch vụ</Text>
                        <Text>Blog</Text>
                        <Text>Liên hệ</Text>
                    </FooterLinkDiv>
                    <FooterLinkDiv style={{ marginTop: '35px' }}>
                        <LargeText>Liên hệ</LargeText>
                        <Text>0828479273</Text>
                        <Text>huy.nguyen1092002@hcmut.edu.vn</Text>
                        <Text>www.farmex.com</Text>
                        <Text>KTX Khu A ĐHQG, TPHCM</Text>
                    </FooterLinkDiv>
                </Footer>
            </FooterPadding>
            <FooterBelow>
                <CopyRight>
                    <p>
                        @{new Date().getFullYear()} Codin. All right reserved
                    </p>
                </CopyRight>
            </FooterBelow>
        </TopFooter>
    )
};

export default FarmexFooter;

const TopFooter = styled.div`
    background-color: #1F3233;
`;
const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
`;
const FooterBelow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.2rem;
    color: #1B2828;
    border-top: 1px solid white;
`;
const CopyRight = styled.div`
    font-size: 13px;
    line-height: 15px;
    color: rgb(255,255,255);
    font-weight: 600;
    align-items: center;
    justify-content: center;
`;
const FooterLinkDiv = styled.div`
    width: 200px;
    margin: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
`;
const FooterPadding = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
`;
const Dot = styled.span`
    height: 25px;
    width: 25px;
    background-color: #49A760;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
`;
const DotLogo = styled.span`
    height: 5px;
    width: 5px;
    background-color: yellow;
    border-radius: 50%;
    display: inline-block;
    margin-top:10px;
    margin-left: 5px;
`;
const Text = styled.p`
    font-size: 16px;
    line-height: 15px;
    margin: 0.5rem 0;
    cursor: pointer;
    color: rgb(179,179,175)
`;
const LargeText = styled.h4`
    font-size: 18px;
    line-height: 17px;
    margin-bottom: 0.9rem;
`;