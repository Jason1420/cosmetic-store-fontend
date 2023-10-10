import React from 'react';
import './Footer.scss';
import qrCode from '../../assets/icon/lixibox-app-qr.webp'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer-left">
                <div className="title">
                    Cosmetic Store
                </div>
                <div className="introduce">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, molestiae!
                </div>
                <div className="qr-code">
                    <img src={qrCode} alt="" />
                </div>
                <div className="hotline">
                    <span>Hotline: </span>
                    <h5>1800 2040</h5>

                </div>
                <div className="social-network">

                </div>
            </div>

            <div className="footer-right">
                <div className="list">
                    <div className="title-list">
                        Danh mục
                    </div>
                    <div className="list-item">
                        <NavLink to="/category/shop-gifts" >Quà tặng</NavLink>
                        <NavLink to="/category/beauty-box" >Hộp làm đẹp</NavLink>
                        <NavLink to="/category/accessories" >Phụ kiện</NavLink>
                        <NavLink to="/category/skin-care" >Chăm sóc da</NavLink>
                        <NavLink to="/category/makeup" >Trang điểm</NavLink>
                        <NavLink to="/category/supplement" >Thực phẩm chức năng</NavLink>
                        <NavLink to="/category/personal-care" >Chăm sóc cá nhân</NavLink>
                        <NavLink to="/category/shop-by-ingredient" >Tìm theo thành phần</NavLink>
                    </div>
                </div>
                <div className="list">
                    <div className="title-list">
                        Hướng dẫn
                    </div>
                    <div className="list-item">
                        <NavLink to="/product-manual" >HDSD &amp; Bảo hành</NavLink>
                        <NavLink to="/info/buy-on-web" >Hướng dẫn đặt hàng</NavLink>
                        <NavLink to="/info/delivery-and-payment" >Phương thức giao hàng</NavLink>
                        <NavLink to="/info/receive-and-return" >Chính sách đổi trả</NavLink>
                        <NavLink to="/info/privacy" >Chính sách bảo mật</NavLink>
                        <NavLink to="/info/privacy-en" >Privacy Info</NavLink>
                        <NavLink to="/info/term" >Điều khoản sử dụng</NavLink>
                    </div>
                </div>
                <div className="list">
                    <div className="title-list">
                        Thông tin
                    </div>
                    <div className="list-item">
                        <NavLink to="/info" >Giới thiệu về CosmeticStore</NavLink>
                        <NavLink target="_blank" to="https://careers.lixibox.com/jobs" >Tuyển dụng</NavLink>
                        <NavLink to="/lixicoin" >Chương trình Coin</NavLink>
                        <NavLink to="/support-center" >Hỗ trợ Đơn hàng</NavLink>
                        <NavLink to="/stores" >Hệ thống cửa hàng CosmeticStore</NavLink>
                        <NavLink to="/user/invite" >Mời bạn bè - Nhận thưởng ngay</NavLink>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Footer;
