import React, { useEffect, useState } from 'react'
import './Classify.scss'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'

const Classify = () => {
    const [allItem, setAllItem] = useState<ItemDisplay[]>([])
    useEffect(() => {
        const getAllItem = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/getAll",)
            if (res && res.data && res.data.data) {
                setAllItem(res.data.data);
            }
            console.log(res.data.data)
        }

        getAllItem()
    }, [])
    return (
        <div className='classify-container'>
            <div className="classify-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa possimus quo nisi. Quia in eos voluptatum ea reiciendis quidem, placeat dicta porro aspernatur vel dolore odio error fuga aliquam similique nisi hic distinctio ad quas blanditiis repudiandae nobis praesentium nihil perspiciatis? Molestiae, et? Atque ipsam aut quas cumque perferendis porro?
                <div className="classify-left__quick-search">

                </div>

                <div className="classify-left__search-bar">

                </div>

                <div className="classify-left__search-brand">

                </div>

                <div className="classify-left__search-price">

                </div>

                <div className="classify-left__search-item-status">

                </div>

                <div className="classify-left__promo">

                </div>
            </div>

            <div className="classify-right">
                {allItem &&
                    allItem.filter(item => item.status === "New").map((item, index) => {
                        return (
                            <div className="list-item__item" key={index}>
                                {item.image &&
                                    <div className="list-item__item-image">
                                        <img className="image" src={item.image} alt="" />
                                    </div>
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
                                            item.price.toLocaleString('en-US')} ₫
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Classify