import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo.jpg'
import {
    PiStorefrontDuotone
} from "react-icons/pi"
import { LuPhoneCall } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import qrCode from '../../assets/icon/lixibox-app-qr.webp'
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
                        <a href="/category/shop-gifts" >Quà tặng</a>
                        <a href="/category/beauty-box" >Hộp làm đẹp</a>
                        <a href="/category/accessories" >Phụ kiện</a>
                        <a href="/category/skin-care" >Chăm sóc da</a>
                        <a href="/category/makeup" >Trang điểm</a>
                        <a href="/category/supplement" >Thực phẩm chức năng</a>
                        <a href="/category/personal-care" >Chăm sóc cá nhân</a>
                        <a href="/category/shop-by-ingredient" >Tìm theo thành phần</a>
                    </div>
                </div>
                <div className="list">
                    <div className="title-list">
                        Hướng dẫn
                    </div>
                    <div className="list-item">
                        <a href="/product-manual" >HDSD &amp; Bảo hành</a>
                        <a href="/info/buy-on-web" >Hướng dẫn đặt hàng</a>
                        <a href="/info/delivery-and-payment" >Phương thức giao hàng</a>
                        <a href="/info/receive-and-return" >Chính sách đổi trả</a>
                        <a href="/info/privacy" >Chính sách bảo mật</a>
                        <a href="/info/privacy-en" >Privacy Info</a>
                        <a href="/info/term" >Điều khoản sử dụng</a>
                    </div>
                </div>
                <div className="list">
                    <div className="title-list">
                        Thông tin
                    </div>
                    <div className="list-item">
                        <a href="/info" >Giới thiệu về Lixibox</a>
                        <a target="_blank" href="https://careers.lixibox.com/jobs" >Tuyển dụng</a>
                        <a href="/lixicoin" >Chương trình Lixicoin</a>
                        <a href="/support-center" >Hỗ trợ Đơn hàng</a>
                        <a href="/stores" >Hệ thống cửa hàng Lixibox</a>
                        <a href="/user/invite" >Mời bạn bè - Nhận thưởng ngay</a>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Footer;
