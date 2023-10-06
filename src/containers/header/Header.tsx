import './Header.scss';
import logo from '../../assets/images/logo.jpg'
import {
    PiStorefrontDuotone
} from "react-icons/pi"
import { LuPhoneCall } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import { NavLink } from 'react-router-dom';
import { PagePath } from '../../routes/Path';

const Header = () => {
    const cart = useSelector((state: RootState) => state.cart)
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
                <div className="header-right__item ">
                    <div className="img">
                        <PiStorefrontDuotone
                        />
                    </div>

                    <div className="img-title">
                        Hệ thống cửa hàng
                    </div>
                </div>

                <div className="header-right__item ">
                    <div className="img call-item">
                        <LuPhoneCall
                        />
                    </div>

                    <div className="img-title call">
                        Hỗ trợ khách hàng
                    </div>
                </div>

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
                }
                <div className="header-right__item ">
                    <div className="img">
                        <i className="fa-regular fa-user"></i>
                    </div>

                    <div className="img-title">
                        Đăng nhập / Đăng ký
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;
