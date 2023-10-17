import React, { useState, useEffect } from 'react';
import './Order.scss';
import axios from 'axios';
import { URL } from '../../routes/Url';
import { Invoice } from '../../types/Invoice';
import { InvoiceStatus } from '../../constant/Constant';
import { GiCardboardBox } from 'react-icons/gi'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ModalCustom from '../../components/Modal/ModalCustom';

const Order = () => {
    const userId = useSelector((state: RootState) => state.auth.userDTO.id)
    const [allInvoice, setAllInvoice] = useState<Invoice[]>([]);
    const [filterInvoice, setFilterInvoice] = useState<Invoice[]>([]);
    const [invoiceStatus, setInvoiceStatus] = useState<string>("all")
    const [reRender, setReRender] = useState<boolean>(false)
    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void
    const checkInvoiceStatus = (originStatus: string): string => {
        switch (originStatus) {
            case InvoiceStatus.NOT_PAID:
                return "Chưa thanh toán";
            case InvoiceStatus.PAID:
                return "Đã thanh toán";
            case InvoiceStatus.CANCELED:
                return "Đã hủy";
            case InvoiceStatus.GIVEN:
                return "Đã nhận hàng";
            case InvoiceStatus.WAIT:
                return "Đang chờ giao";
            case InvoiceStatus.RETURN:
                return "Đã trả hàng";
            default:
                return "Chưa thanh toán";
        }
    }

    useEffect(() => {
        if (invoiceStatus !== "all") {
            const newInvoice = allInvoice.filter(item => item.invoiceStatus === invoiceStatus)
            setFilterInvoice(newInvoice);
        } else {
            setFilterInvoice(allInvoice);
        }
    }, [invoiceStatus])
    useEffect(() => {
        const getAllInvoice = async () => {
            try {
                const getSomeInvoiceURL = `${URL.GET_ALL_INVOICE}/${userId}`;
                const res = await axios.get(getSomeInvoiceURL,)
                if (res && res.data) {
                    setAllInvoice(res.data.data)
                    setFilterInvoice(res.data.data)
                }
            } catch (error) {

            }
        }
        getAllInvoice()
    }, [reRender])

    const handleReRender = (update: boolean) => {
        setReRender(!reRender)
        setInvoiceStatus("all")
    }

    return (
        <div className="order-container">
            <div className="order-top">
                <button className={invoiceStatus === InvoiceStatus.ALL ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.ALL)}>Tất cả</button>
                <button className={invoiceStatus === InvoiceStatus.NOT_PAID ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.NOT_PAID)}>Chưa thanh toán</button>
                <button className={invoiceStatus === InvoiceStatus.PAID ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.PAID)}>Đã xác nhận</button>
                <button className={invoiceStatus === InvoiceStatus.WAIT ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.WAIT)}>Đang đợi giao hàng</button>
                <button className={invoiceStatus === InvoiceStatus.GIVEN ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.GIVEN)}>Đã nhận hàng</button>
                <button className={invoiceStatus === InvoiceStatus.CANCELED ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.CANCELED)}>Đã hủy</button>
                <button className={invoiceStatus === InvoiceStatus.RETURN ? "active" : ""} onClick={() => setInvoiceStatus(InvoiceStatus.RETURN)}>Đã trả hàng</button>
            </div>
            <div className="order-bottom">
                {filterInvoice && filterInvoice.map((cart, index) => {
                    return (
                        <div className="invoice" key={index}>
                            <div className={`status ${cart.invoiceStatus}`}>
                                {checkInvoiceStatus(cart.invoiceStatus || "")}
                            </div>
                            <div className="code">
                                <div className="left">
                                    Mã đơn hàng:
                                </div>
                                <div className="right">{cart.code}</div>
                            </div>
                            <div className="name">
                                <div className="left">
                                    Khách hàng:
                                </div>
                                <div className="right">{cart.customerName}</div>
                            </div>
                            <div className="email">
                                <div className="left">
                                    Email:
                                </div>
                                <div className="right">{cart.customerEmail}</div>
                            </div>
                            <div className="phone">
                                <div className="left">
                                    Số điện thoại:
                                </div>
                                <div className="right">{cart.customerPhoneNumber}</div>
                            </div>
                            <div className="address">
                                <div className="left">
                                    Địa chỉ:
                                </div>
                                <div className="right">{cart.customerAddress}</div>
                            </div>
                            <div className="quantity">
                                <div className="left">
                                    Tổng số lượng:
                                </div>
                                <div className="right">{cart.cartItem.totalQuantity}</div>
                            </div>
                            <div className="price">
                                <div className="left">
                                    Tổng tiền thanh toán:
                                </div>
                                <div className="right">{cart.cartItem.totalPrice.toLocaleString('en-US').replace(/,/g, '.')} <b>₫</b></div>
                            </div>
                            {(cart.invoiceStatus?.includes(InvoiceStatus.NOT_PAID) ||
                                cart.invoiceStatus?.includes(InvoiceStatus.PAID) ||
                                cart.invoiceStatus?.includes(InvoiceStatus.ALL) ||
                                cart.invoiceStatus?.includes(InvoiceStatus.WAIT)) &&
                                <div className="button-cancel">
                                    <ModalCustom title={'Hủy đơn hàng'} key={index}
                                        content='Bạn xác nhận hủy đơn hàng này?'
                                        invoiceCode={(cart.code || "za1")}
                                        handleUpdate={handleReRender} />
                                </div>
                            }
                        </div>
                    )
                })}
                {filterInvoice.length === 0 &&
                    <div className="no-result">
                        <div className="icon">
                            <GiCardboardBox />
                        </div>
                        <div className="text">
                            Không tìm thấy đơn hàng nào
                        </div>
                        <button>
                            Tiếp tục mua sắm
                        </button>
                    </div>
                }
            </div>
        </div >
    );
}

export default Order;
