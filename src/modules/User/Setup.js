import '../../css/Setup.css'
import a from '../../img/setup/temperature_and_humidity_sensor.png'
import b from '../../img/setup/soil_temperature_sensor.png'
import c from '../../img/setup/Light_Sensor.png'
import d from '../../img/setup/sound_sensor.png'

function Setup() {
    return (
    <div className="Setup d-flex justify-content-center">
        <div className="container row mt-5">
            <h2 className='ms-5'>Thiết lập ngưỡng</h2>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="bg-white col-3 m-5 d-flex flex-column justify-content-center px-4">
                    <img class="mt-2" width="30%" src={a} alt=""/>
                    <h5 class="text-center mt-2 px-4">DHT11 Mạch Cảm Biến Nhiệt Độ Và Độ Ẩm</h5>
                    <div class="mt-2 ">
                        <span class="form-label">Thiết lập</span>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Bật</button>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Tắt</button>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Cảm biến</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="100"/>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="99"/>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Thời gian kiểm tra</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="0.3"/>
                    </div>
                    <button class="mt-5 btn bg-success w-100 mb-2 text-white fw-bold" type="button">Xác nhận</button>
                </div>
                <div class="bg-white col-3 m-5 d-flex flex-column justify-content-center px-4">
                    <img class="mt-2" width="30%" src={b} alt=""/>
                    <h5 class="text-center mt-2 px-4 mb-4">Cảm biến độ ẩm đất</h5>
                    <div class="mt-2 ">
                        <span class="form-label">Thiết lập</span>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Bật</button>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Tắt</button>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Cảm biến</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="100"/>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="99"/>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Thời gian kiểm tra</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="0.3"/>
                    </div>
                    <button class="mt-5 btn bg-success w-100 mb-2 text-white fw-bold" type="button" >Xác nhận</button>
                </div>
                <div class="bg-white col-3 m-5 d-flex flex-column justify-content-center px-4">
                    <img class="mt-2" width="30%" src={c} alt=""/>
                    <h5 class="text-center mt-2 px-4 mb-4">Cảm biến ánh sáng</h5>
                    <div class="mt-2 ">
                        <span class="form-label">Thiết lập</span>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Bật</button>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Tắt</button>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Cảm biến</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="100"/>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="99"/>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Thời gian kiểm tra</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="0.3"/>
                    </div>
                    <button class="mt-5 btn bg-success w-100 mb-2 text-white fw-bold" type="button" >Xác nhận</button>
                </div>
                <div class="bg-white col-3 m-5 d-flex flex-column justify-content-center px-4">
                    <img class="mt-2" width="30%" src={d} alt=""/>
                    <h5 class="text-center mt-2 px-4 mb-4">Cảm biến âm thanh</h5>
                    <div class="mt-2 ">
                        <span class="form-label">Thiết lập</span>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Bật</button>
                        <button type="button" class="btn bg-secondary w-25 ms-3">Tắt</button>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Cảm biến</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="100"/>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="99"/>
                    </div>
                    <div class="mt-2 ">
                        <span class="form-label">Thời gian kiểm tra</span>
                        <input type="text" class="form-control w-25 d-inline-block ms-3" value="0.3"/>
                    </div>
                    <button class="mt-5 btn bg-success w-100 mb-2 text-white fw-bold" type="button" >Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Setup;