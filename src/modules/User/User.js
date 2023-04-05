import '../../css/User.css'
import avatar from '../../img/Oval.png'
import { useState } from 'react';
import '../../css/ChangePassword.css'
function User() {
    const [buttonPopUp,setbuttonPopup]=useState(false)
    function ChangePassword(props) {
        return (props.trigger)?(
        <div className="ChangePassword d-flex justify-content-center align-items-center ">
            <div className="container bg-white col-4 p-4 rounded position-relative">
                <h4 className='mt-3'>Đổi mật khẩu</h4>
                <label class="form-label mt-3">Mật khẩu hiện tại</label>
                <input type="password" class="form-control "/>
                <label class="form-label mt-3">Mật khẩu mới</label>
                <input type="password" class="form-control "/>
                <label class="form-label mt-3">Nhập lại mật khẩu mới</label>
                <input type="password" class="form-control mb-4"/>
                <button type="button" class="btn bg-success float-end px-3">Ok</button>
                <button type="button" class="btn border-2 float-end p-1 me-2"
                   onClick={()=>setbuttonPopup(false)}>
                Cancel</button>
                <button type="button" class="btn-close p-2" aria-label="Close"
                    onClick={()=>setbuttonPopup(false)}
                ></button>
            </div>
        </div>
        ):""
    }
    return (
    <div className="User d-flex justify-content-center">
        <div className="container row mt-5">
            <div class="col-3 mt-5 d-flex flex-column">
                <img class="p-5"src={avatar} alt=""/>
                <h2 class=" text-center">Huy Nguyen</h2>
            </div>
            <div class="col-9">
                <h2 class="border-bottom border-2 border-dark pb-3">Thông tin cá nhân</h2>
                <div class="form mt-5">
                    <label class="form-label">Họ và tên</label>
                    <input type="text" class="form-control w-75" id="name" value="Nguyễn Lương Gia Huy"/>
                    <label class="form-label mt-4">Email</label>
                    <input type="email" class="form-control w-75" id="email" value="giahuy575621@gmail.com"/>
                    <button type="button" class="btn mt-5 w-75 bg-info d-block"
                        onClick={()=>setbuttonPopup(true)}>
                        Thay đổi mật khẩu</button>
                    <label class="form-label mt-5 me-3">Ngày sinh</label>
                    <input class="w-75 d-block"type="date" name="birthday"  value="2002-02-02" min="1997-01-01" max="2030-12-31"></input>
                    <button type="button" class="btn-update btn bg-success d-block mt-5 w-50">Cập nhật</button>
                </div>
            </div>
        </div>
        <ChangePassword trigger={buttonPopUp}></ChangePassword>
    </div>
    )
}
export default User;