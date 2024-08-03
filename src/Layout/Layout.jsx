import { Outlet } from "react-router-dom";
import NavbarComp from "../Components/Shared/NavbarComp";
import Footer from "../Components/Shared/Footer";

const Layout = () => {
    return (
        <div>
            <NavbarComp></NavbarComp>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;