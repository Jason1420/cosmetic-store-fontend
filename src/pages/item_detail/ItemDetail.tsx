import React, { useState, useEffect } from 'react';
import './ItemDetail.scss';
import axios from 'axios';
import { URL } from '../../routes/Url';
import { useParams } from 'react-router-dom';
import { ItemDisplay } from '../../types/ItemDisplay';



const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState<ItemDisplay>()

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod dolore facilis iusto quas. Quo unde, magni omnis debitis consectetur recusandae nisi, vitae, nam aliquam voluptate quaerat eos qui. Aliquam!
                    </div>
                    <div className="address">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, deserunt!
                    </div>
                    <div className="submit">
                        <div className="add-to-cart">

                        </div>
                        <div className="like-item">

                        </div>
                    </div>
                </div>
            </div>

            <div className="detail-item__mid">
                <div className="detail-mid__info">

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
