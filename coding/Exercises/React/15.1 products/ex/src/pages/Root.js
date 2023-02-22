import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainBavigation";
function RootLayout() {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>

    )
}

export default RootLayout;