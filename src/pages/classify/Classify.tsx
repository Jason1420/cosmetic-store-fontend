import React, { useEffect, useState } from 'react'
import './Classify.scss'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'
import { Brand } from '../../types/Brand'
import CustomScrollbars from '../../components/CustomScrollbars/CustomScrollbars'
import banner from '../../assets/banner/banner-filter.png'
import { NavLink } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
const Classify = () => {
    const [allItem, setAllItem] = useState<ItemDisplay[]>([])
    const [allBrand, setAllBrand] = useState<Brand[]>([])
    useEffect(() => {
        const getAllItem = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/getAll",)
            if (res && res.data && res.data.data) {
                setAllItem(res.data.data);
            }
            console.log(res.data.data)
        }
        const getAllBrand = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/getAllBrand",)
            console.log('check brand >>>> ', res)
            if (res && res.data && res.data.data) {
                setAllBrand(res.data.data);
            }
        }
        getAllItem()
        getAllBrand()
    }, [])

    return (
        <div className='classify-container'>
            <div className="classify-left">
                <div className="classify-left__gift">
                    <div className="gift-title">
                        Shop Gifts
                    </div>
                    <div className="gift-list">
                        <div className="gift-name">
                            Gifts For Baby
                        </div>
                        <div className="gift-name">
                            Gifts For Home
                        </div>
                        <div className="gift-name">
                            Gifts For Her
                        </div>
                        <div className="gift-name">
                            Gifts For Him
                        </div>
                    </div>
                </div>

                <div className="classify-left__search-brand">
                    <div className='search-input'>
                        <input className='search-bar' type="text" placeholder='Tìm kiếm thương hiệu' />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="list-brand">
                        <CustomScrollbars style={{ height: "250px  " }}>
                            {allBrand && allBrand.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        <input className='checkbox' type="checkbox" />
                                        <label className='brand-name'>{item.name}</label>
                                    </div>
                                )
                            })}
                        </CustomScrollbars>
                    </div>
                </div>

                <div className="break-line"></div>

                <div className="classify-left__search-price">
                    <div className="title">
                        Tìm kiếm theo giá
                    </div>
                    <div className="price-list">
                        <div className="price" >
                            <input className='checkbox' type="checkbox" />
                            <label className='price-name'>0 - 100k</label>
                        </div>
                        <div className="price" >
                            <input className='checkbox' type="checkbox" />
                            <label className='price-name'>100k - 500k</label>
                        </div>
                        <div className="price" >
                            <input className='checkbox' type="checkbox" />
                            <label className='price-name'>500k - 1tr</label>
                        </div>
                        <div className="price" >
                            <input className='checkbox' type="checkbox" />
                            <label className='price-name'>1tr - 2tr</label>
                        </div>
                        <div className="price" >
                            <input className='checkbox' type="checkbox" />
                            <label className='price-name'>2tr - 5tr</label>
                        </div>
                    </div>
                    <div className="range-price">
                        <div className="min-price">
                            <label className='min' htmlFor="">Giá tối thiểu (k)</label>
                            <input type="text" placeholder='0' />
                        </div>
                        <div className="hyphen"></div>
                        <div className="max-price">
                            <label className='max' htmlFor="">Giá tối đa (k)</label >
                            <input type="text" placeholder='9.999' />
                        </div>
                    </div>
                    <div className="submit">
                        <button>Áp dụng</button>
                    </div>
                </div>

                <div className="classify-left__promo">
                    <img src={banner} alt="" />

                </div>
            </div>

            <div className="classify-right">
                {allItem &&
                    allItem.filter(item => item.status === "New").map((item, index) => {
                        return (
                            <div className="list-item__item" key={index}>
                                {item.image &&
                                    <div className="list-item__item-image">
                                        <NavLink to={`${PagePath.ITEM}/${item.id}`}>
                                            <img className="image" src={item.image} alt="" />
                                        </NavLink>
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