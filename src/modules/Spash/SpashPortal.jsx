import { Outlet } from "react-router-dom";
import FarmexMenu from "../../cores/FarmexMenu";

function SpashPortal(){
    return (
        <>
        <FarmexMenu/>
        <Outlet/>
        </>
    )
}

export default SpashPortal;