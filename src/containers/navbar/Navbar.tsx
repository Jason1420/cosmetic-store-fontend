import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logo.jpg'
import {
    HiMenu
} from "react-icons/hi"
import {
    FiGift
} from "react-icons/fi"
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

const Navbar = () => {
    return (
        <div className="navbar-container ">
            <div className="navbar-left container">
                <div className="navbar-left__menu">
                    <div className="img">
                        <HiMenu />
                    </div>
                    <div className="img-title">
                        Danh mục sản phẩm
                    </div>
                </div>


                <div className="navbar-left__submenu">
                    <div className="navbar-left__submenu__item hot-deal">
                        <div className="img">
                            <LiaRocketSolid />
                        </div>
                        Hot deal
                    </div>
                    <div className="navbar-left__submenu__item brand">
                        <div className="img">
                            <TbBrandBumble />
                        </div>
                        Thương hiệu
                    </div>
                    <div className="navbar-left__submenu__item new-item">
                        <div className="img">
                            <GiSandsOfTime />
                        </div>
                        Hàng mới về
                    </div>
                    <div className="navbar-left__submenu__item best-seller">
                        <div className="img">
                            <PiShootingStar />
                        </div>
                        <div className="img-title">
                            Bán chạy
                        </div>
                    </div>
                    <div className="navbar-left__submenu__item gift">
                        <div className="img">
                            <FiGift />
                        </div>
                        <div className="img-title">
                            Quà tặng
                        </div>
                    </div>
                </div>
            </div>


            <div className="navbar-right container">
                <div className="navbar-right__item">
                    <div className="title">
                        Tra cứu đơn hàng
                    </div>
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
        </div >
    );
}

export default Navbar;
