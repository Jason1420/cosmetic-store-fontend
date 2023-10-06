import React, { useEffect, useState } from 'react'
import './Classify.scss'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'
import { Brand } from '../../types/Brand'
import CustomScrollbars from '../../components/CustomScrollbars/CustomScrollbars'
import banner from '../../assets/banner/banner-filter.png'
import { NavLink } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
import { URL } from '../../routes/Url'
import { Type } from '../../types/Type'
import Pagination from '../../components/Pagination/Pagination'
import { Constant } from '../../constant/Constant'

interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Classify: React.FC<Props> = ({ handleLoading }) => {
    const [allItem, setAllItem] = useState<ItemDisplay[]>([])
    const [allBrand, setAllBrand] = useState<Brand[]>([])
    const [allType, setAllType] = useState<Type[]>([])

    const [filterByBrand, setFilterByBrand] = useState<string[]>(["all"])
    const [filterByType, setFilterByType] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [pageItem, setPageItem] = useState<ItemDisplay[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0)

    useEffect(() => {
        const getAllBrand = async () => {
            setIsLoading(true)
            const res = await axios.get(URL.GET_ALL_BRAND,)
            if (res && res.data && res.data.data) {
                setAllBrand(res.data.data);
            }
            setIsLoading(false)
        }
        const getAllType = async () => {
            setIsLoading(true)
            const res = await axios.get(URL.GET_ALL_TYPE,)
            if (res && res.data && res.data.data) {
                setAllType(res.data.data);
            }
            setIsLoading(false)
        }
        getAllBrand()
        getAllType()
    }, [])
    const handleCheckboxOnChange = (brand: string, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setFilterByBrand([...filterByBrand, brand])
        } else {
            let gonnaRemove = filterByBrand.filter(item => item !== brand)
            setFilterByBrand(gonnaRemove);
        }

    }
    const handleChooseType = (typeId: number) => {
        setFilterByType(typeId);
    }
    useEffect(() => {
        const filterItem = async () => {
            setIsLoading(true)
            try {
                const paramsBrand = filterByBrand.map(brand => `brands=${encodeURIComponent(brand)}`).join('&');
                const paramsType = `&typeId=${filterByType}`;
                if (paramsBrand === "brands=all") {
                    const res = await axios.get(`${URL.SEARCH_ITEM_BY_BRAND}/${filterByType}?page=${currentPage}`,)
                    if (res && res.data && res.data.data) {
                        setPageItem(res.data.data);
                    }
                    const resCount = await axios.get(`${URL.COUNT_ITEM_BY_TYPE_ID}${filterByType}`,)
                    if (resCount && resCount.data && resCount.data.data) {
                        setTotalPage(Math.ceil(resCount.data.data / Constant.CLASSIFY_SIZE));
                        if (currentPage > Math.ceil(resCount.data.data / Constant.CLASSIFY_SIZE)) {
                            setCurrentPage(Math.ceil(resCount.data.data / Constant.CLASSIFY_SIZE))
                        }
                    }
                } else {
                    const params = paramsBrand + paramsType;
                    const res = await axios.get(`${URL.SEARCH_ITEM_BY_BRAND}?${params}&page=${currentPage}`,)
                    if (res && res.data && res.data.data) {
                        setPageItem(res.data.data);
                    }
                    const resCount = await axios.get(`${URL.COUNT_ITEM_BY_TYPE_ID_AND_BRAND}?${params}`,)
                    if (resCount && resCount.data && resCount.data.data) {
                        setTotalPage(Math.ceil(resCount.data.data / Constant.CLASSIFY_SIZE));
                        if (currentPage > Math.ceil(resCount.data.data / Constant.CLASSIFY_SIZE)) {
                            setCurrentPage(Math.ceil(resCount.data.data / Constant.CLASSIFY_SIZE))
                        }
                    }
                }


            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        filterItem()
    }, [filterByBrand, filterByType, currentPage])
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])


    return (
        <div className='classify-container'>
            <div className="classify-left">
                <div className="classify-left__gift">
                    <div className="gift-title">
                        Danh mục sản phẩm
                    </div>
                    <div className="gift-list">
                        {allType &&
                            allType.map((item, index) => {
                                return (
                                    <div className={`gift-name ${item.id === filterByType ? "active" : ""} `} key={item.id} onClick={() => handleChooseType(item.id)}>
                                        {item.name}
                                    </div>
                                )
                            })}
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
                                        <input className='checkbox' type="checkbox" onChange={(event) => handleCheckboxOnChange(item.name, event)} />
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

                <div className="classify-right-list">
                    {pageItem &&
                        pageItem.map((item, index) => {
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
                                                item.price.toLocaleString('en-US').replace(/,/g, '.')} ₫
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="pagination-bar">
                    <Pagination totalPage={totalPage} handleCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    )
}

export default Classify