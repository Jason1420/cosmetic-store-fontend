import React, { useEffect, useState } from 'react'
import './Gift.scss'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
import { URL } from '../../routes/Url'
import Pagination from '../../components/Pagination/Pagination'
import { Constant } from '../../constant/Constant'

interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Gift: React.FC<Props> = ({ handleLoading }) => {
    const [pageItem, setPageItem] = useState<ItemDisplay[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        const getAllHotDealItem = async () => {
            setIsLoading(true)
            const res = await axios.get(`${URL.GET_ALL_GIFT}`,)
            if (res && res.data && res.data.data) {
                setTotalPage(Math.ceil(res.data.data.length / Constant.SIZE))

            }
            setIsLoading(false)
        }
        getAllHotDealItem()
    }, [])
    useEffect(() => {
        const getHotDealItem = async () => {
            setIsLoading(true)
            const res = await axios.get(`${URL.GET_GIFT}${currentPage}`,)
            if (res && res.data && res.data.data) {
                setPageItem(res.data.data);
            }
            setIsLoading(false)
        }
        getHotDealItem()
    }, [currentPage])
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])

    return (
        <div className='gift-container'>
            {isLoading ? <div className="title">...Loading</div> :
                <>
                    <div className="title">Qùa tặng</div>
                    <div className="gift-list">
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
                </>}
            <Pagination totalPage={totalPage} handleCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Gift