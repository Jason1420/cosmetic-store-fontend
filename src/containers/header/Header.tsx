import './Header.scss';
import logo from '../../assets/images/logo.jpg'
import logo2 from '../../assets/images/lastLogo.png'
import {
    PiStorefrontDuotone
} from "react-icons/pi"
import {
    BiLogOut
} from "react-icons/bi"
import {
    CgProfile
} from "react-icons/cg"
import { LuPhoneCall } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { PagePath } from '../../routes/Path';
import { isLogout } from '../../store/reducers/authReducer';
import { AxiosInstance } from '../../store/AxiosInstance';
import { URL } from '../../routes/Url';
import axios from 'axios';

const Header = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const auth = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //logic for logout
    const user = useSelector((state: RootState) => state.auth)
    let headers = { Authorization: `Bearer ${user.accessToken}` }
    const axiosJWT = AxiosInstance(dispatch, user)
    const handleLogout = async () => {
        try {
            const postUrl = URL.LOG_OUT
            await axios.post(postUrl, null, { headers },);
            dispatch(isLogout())
            navigate(PagePath.LOGIN)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="header-container">

            <div className="header-left" >
                <div className="header-left__logo">
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <img src={logo2} alt="logo" width={45} height={45} />
                        <label className='store-name'>My Store</label>
                    </NavLink>
                </div>
                <div className="header-left__search-bar">
                    <input className="form-control " type="text" placeholder="Tìm kiếm sản phẩm" />
                    <div className="search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>

            <div className="header-right">
                <NavLink to={PagePath.SHOWROOM} className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                    <div className="header-right__item ">
                        <div className="img">
                            <PiStorefrontDuotone
                            />
                        </div>

                        <div className="img-title">
                            Hệ thống cửa hàng
                        </div>
                    </div>
                </NavLink>
                <NavLink to={PagePath.CUSTOMER_SUPPORT} className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                    <div className="header-right__item ">
                        <div className="img call-item">
                            <LuPhoneCall
                            />
                        </div>

                        <div className="img-title call">
                            Hỗ trợ khách hàng
                        </div>
                    </div>
                </NavLink>
                {cart.totalQuantity > 0 ?
                    <NavLink to={PagePath.CART} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right__item ">
                            <div className="img">
                                <IoCartOutline />
                            </div>

                            <div className="img-title cart">
                                Giỏ hàng
                                {cart.totalQuantity !== null && cart.totalQuantity !== 0 &&
                                    < label className='total'>{cart.totalQuantity}</label>
                                }
                            </div>
                        </div>
                    </NavLink> :
                    <NavLink to={PagePath.CART} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right__item ">
                            <div className="img">
                                <IoCartOutline />
                            </div>

                            <div className="img-title cart">
                                Giỏ hàng
                                {cart.totalQuantity !== null && cart.totalQuantity !== 0 && cart.items != null &&
                                    < label className='total'>{cart.totalQuantity}</label>
                                }
                            </div>
                        </div>
                    </NavLink>
                }
                {!auth.logged &&
                    <NavLink to={PagePath.LOGIN} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right__item ">
                            <div className="img">
                                <i className="fa-regular fa-user"></i>
                            </div>

                            <div className="img-title">
                                Đăng nhập / Đăng ký
                            </div>
                        </div>
                    </NavLink>

                }
                {user.userDTO.roles.includes("MANAGER") &&
                    <NavLink to={PagePath.UPLOAD} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right__item ">
                            <div className="img">
                                <i className="fa-regular fa-plus"></i>
                            </div>

                            <div className="img-title">
                                Thêm sản phẩm
                            </div>
                        </div>
                    </NavLink>
                }
                {auth.logged &&
                    <div className="header-right__user ">
                        <div className="left">
                            <div className="hello">
                                Hello,
                            </div>
                            <div className="username">
                                <NavLink to={PagePath.PROFILE} className={({ isActive }) =>
                                    isActive ? "active" : ""
                                } >{auth.userDTO.username}</NavLink>
                            </div>
                        </div>


                        <div className="logout" onClick={() => handleLogout()}>
                            <BiLogOut />
                        </div>
                    </div>
                }
            </div>
            <input type="checkbox" id='show-navbar' className='nav-input' hidden />
            <label className="header-right__bars" htmlFor='show-navbar'>
                <FaBars />
            </label>
            <label className="overplay" htmlFor='show-navbar'></label>
            <div className="header-right-mobile">
                <label className='times' htmlFor="show-navbar">
                    <FaTimes /></label>
                {auth.logged &&
                    <NavLink to={PagePath.PROFILE} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right-mobile__item ">
                            <div className="img">
                                <CgProfile
                                />
                            </div>

                            <div className="img-title">
                                Thông tin cá nhân
                            </div>
                        </div>
                    </NavLink>
                }
                <NavLink to={PagePath.SHOWROOM} className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                    <div className="header-right-mobile__item ">
                        <div className="img">
                            <PiStorefrontDuotone
                            />
                        </div>

                        <div className="img-title">
                            Hệ thống cửa hàng
                        </div>
                    </div>
                </NavLink>
                <NavLink to={PagePath.CUSTOMER_SUPPORT} className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                    <div className="header-right-mobile__item ">
                        <div className="img call-item">
                            <LuPhoneCall
                            />
                        </div>

                        <div className="img-title call">
                            Hỗ trợ khách hàng
                        </div>
                    </div>
                </NavLink>
                {cart.totalQuantity > 0 ?
                    <NavLink to={PagePath.CART} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right-mobile__item ">
                            <div className="img">
                                <IoCartOutline />
                            </div>

                            <div className="img-title cart">
                                Giỏ hàng
                                {cart.totalQuantity !== null && cart.totalQuantity !== 0 &&
                                    < label className='total'>{`(${cart.totalQuantity})`}</label>
                                }
                            </div>
                        </div>
                    </NavLink> :
                    <NavLink to={PagePath.CART} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right-mobile__item ">
                            <div className="img">
                                <IoCartOutline />
                            </div>

                            <div className="img-title cart">
                                Giỏ hàng
                                {cart.totalQuantity !== null && cart.totalQuantity !== 0 && cart.items != null &&
                                    < label className='total'>{cart.totalQuantity}</label>
                                }
                            </div>
                        </div>
                    </NavLink>
                }
                {!auth.logged &&
                    <NavLink to={PagePath.LOGIN} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right-mobile__item ">
                            <div className="img">
                                <i className="fa-regular fa-user"></i>
                            </div>

                            <div className="img-title">
                                Đăng nhập / Đăng ký
                            </div>
                        </div>
                    </NavLink>

                }
                {user.userDTO.roles.includes("MANAGER") &&
                    <NavLink to={PagePath.UPLOAD} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <div className="header-right-mobile__item ">
                            <div className="img">
                                <i className="fa-regular fa-plus"></i>
                            </div>

                            <div className="img-title">
                                Thêm sản phẩm
                            </div>
                        </div>
                    </NavLink>
                }
                {auth.logged &&
                    <div className="header-right-mobile__item " onClick={() => handleLogout()}>
                        <div className="img">
                            <BiLogOut />
                        </div>

                        <div className="img-title">
                            Đăng xuất
                        </div>
                    </div>
                }
            </div>
        </div >
    );
}

export default Header;
