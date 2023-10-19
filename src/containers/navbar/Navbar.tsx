import './Navbar.scss';
import {
    HiMenu
} from "react-icons/hi"
import {
    FiGift
} from "react-icons/fi"
import {
    BiFileFind
} from "react-icons/bi"
import {
    PiShootingStar
} from "react-icons/pi"
import {
    LiaRocketSolid
} from "react-icons/lia"
import {
    TbBrandBumble
} from "react-icons/tb"
import {
    GiSandsOfTime
} from "react-icons/gi"
import {
    ImLocation
} from "react-icons/im"
import { PagePath } from '../../routes/Path';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
    return (
        <div className="navbar-container ">
            <div className="navbar-left container">
                <NavLink to={PagePath.ITEM} className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                    <div className="navbar-left__menu">
                        <div className="img">
                            <HiMenu />
                        </div>
                        <div className="img-title">
                            Danh mục sản phẩm
                        </div>
                    </div>
                </NavLink>

                <div className="navbar-left__submenu">
                    <div className="navbar-left__submenu__item hot-deal">
                        <NavLink to={PagePath.HOT_DEAL} className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                            <div className="img">
                                <LiaRocketSolid />
                            </div>
                            Hot deal
                        </NavLink>
                    </div>

                    <div className="navbar-left__submenu__item new-item">
                        <NavLink to={PagePath.NEW_ITEM} className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                            <div className="img">
                                <GiSandsOfTime />
                            </div>
                            Hàng mới về
                        </NavLink>
                    </div>
                    <div className="navbar-left__submenu__item best-seller">
                        <NavLink to={PagePath.BEST_SELLERS} className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                            <div className="img">
                                <PiShootingStar />
                            </div>
                            <div className="img-title">
                                Bán chạy
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbar-left__submenu__item gift">
                        <NavLink to={PagePath.GIFT} className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                            <div className="img">
                                <FiGift />
                            </div>
                            <div className="img-title">
                                Quà tặng
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbar-left__submenu__item brand">
                        <NavLink to={PagePath.ALL_BRANDS} className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                            <div className="img">
                                <TbBrandBumble />
                            </div>
                            Thương hiệu
                        </NavLink>
                    </div>

                </div>
            </div>


            <div className="navbar-right container">
                <div className="navbar-right__item">
                    <NavLink to={PagePath.SEARCH_INVOICE} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>

                        <div className="title">
                            Tra cứu đơn hàng
                        </div>
                    </NavLink>
                </div>

                <div className="location">
                    <div className="img">
                        <ImLocation />
                    </div>
                    <div className="img-title">
                        Chọn khu vực của bạn
                    </div>
                </div>
            </div>
            <input type="checkbox" id='navbar' className='nav-show' hidden />
            <label className="navbar__bars" htmlFor='navbar'>
                <FaBars />
            </label>
            <div className="navbar-mobile">
                <div className="navbar-mobile__submenu__item">
                    <NavLink to={PagePath.ITEM} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <HiMenu />
                        </div>
                        <div className="img-title">
                            Danh mục sản phẩm
                        </div>
                    </NavLink>
                </div>
                <div className="navbar-mobile__submenu__item hot-deal">
                    <NavLink to={PagePath.HOT_DEAL} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <LiaRocketSolid />
                        </div>
                        Hot deal
                    </NavLink>
                </div>

                <div className="navbar-mobile__submenu__item new-item">
                    <NavLink to={PagePath.NEW_ITEM} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <GiSandsOfTime />
                        </div>
                        Hàng mới về
                    </NavLink>
                </div>
                <div className="navbar-mobile__submenu__item best-seller">
                    <NavLink to={PagePath.BEST_SELLERS} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <PiShootingStar />
                        </div>
                        <div className="img-title">
                            Bán chạy
                        </div>
                    </NavLink>
                </div>
                <div className="navbar-mobile__submenu__item gift">
                    <NavLink to={PagePath.GIFT} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <FiGift />
                        </div>
                        <div className="img-title">
                            Quà tặng
                        </div>
                    </NavLink>
                </div>
                <div className="navbar-mobile__submenu__item brand">
                    <NavLink to={PagePath.ALL_BRANDS} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <TbBrandBumble />
                        </div>
                        Thương hiệu
                    </NavLink>
                </div>
                <div className="navbar-mobile__submenu__item">
                    <NavLink to={PagePath.SEARCH_INVOICE} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <BiFileFind />
                        </div>

                        <div className="title">
                            Tra cứu đơn hàng
                        </div>
                    </NavLink>
                </div>

                <div className="navbar-mobile__submenu__item">
                    <NavLink to={PagePath.SEARCH_INVOICE} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="img">
                            <ImLocation />
                        </div>
                        <div className="img-title">
                            Chọn khu vực của bạn
                        </div>
                    </NavLink>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
