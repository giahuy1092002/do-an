import { Navigate, Outlet } from "react-router-dom";
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
