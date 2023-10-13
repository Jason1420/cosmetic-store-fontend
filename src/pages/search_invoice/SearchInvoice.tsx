import React, { useEffect, useState } from 'react'
import './SearchInvoice.scss'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
import { URL } from '../../routes/Url'
import Pagination from '../../components/Pagination/Pagination'
import { Constant } from '../../constant/Constant'
import { IoLocationOutline } from 'react-icons/io5'
import { GoSearch } from 'react-icons/go'
import showroom1 from "../../assets/banner/showroom1.webp"
import { Invoice } from '../../types/Invoice'
interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const SearchInvoice: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [invoiceCode, setInvoiceCode] = useState<string>("")
    const [searchInvoice, setSearchInvoice] = useState<Invoice>()
    const [hadSearched, setHadSearched] = useState<boolean>(false)
    const handleOnChangeInvoiceCode = (value: string) => {
        setInvoiceCode(value);
    }
    const handleSearchInvoice = async () => {
        setHadSearched(true);
        try {
            const searchByCodeURL = `${URL.SEARCH_INVOICE_BY_CODE}/${invoiceCode}`
            const res = await axios.get(searchByCodeURL,)
            if (res && res.data) {
                setSearchInvoice(res.data.data)
                console.log(res.data.data)
            }

        } catch (error) {
            setSearchInvoice(undefined);
        }
    }
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
    return (
        <div className="wrapper">
            <div className='search-invoice-container'>
                <div className="search-invoice-top">
                    <div className="title">
                        Tra cứu trạng thái đơn hàng
                    </div>
                    <div className="search-bar">
                        <input type="text " placeholder='Nhập mã đơn hàng (VD: INV-20231310-00001)' onChange={(event) => handleOnChangeInvoiceCode(event.target.value)} />
                        <div className="search-icon"
                            onClick={() => handleSearchInvoice()}>
                            <GoSearch />
                        </div>
                    </div>
                </div>
                {searchInvoice &&
                    <div className="search-invoice-bottom">


                        <div className="title">
                            Tìm kiếm thành công đơn hàng: <b>{searchInvoice?.code}</b>
                        </div>
                        <div className="info">
                            <div className="customer">
                                <div className="title">
                                    Khách hàng:
                                </div>
                                <div className="text">
                                    {searchInvoice?.customerName}
                                </div>
                            </div>
                            <div className="email">
                                <div className="title">
                                    Email:
                                </div>
                                <div className="text">
                                    {searchInvoice?.customerEmail}
                                </div>
                            </div>
                            <div className="phone">
                                <div className="title">
                                    Số điện thoại:
                                </div>
                                <div className="text">
                                    {searchInvoice?.customerPhoneNumber}
                                </div>
                            </div>
                            <div className="address">
                                <div className="title">
                                    Địa chỉ:
                                </div>
                                <div className="text">
                                    {searchInvoice?.customerAddress}
                                </div>
                            </div>
                        </div>
                        {searchInvoice &&
                            <div className="cart-list">
                                <div className="detail">Chi tiết đơn hàng:</div>
                                {searchInvoice?.cartItem &&
                                    searchInvoice?.cartItem.items.map((item, index) => {
                                        return (
                                            <div className="cart-item" key={index}>
                                                {item.item.image &&
                                                    <div className="cart-item__image">
                                                        <NavLink to={`${PagePath.ITEM}/${item.item.id}`}>
                                                            <img className="image" src={item.item.image} alt="" />
                                                        </NavLink>
                                                    </div>
                                                }
                                                <div className="cart-item__info">
                                                    <div className="info__name">
                                                        {item.item.name}
                                                    </div>
                                                    <div className="info__price">
                                                        Giá:    {item.item.price.toLocaleString('en-US').replace(/,/g, '.').replace(/,/g, '.')} ₫
                                                    </div>
                                                    <div className="info__quantity">
                                                        Số lượng: {item.quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                                <div className="total">
                                    <div className="quantity">
                                        Tổng số lượng sản phẩm: {searchInvoice?.cartItem.totalQuantity}
                                    </div>
                                    <div className="price">
                                        Tổng tiền thanh toán: {searchInvoice?.cartItem.totalPrice.toLocaleString('en-US').replace(/,/g, '.').replace(/,/g, '.')} ₫
                                    </div>
                                </div>
                            </div>
                        }

                    </div>}
                {!searchInvoice && hadSearched &&
                    <div className="none-result">
                        Đơn hàng bạn đang tìm kiếm không tồn tại
                    </div>
                }

            </div >
        </div>
    )
}

export default SearchInvoice