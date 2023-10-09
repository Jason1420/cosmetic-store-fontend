import { useSelector } from 'react-redux'
import './Payment.scss'
import { RootState } from '../../store/store'




const Payment = () => {
    const cart = useSelector((state: RootState) => state.cart)

    return (
        <div className='payment-container'>
            <div className="payment-left">
                <div className="store-name">
                    Danh là trang đặt hàng
                </div>
                <div className="bread-crumbs">
                    <div className="cart">
                        Giỏ hàng
                    </div>
                    <div className="payment-info">
                        Thông tin giao hàng
                    </div>
                </div>
                <div className="info-title">
                    Thông tin giao hàng
                </div>
                <div className="full-name"><input type="text" placeholder='Họ và tên' /></div>
                <div className="email"><input type="text" placeholder='Email' /></div>
                <div className="phone-number"><input type="text" placeholder='Số điện thoại' /></div>
                <div className="address"><input type="text" placeholder='Địa chỉ' /></div>
                <div className="province"><input type="text" placeholder='Tỉnh/ thành phố' /></div>
                <div className="district"><input type="text" placeholder='Quận/ huyện' /></div>
                <div className="ward"><input type="text" placeholder='Phường/ xã' /></div>
                <div className="ship-method">
                    Phương thức vận chuyển
                </div>
                <div className="payment-method">
                    Phương thức thanh toán
                </div>
                <button>Hoàn tất đơn hàng</button>
            </div>

            <div className="payment-right">
                <div className="cart-list">
                    {cart.items.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="item-left">
                                    <div className="img">
                                        <img src={item.item.image} alt="" />
                                    </div>
                                    <div className="quantity">
                                        {item.quantity}
                                    </div>
                                </div>
                                <div className="item-center">
                                    <div className="item-name">
                                        {item.item.name}
                                    </div>
                                    <div className="item-brand">
                                        {item.item.brand}

                                    </div>
                                </div>
                                <div className="item-right">
                                    <div className="price">
                                        {(item.item.price * item.quantity).toLocaleString('en-US').replace(/,/g, '.')} ₫

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="coupon">
                    <input type="text" placeholder='Mã giảm giá' />
                    <button>Áp dụng</button>
                </div>
                <div className="last-price">
                    <div className="temp-price">
                        <div className="title">
                            Tạm tính
                        </div>
                        <div className="price">
                            {cart.totalPrice}
                        </div>
                    </div>
                    <div className="ship-fee">
                        <div className="title">
                            Phí vận chuyển
                        </div>
                        <div className="price">
                            Miễn phí
                        </div>
                    </div>
                    <div className="real-price">
                        <div className="title">
                            Tổng cộng
                        </div>
                        <div className="price">
                            {cart.totalPrice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment