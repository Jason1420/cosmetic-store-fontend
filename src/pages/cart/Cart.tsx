import React, { useEffect, useState } from 'react'
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { NavLink, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'
import { PagePath } from '../../routes/Path'
import { BiSolidDiscount } from 'react-icons/bi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { PiCaretRightBold } from 'react-icons/pi'
import { BsCart4 } from 'react-icons/bs'
import { SampleNextArrow, SamplePrevArrow } from '../../components/ArrowSlick/ArrowSlick'
import { addNewItemToCart, decreaseItemFromCart } from '../../store/reducers/cartReducer'
import { CartItem } from '../../types/CartItem'
import { toast } from 'react-toastify';

const Cart = () => {
    /** Slick bar */
    const settings = {

        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    /** Declare for redux */
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(cart)
    /** Preferential item */
    const [preferentialItem, setPreferentialItem] = useState<ItemDisplay[]>([])
    useEffect(() => {
        const getAllItem = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/getAll",)
            if (res && res.data && res.data.data) {
                setPreferentialItem(res.data.data);
            }
        }

        getAllItem()
    }, [])

    const handleIncreaseItem = (item: CartItem) => {
        dispatch(addNewItemToCart(item))
    }
    const handleDecreaseItem = (item: CartItem) => {
        if (cart.totalQuantity === 1) {
            dispatch(decreaseItemFromCart(item))
            console.log("go home ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            navigate(PagePath.HOME)
        } else {
            dispatch(decreaseItemFromCart(item))
        }
    }
    useEffect(() => {

    }, [])
    const handleAddPreferItem = (item: ItemDisplay) => {
        const itemToCart: CartItem = {
            item: item,
            quantity: 1,

        }
        toast.success("Đã thêm sản phẩm vào giỏ hàng", {
            icon: "✔️"
        });
        dispatch(addNewItemToCart(itemToCart));

    }
    const handleNavigateToOrderPage = () => {
        if (cart.totalQuantity > 0) {
            navigate(PagePath.PAYMENT)
        }
    }
    return (

        <div className='cart-container'>
            <div className="cart-left">
                <div className="cart-left__title">
                    <div className="title">
                        Giỏ Hàng Của Bạn
                    </div>
                    <div className="quantity">
                        {`(${cart.totalQuantity} sản phẩm)`}
                    </div>
                </div>

                <div className="cart-left__list">
                    {cart &&
                        cart.items.map((item, index) => {
                            return (
                                <div className="cart-item" key={index}>
                                    <div className="cart-item__image">
                                        <img src={item.item.image} alt="" />
                                    </div>
                                    <div className="cart-item__info">
                                        <div className="info__name">
                                            {item.item.name}
                                        </div>
                                        <div className="info__price">
                                            {item.item.price.toLocaleString('en-US').replace(/,/g, '.').replace(/,/g, '.')} ₫
                                        </div>
                                        <div className="info__quantity">
                                            <button onClick={() => handleDecreaseItem(item)}>-</button>
                                            {item.quantity}
                                            <button onClick={() => handleIncreaseItem(item)}>+</button>
                                        </div>
                                        <div className="info__promo">
                                            [Từ nay - 9.10] Mua đơn 3 triệu: TẶNG QUÀ "BEST-SELLER" 3 TRIỆU (Nhập mã GWP923) + HOÀN TIỀN 500K/ Giảm 20% mọi đơn hàng (Nhập mã CART1M)
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>

                <div className="cart-left__coupon">
                    <div className="title">
                        ƯU ĐÃI CHO BẠN
                    </div>
                    <div className="content">
                        <Slider {...settings}>

                            {preferentialItem &&
                                preferentialItem.filter(item => item.status === "New").map((item, index) => {
                                    return (
                                        <div className="list-item__item" key={index}>
                                            {item.image &&
                                                <NavLink to={`${PagePath.ITEM}/${item.id}`}>
                                                    <div className="list-item__item-image">
                                                        <img className="image" src={item.image} alt="" />
                                                    </div>
                                                </NavLink>
                                            }
                                            <div className="list-item__content">
                                                <div className="list-item__item-brand">
                                                    {item.brand}
                                                </div>
                                                <div className="list-item__item-name">
                                                    {item.name}
                                                </div>

                                                <div className="list-item__item-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <div className="list-item__item-price">
                                                    {
                                                        item.price.toLocaleString('en-US').replace(/,/g, '.')} ₫
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button onClick={() => handleAddPreferItem(item)}>
                                                    <BsCart4 />
                                                    <div className="text">
                                                        Thêm vào giỏ hàng
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                        </Slider>
                    </div>
                </div>
            </div>


            <div className="cart-right">
                <div className="cart-right__submit">
                    <NavLink to={PagePath.ITEM}><button className='buy'>Mua thêm</button></NavLink>
                    <button className='order' onClick={() => handleNavigateToOrderPage()}>Đặt hàng</button>
                </div>

                <div className="cart-right__deal">
                    <div className="icon">
                        <HiOutlineLightBulb />
                    </div>
                    <div className="text">
                        <label>DEAL HOT HÔM NAY:</label>
                        <label>- NHẬP GWP923 -  Nhận ngay Box quà GWP best-seller 3 triệu cho đơn từ 3 triệu</label>
                        <label>- Nhập CART1M - Giảm ngay 20% tối đa 1.000.000đ  (*Lưu ý: Không áp dụng cho sản phẩm thuộc ngành hàng mẹ và bé)</label>

                        <label>(*) Đặc biệt:</label>
                        <label>- Hoàn tiền 1 triệu cho đơn từ 4 triệu</label>
                        <label>- Hoàn tiền 500K cho đơn từ 3 triệu</label>
                    </div>
                </div>

                <div className="cart-right__discount">
                    <div className="title">
                        <div className="image">
                            <BiSolidDiscount />
                        </div>
                        <div className="text">
                            Mã giảm giá
                        </div>
                    </div >
                    <div className="content">
                        <div className="search">
                            <input type="text" placeholder='Mã giảm giá' />
                            <div className="caret">
                                <PiCaretRightBold />
                            </div>
                        </div>
                        <div className="submit">
                            <button>Áp dụng</button>
                        </div>
                    </div>
                </div>

                <div className="cart-right__bill">
                    <div className="pre-price">
                        <div className="title">
                            Tiền hàng
                        </div>
                        <div className="pre">
                            {cart.totalPrice.toLocaleString('en-US').replace(/,/g, '.')} ₫
                        </div>
                    </div>
                    <div className="coin">
                        <div className="title">
                            Coin nhận được
                        </div>
                        <div className="__coin">
                            {`+${(cart.totalPrice / 1000).toLocaleString('en-US').replace(/,/g, '.')} coin`}
                        </div>
                    </div>
                    <div className="after-price">
                        <div className="title">
                            Tạm tính:
                        </div>
                        <div className="after">
                            {cart.totalPrice.toLocaleString('en-US').replace(/,/g, '.')} ₫
                        </div>
                    </div>
                </div>

                <div className="cart-right__coin">
                    <div className="title">Bạn sẽ nhận được</div>
                    <div className="__coin">
                        {`${(cart.totalPrice / 1000).toLocaleString('en-US').replace(/,/g, '.')} coin`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart