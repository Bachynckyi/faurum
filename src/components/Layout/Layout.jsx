import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import scss from "./Layout.module.scss";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

const Layout = () => {

    return (
        <div className={scss.container_page}>
            <div className={scss.main_container}>
                <div className={scss.background_wrapper1}></div>
                <div className={scss.content_wrapper}>
                    <Outlet />
                </div>
            </div>
            <ScrollToTop
                smooth
                className={scss.scroll_button}
                component={<IoIosArrowUp className={scss.arrowUp} />}
            />
            <div className={scss.footer_container}>
                <div className={scss.background_wrapper2}></div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;

