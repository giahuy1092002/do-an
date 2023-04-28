import { Navigate, Outlet } from "react-router-dom";
import FarmexMenu from "../../cores/FarmexMenu";
import FarmexFooter from "../../cores/FarmexFooter";
import NavBar from "../../cores/NavBar";

function Component() {
    return (
        <>
            <NavBar />
            <Outlet />
            <FarmexFooter />
        </>
    )
}
export default function SpashPortal() {
    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' />
    }
    return <Component />
}
