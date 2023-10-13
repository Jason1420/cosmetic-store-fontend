import React, { useState, useEffect } from 'react';
import './ItemDetail.scss';
import axios from 'axios';
import { URL } from '../../routes/Url';
import { useParams } from 'react-router-dom';
import { ItemDisplay } from '../../types/ItemDisplay';
import { BsCoin } from 'react-icons/bs'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { MdPublishedWithChanges } from 'react-icons/md'
import { PiCaretRightBold } from 'react-icons/pi'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addNewItemToCart } from '../../store/reducers/cartReducer';
import { CartItem } from '../../types/CartItem';
import { toast } from 'react-toastify';

interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const ItemDetail: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams();
    const [item, setItem] = useState<ItemDisplay>({
        name: "",
        brand: "",
        type: "",
        price: 0,
        image: "",
        description: "",
        status: "",
    })
    const dispatch = useDispatch();
    const handleAddItemToCart = (item: ItemDisplay) => {
        const itemToCart: CartItem = {
            item: item,
            quantity: 1,

        }
        toast.success("Đã thêm sản phẩm vào giỏ hàng", {
            icon: "✔️"
        });
        dispatch(addNewItemToCart(itemToCart));

    }

    useEffect(() => {
        const getItemById = async () => {
            const requestURL = `${URL.GET_ITEM_BY_ID}/${id}`
            const res = await axios.get(requestURL,)
            if (res && res.data && res.data.data) {
                setItem(res.data.data);

            }
        }
        getItemById()
    }, [])
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
    return (
        <div className="detail-item-container">
            <div className="detail-item__top">
                <div className="detail-top__image">
                    <img src={item?.image} alt="" />
                </div>
                <div className="detail-top__info">
                    <div className="brand">
                        {item?.brand}
                    </div>
                    <div className="name">
                        {item?.name}
                    </div>
                    <div className="rating">
                        <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <label className='review'>25 đánh giá</label>

                        <div className="line"></div>

                        <i className="fa-solid fa-heart"></i>

                        <label className='lover'>30 loves</label>
                    </div>
                    <div className="price">
                        {item?.price.toLocaleString('en-US').replace(/,/g, '.')} ₫
                    </div>
                    <div className="coupon">
                        [Từ nay - 9.10] Mua đơn 3 triệu: TẶNG QUÀ "BEST-SELLER" 3 TRIỆU (Nhập mã GWP923) + HOÀN TIỀN 500K/ Giảm 20% mọi đơn hàng (Nhập mã CART1M)
                    </div>
                    <div className="policy">
                        <div className="box">

                            <div className="image">
                                <BsCoin />
                            </div>
                            <div className="description">
                                Nhận ngay <b>{Math.floor(item.price / 1000)} coin</b >  khi mua sản phẩm này
                            </div>
                        </div>
                        <div className="box">

                            <div className="image">
                                <LiaShippingFastSolid />
                            </div>
                            <div className="description">
                                <b>Miễn phí giao hàng</b> tối đa <b>15K</b> cho sản phẩm này
                            </div>
                        </div>
                        <div className="box">

                            <div className="image">
                                <MdPublishedWithChanges />
                            </div>
                            <div className="description">
                                Đổi trả hàng
                                trong <b>7 ngày</b>
                            </div>
                        </div>
                    </div>
                    <div className="address">
                        <div className="icon">
                            <IoLocationOutline />
                        </div >
                        <label className='locate'>Địa chỉ:</label>
                        <div className="caret">
                            <PiCaretRightBold />
                        </div>
                    </div>
                    <div className="submit">
                        <div className="add-to-cart">
                            <button onClick={() => handleAddItemToCart(item)}>
                                <div className="icon">
                                    <HiOutlineShoppingBag />
                                </div>
                                Thêm vào giỏ
                            </button>
                        </div>
                        <div className="like-item">
                            <button>
                                <div className="icon">
                                    <AiOutlineHeart />
                                </div>
                                Yêu thích
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail-item__mid">
                <div className="detail-mid__info">
                    <div className="title">Thông tin</div>
                    <div className="how-to-use">

                    </div>
                    <div className="ingredient">

                    </div>
                </div>
                <div className="detail-mid__relevant">

                </div>

            </div>

            <div className="detail-item__bottom">
                <div className="detail-bottom__comment">

                </div>
                <div className="detail-bottom__rating">

                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
