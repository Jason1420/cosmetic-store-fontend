import './Header.scss';
import logo from '../../assets/images/logo.jpg'
import logo2 from '../../assets/logo/logoCustom-removebg-preview.png'
import {
    PiStorefrontDuotone
} from "react-icons/pi"
import {
    BiLogOut
} from "react-icons/bi"
import { LuPhoneCall } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { PagePath } from '../../routes/Path';
import { isLogout } from '../../store/reducers/authReducer';
import { AxiosInstance } from '../../store/AxiosInstance';
import { URL } from '../../routes/Url';

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
            await axiosJWT.post(postUrl, null, { headers },);
            dispatch(isLogout())
            navigate(PagePath.LOGIN)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(user.userDTO.roles)
    return (
        <div className="header-container">

            <div className="header-left" >
                <div className="header-left__logo">
                    <NavLink to='/'>
                        <img src={logo} alt="logo" width={42} height={48} />
                        <label className='store-name'>Cosmetic Store</label>
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
                <NavLink to={PagePath.SHOWROOM}>
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
                <NavLink to={PagePath.CUSTOMER_SUPPORT}>
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
                    <NavLink to={PagePath.CART}>
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
                    <NavLink to={PagePath.CART}>
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
                    <NavLink to={PagePath.LOGIN}>
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
                    <NavLink to={PagePath.UPLOAD}>
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
                    <div className="header-right__item ">
                        <div className="username">
                            Hello, <a>{auth.userDTO.username}</a>
                        </div>

                        <div className="logout" onClick={() => handleLogout()}>
                            <BiLogOut />
                        </div>
                    </div>
                }
            </div>
        </div >
    );
}

export default Header;
