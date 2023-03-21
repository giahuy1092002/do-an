import styled from "styled-components";

function MissPassWord() {
    return (
        <div>
            <TitleContainer>
                <CenterText>Quên mật khẩu</CenterText>
            </TitleContainer>
            <FormContainer>
                <CustomForm>
                    <FormItem>Chỉ cần nhập email và nhấn núi “Gửi”,
                        chúng tôi sẽ gửi mật khẩu tạm thời đến số điện thoại của bạn ngay lập tức
                    </FormItem>
                    <FormItem>
                        <span><Text>*</Text>Email</span>
                        <FormInput placeholder="Nhập email" />
                    </FormItem>
                    <FormItem style={{ marginTop: '20px' }}>
                        <FormButton>Gửi</FormButton>
                    </FormItem>
                </CustomForm>

            </FormContainer>
        </div>

    )
}

export default MissPassWord;

const TitleContainer = styled.div`
    margin-top: 50px;
    padding-top: 100px;
    margin-bottom: 40px;
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
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding-top: 40px;
}
`;
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
const FormInput = styled.input`
    height: 30px !important;
    border-radius: 12px !important;
    border: 1px solid #d3d5db;
    font-size: 14px !important;
    margin-top:10px;
    padding: 15px 10px;
`;
const FormButton = styled.button`
    border-radius: 16px !important;
    border: none !important;
    font-size: 16px;
    font-weight: 600 !important;
    transition: 1s;
    background-color: #087F38;
    color: #fff;
    height: 48px;
    cursor: pointer;
`;
const CustomForm = styled.div`
    width: 600px;
`;
const Text = styled.span`
    color: red;
    font-size: 16px;
    margin-right: 5px;
`;