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


const ItemDetail = () => {
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
    const [coin, setCoin] = useState<number>(0)

    useEffect(() => {
        const getItemById = async () => {
            const requestURL = `${URL.GET_ITEM_BY_ID}/${id}`
            const res = await axios.get(requestURL,)
            if (res && res.data && res.data.data) {
                setItem(res.data.data);

            }
            console.log(res.data.data)
        }
        getItemById()
        console.log('check item id >>>>', id)
    }, [])
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
                        {item?.price.toLocaleString('en-US')} ₫
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
                            <button>
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, nulla. Voluptates, animi deleniti facere recusandae eum corrupti tempora officia, in quis soluta earum ducimus accusantium repellendus quibusdam consequuntur deserunt fuga doloribus esse. Tempora exercitationem facilis cupiditate quaerat eius, iure saepe? Aperiam ratione tempora rerum itaque recusandae amet, vero esse! Similique.
                </div>
                <div className="detail-mid__relevant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus repudiandae aut, obcaecati, est, aliquam exercitationem blanditiis delectus dolor possimus autem voluptates sit! Laudantium dolores sint maxime quod quidem odit illum laborum repudiandae nam. Sequi aspernatur distinctio nisi quisquam repellendus pariatur est, tenetur autem accusantium veniam reprehenderit at soluta quis.
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
