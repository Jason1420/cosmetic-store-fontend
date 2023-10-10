import { useSelector } from 'react-redux'
import './Payment.scss'
import { useState, useEffect } from 'react'
import { RootState } from '../../store/store'
import InputComponent from '../../components/Input/InputComponent'
import { NavLink } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
import cod from "../../assets/payment/code.png"
import bank from "../../assets/payment/credit-card.png"
import pay from "../../assets/payment/pay.png"
import { SelectOption } from '../../types/SelectOption'
import axios from 'axios'
import SelectComponent from '../../components/SelectComponent/SelectComponent'

const Payment = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const ship = true;
    const [fullName, setFullName] = useState<string>("")
    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value)
    }
    const [payment, setPayment] = useState<number>(0)
    const paymenOnChane = (value: number) => {
        setPayment(value)
    }

    const [province, setProvince] = useState<SelectOption[]>([])
    const [provinceSelected, setProvinceSelected] = useState<SelectOption | undefined>({ name: "Chọn tỉnh/ thành phố", id: 0 });
    const handleOnChangeProvince = (o: SelectOption | undefined) => {
        setProvinceSelected(o)
    }
    const [district, setDistrict] = useState<SelectOption[]>([])
    const [districtSelected, setDistrictSelected] = useState<SelectOption | undefined>({ name: "Chọn quận/ huyện", id: 0 });
    const handleOnChangeDistrict = (o: SelectOption | undefined) => {
        setDistrictSelected(o)
    }
    const [ward, setWard] = useState<SelectOption[]>([])
    const [wardSelected, setWardSelected] = useState<SelectOption | undefined>({ name: "Chọn phường/ xã", id: 0 });
    const handleOnChangeWard = (o: SelectOption | undefined) => {
        setWardSelected(o)
    }


    useEffect(() => {
        const getProvince = async () => {
            try {
                const prov = await axios.get('https://provinces.open-api.vn/api/p/?depth=2',)
                setProvince(prov.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProvince()
    }, [])
    useEffect(() => {
        const getDistrict = async () => {
            setDistrict([])
            setDistrictSelected({ name: "Chọn quận/ huyện", id: 0 })
            setWard([])
            setWardSelected({ name: "Chọn phường/ xã", id: 0 })
            try {
                if (provinceSelected?.code) {
                    const dist = await axios.get(`https://provinces.open-api.vn/api/p/${provinceSelected?.code}?depth=2`,)
                    setDistrict(dist.data.districts)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDistrict()
    }, [provinceSelected])
    useEffect(() => {
        const getDistrict = async () => {
            setWard([])
            setWardSelected({ name: "Chọn phường/ xã", id: 0 })
            try {
                if (districtSelected?.code) {
                    const ward = await axios.get(`https://provinces.open-api.vn/api/d/${districtSelected?.code}?depth=2`,)
                    setWard(ward.data.wards)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getDistrict()
    }, [districtSelected])
    return (
        <div className='payment-container'>
            <div className="payment-left">
                <div className="store-name">
                    Đặt hàng
                </div>
                <div className="bread-crumbs">
                    <div className="cart">
                        <NavLink to={PagePath.CART}>Giỏ hàng </NavLink>

                    </div>
                    <div className="caret">{`>`}</div>
                    <div className="payment-info">
                        Thông tin giao hàng
                    </div>
                </div>
                <div className="info-title">
                    Thông tin giao hàng
                </div>
                <div className="full-name">
                    <InputComponent label='Họ và tên' handleOnChange={onChangeName} />
                </div>
                <div className="email-phone">
                    <div className="email__">
                        <InputComponent label='Email' handleOnChange={onChangeName} />
                    </div>
                    <div className="phone__">
                        <InputComponent label='Số điện thoại' handleOnChange={onChangeName} />
                    </div>
                </div>
                <div className="address">
                    <InputComponent label='Địa chỉ' handleOnChange={onChangeName} />
                </div>
                <div className="address-detail">
                    <div className="detail">
                        <label htmlFor="brand">Tỉnh/ thành phố</label>
                        <SelectComponent options={province} id={provinceSelected}
                            selectOnChange={(o) => handleOnChangeProvince(o)} />
                    </div>
                    <div className="detail">
                        <label htmlFor="brand">Quận/ huyện</label>
                        <SelectComponent options={district} id={districtSelected}
                            selectOnChange={(o) => handleOnChangeDistrict(o)} />
                    </div>
                    <div className="detail">
                        <label htmlFor="brand">Phường/ xã</label>
                        <SelectComponent options={ward} id={wardSelected}
                            selectOnChange={(o) => handleOnChangeWard(o)} />
                    </div>



                </div>

                <div className="ship-method">
                    <div className="text">
                        Phương thức vận chuyển
                    </div>
                    <div className="form-ship">
                        <div className="text">
                            <input type="radio" id='ship' name='ship' value={0} checked={true} onChange={() => { }} />
                            <label htmlFor="ship">Giao hàng miễn phí toàn quốc</label>
                        </div>
                        <div className="price">
                            0₫
                        </div>
                    </div>
                </div>
                <div className="payment-method">
                    <div className="text">
                        Phương thức thanh toán
                    </div>
                    <div className="form-payment">

                        <div className="cod">
                            <div className="text">
                                <input type="radio" id='cod' name='payment' value={0} checked={payment === 0}
                                    onChange={(event) => paymenOnChane(0)} />
                                <img src={cod} alt="" />
                                <label htmlFor="cod">COD (Thanh toán khi nhận hàng)</label>
                            </div>
                        </div>
                        {payment === 0 &&
                            <div className="cod-detail">
                                <label htmlFor="">Với đơn nội thành Hồ Chí Minh, bạn sẽ nhận được hàng trong vòng 2 giờ.
                                </label>
                                <label htmlFor="
                            "> Với đơn tỉnh (ngoài Hồ Chí Minh), bạn sẽ nhận được hàng trong vòng 2-4 ngày.</label>

                            </div>
                        }
                        <div className="bank">
                            <div className="icon">

                            </div>
                            <div className="text">
                                <input type="radio" id='bank' name='payment' value={1}
                                    onChange={(event) => paymenOnChane(1)} />
                                <img src={bank} alt="" />
                                <label htmlFor="bank">Chuyển khoản qua ngân hàng</label>

                            </div>
                        </div>
                        {payment === 1 &&
                            <div className="bank-detail">
                                <label htmlFor="">
                                    * Sacombank - TRUONG THANH HAI - 060287605202 - PGD TPHCM

                                </label>
                                <label htmlFor="">
                                    * Bạn ghi chú ở NỘI DUNG CHUYỂN KHOẢN: CH01 SĐT
                                </label>
                                <label htmlFor="">
                                    Ví dụ: CH01 0987654321
                                </label>
                                <label htmlFor="">
                                    Cám ơn bạn!
                                </label>
                            </div>
                        }
                        <div className="atm">
                            <div className="icon">

                            </div>
                            <div className="text">
                                <input type="radio" id='card' name='payment' value={2} onChange={(event) => paymenOnChane(2)} />
                                <img src={pay} alt="" />
                                <label htmlFor="card">Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY</label>

                            </div>
                        </div>
                    </div>
                </div>
                <button>Hoàn tất đơn hàng</button>
            </div>

            <div className="payment-right">
                <div className="cart-list">
                    {cart.items.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="item-left">
                                    <div className="img">
                                        <img src={item.item.image} alt="" />
                                    </div>
                                    <div className="quantity">
                                        {item.quantity}
                                    </div>
                                </div>
                                <div className="item-center">
                                    <div className="item-name">
                                        {item.item.name}
                                    </div>
                                    <div className="item-brand">
                                        {item.item.brand}

                                    </div>
                                </div>
                                <div className="item-right">
                                    <div className="price">
                                        {(item.item.price * item.quantity).toLocaleString('en-US').replace(/,/g, '.')} ₫

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="coupon">
                    <input type="text" placeholder='Mã giảm giá' />
                    <button>Áp dụng</button>
                </div>
                <div className="last-price">
                    <div className="temp-price">
                        <div className="title">
                            Tạm tính
                        </div>
                        <div className="price">
                            {cart.totalPrice.toLocaleString('en-US').replace(/,/g, '.')} ₫
                        </div>
                    </div>
                    <div className="ship-fee">
                        <div className="title">
                            Phí vận chuyển
                        </div>
                        <div className="price">
                            Miễn phí
                        </div>
                    </div>
                    <div className="real-price">
                        <div className="title">
                            Tổng cộng
                        </div>
                        <div className="price">
                            {cart.totalPrice.toLocaleString('en-US').replace(/,/g, '.')} ₫
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment