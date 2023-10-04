import React, { useState, useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';
import Slider from "react-slick";
import brand1 from "../../assets/images/brand1.jpg"
import brand2 from "../../assets/images/brand2.jpg"
import brand3 from "../../assets/images/brand3.jpg"
import brand4 from "../../assets/images/brand4.jpg"
import brand5 from "../../assets/images/brand5.jpg"
import brand6 from "../../assets/images/brand6.jpg"
import brand7 from "../../assets/images/brand7.jpg"
import brand8 from "../../assets/images/brand8.jpg"
import brand9 from "../../assets/images/brand9.jpg"
import brand10 from "../../assets/images/brand10.jpg"
import brand11 from "../../assets/images/brand11.jpg"
import brand12 from "../../assets/images/brand12.jpg"
import program1 from "../../assets/images/program1.webp"
import program2 from "../../assets/images/program2.webp"
import program3 from "../../assets/images/program3.webp"
import program4 from "../../assets/images/program4.webp"
import { ItemDisplay } from '../../types/ItemDisplay';
import { NavLink } from 'react-router-dom';
import { PagePath } from '../../routes/Path';


const ListItem = () => {

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <>
            <div>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </div>
            <div className="list-item__title">
                Hot Deal
                <div className="view-all">
                    Xem tất cả <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <Slider {...settings}>
                {allItem &&
                    allItem.filter(item => item.status === "Hot").map((item, index) => {
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
                                            item.price.toLocaleString('en-US')} ₫
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Slider>
            <div className="list-item__title brand-title">
                Thương hiệu nổi bật
            </div>
            <div className="popular-brand">
                <div className="brand">
                    <img src={brand1} alt="" />
                </div>
                <div className="brand">
                    <img src={brand2} alt="" />
                </div>
                <div className="brand">
                    <img src={brand3} alt="" />
                </div>
                <div className="brand">
                    <img src={brand4} alt="" />
                </div>
                <div className="brand">
                    <img src={brand5} alt="" />
                </div>
                <div className="brand">
                    <img src={brand6} alt="" />
                </div>
                <div className="brand">
                    <img src={brand7} alt="" />
                </div>
                <div className="brand">
                    <img src={brand8} alt="" />
                </div>
                <div className="brand">
                    <img src={brand9} alt="" />
                </div>
                <div className="brand">
                    <img src={brand10} alt="" />
                </div>
                <div className="brand">
                    <img src={brand11} alt="" />
                </div>
                <div className="brand">
                    <img src={brand12} alt="" />
                </div>

            </div>


            <div className="list-item__title">
                Bán chạy
                <div className="view-all">
                    Xem tất cả <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <Slider {...settings}>
                {allItem &&
                    allItem.filter(item => item.status === "Best").map((item, index) => {

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
                                            item.price.toLocaleString('en-US')} ₫
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Slider>

            <div className="list-item__title ">
                Chương trình nổi bật
            </div>
            <div className="popular-program">
                <div className="program">
                    <img src={program1} alt="" />
                </div>
                <div className="program">
                    <img src={program2} alt="" />
                </div>
                <div className="program">
                    <img src={program3} alt="" />
                </div>
                <div className="program">
                    <img src={program4} alt="" />
                </div>
            </div>

            <div className="list-item__title">
                Hàng mới
                <div className="view-all">
                    Xem tất cả <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>

            <Slider {...settings}>

                {allItem &&
                    allItem.filter(item => item.status === "New").map((item, index) => {
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
                                            item.price.toLocaleString('en-US')} ₫
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Slider>
        </>
    );
}

export default ListItem;
