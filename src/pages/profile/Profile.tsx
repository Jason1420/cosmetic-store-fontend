import React, { useState, useEffect } from 'react';
import './Profile.scss';
import axios from 'axios';
import { useFormik } from 'formik'
import { URL } from '../../routes/Url';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import avatar from "../../assets/images/logo.jpg"
import { IoWalletOutline, IoCheckmarkDone } from "react-icons/io5"
import { LiaShippingFastSolid } from "react-icons/lia"
import { BsGift, BsPatchQuestion, BsPatchExclamation } from "react-icons/bs"
import { BiCommentDetail } from "react-icons/bi"
import { CiUser } from "react-icons/ci"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHistory, AiOutlineEye, AiOutlineHeart, AiOutlineFieldTime } from "react-icons/ai"
import { PiLockKeyLight } from "react-icons/pi"
import { HiOutlineTicket } from "react-icons/hi"
import Order from '../order/Order';






interface NewItem {
    id?: number,
    name: string,
    brand: string | undefined,
    type: string | undefined,
    price: number,
    image?: string,
    description: string,
    status: string | undefined
}

const Profile = () => {
    const dispatch = useDispatch()
    const customer = useSelector((state: RootState) => state.auth.customer) || {
        name: "",
        email: "",
        address: "",
        phoneNumber: ""
    }
    const user = useSelector((state: RootState) => state.auth)
    const userId = useSelector((state: RootState) => state.auth.userDTO.id)

    const [showAccountDetail, setAccountDetail] = useState<boolean>(false)
    const [showItemDetail, setItemDetail] = useState<boolean>(false)
    const [showInfoDetail, setInfoDetail] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            fullName: customer.name,
            email: customer.email,
            address: customer.address,
            phoneNumber: customer.phoneNumber,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required(`Vui lòng nhập họ và tên`).matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
                , "Tên không hợp lệ"),
            email: Yup.string().required(`Vui lòng nhập email`).matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                , "Email không hợp lệ"),
            address: Yup.string().required(`Vui lòng nhập địa chỉ`),
            phoneNumber: Yup.string().required(`Vui lòng nhập số điện thoại`).matches(/^0[0-9]{9}$/, "Số điện thoại không hợp lệ"),
        }),
        onSubmit: async (values) => {
            try {
                const newInfo = {
                    userId: userId,
                    fullName: formik.values.fullName,
                    email: formik.values.email,
                    address: formik.values.address,
                    phoneNumber: formik.values.phoneNumber,
                }
                const changeCustomerInfo = URL.CHANGE_CUSTOMER_INFO;
                const res = await axios.put(changeCustomerInfo, newInfo,)
                if (res.data.code === 200) {
                    toast.success("Thay đổi thông tin thành công", {
                        icon: "✔️"
                    });
                }
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        // <div className="profile-container">
        //     <div className="title">
        //         Thông tin cá nhân
        //     </div>
        //     <div className="form-add-item">
        //         <div className="input-form ">
        //             <label htmlFor="fullName">Họ và tên</label>
        //             {formik.errors.fullName &&
        //                 <label className="formik-error ">{formik.errors.fullName}</label>}
        //             <input type="text"
        //                 className="form-control "
        //                 id="fullName"
        //                 value={formik.values.fullName}
        //                 onChange={formik.handleChange} />
        //         </div>

        //         <div className="input-form ">
        //             <label htmlFor="email">Email</label>
        //             {formik.errors.email &&
        //                 <label className="formik-error ">{formik.errors.email}</label>}
        //             <input type="text"
        //                 className="form-control "
        //                 id="email"
        //                 value={formik.values.email}
        //                 onChange={formik.handleChange} />
        //         </div>

        //         <div className="input-form ">
        //             <label htmlFor="address">Địa chỉ</label>
        //             {formik.errors.address &&
        //                 <label className="formik-error ">{formik.errors.address}</label>}
        //             <input type="text"
        //                 className="form-control "
        //                 id="address"
        //                 value={formik.values.address}
        //                 onChange={formik.handleChange} />
        //         </div>

        //         <div className="input-form ">
        //             <label htmlFor="phoneNumber">Số điện thoại</label>
        //             {formik.errors.phoneNumber &&
        //                 <label className="formik-error ">{formik.errors.phoneNumber}</label>}
        //             <input type="text"
        //                 className="form-control "
        //                 id="phoneNumber"
        //                 value={formik.values.phoneNumber}
        //                 onChange={formik.handleChange} />
        //         </div>

        //         <div className="end-form">
        //             <button className='button-custom'
        //                 type='submit'
        //                 onClick={() => formik.handleSubmit()}>
        //                 Lưu thông tin
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div className="profile-container">
            <div className="profile-left">
                <div className="general-info">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="name">
                        {customer.name}
                    </div>
                    <div className="role">
                        {user.userDTO.roles[0]}
                    </div>
                    <div className="money">

                        <div className="money__">

                            <div className="number">
                                0 ₫
                            </div>
                            <div className="text">
                                Số dư
                            </div>
                        </div>
                        <div className="money__">
                            <div className="number">
                                0
                            </div>
                            <div className="text">
                                Coin
                            </div>
                        </div>
                    </div>

                </div>
                <div className="historical-pay">
                    <div className="top">
                        <div className="left">
                            Lịch sử mua hàng
                        </div>
                        <div className="right">
                            Xem tất cả {`>`}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="status">
                            <div className="icon">

                                <IoWalletOutline />
                            </div>
                            <div className="text">
                                Chưa thanh toán
                            </div>
                        </div>
                        <div className="status">
                            <div className="icon gift">

                                <BsGift />
                            </div>
                            <div className="text">
                                Đã xác nhận
                            </div>
                        </div>
                        <div className="status">
                            <div className="icon">

                                <LiaShippingFastSolid />
                            </div>
                            <div className="text">
                                Đang đợi giao hàng
                            </div>
                        </div>
                        <div className="status">
                            <div className="icon">

                                <IoCheckmarkDone />
                            </div>
                            <div className="text">
                                Đã nhận hàng
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <div className="left">
                        Tài khoản
                    </div>
                    {showAccountDetail !== true ?
                        <div className="right"
                            onClick={() => setAccountDetail(true)}>
                            <AiOutlinePlus />
                        </div>
                        :
                        <div className="right"
                            onClick={() => setAccountDetail(false)}>
                            <AiOutlineMinus />
                        </div>
                    }
                </div>
                {showAccountDetail === true &&
                    <div className="account-detail">
                        <div className="detail">
                            <div className="icon">
                                <CiUser />
                            </div>
                            <div className="text">
                                Chỉnh sửa thông tin cá nhân
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <PiLockKeyLight />
                            </div>
                            <div className="text">
                                Đổi mật khẩu
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <LiaShippingFastSolid />
                            </div>
                            <div className="text">
                                Địa chỉ giao hàng
                            </div>
                        </div>
                    </div>}
                <div className="item">
                    <div className="left">
                        Sản phẩm
                    </div>
                    {showItemDetail !== true ?
                        <div className="right"
                            onClick={() => setItemDetail(true)}>
                            <AiOutlinePlus />
                        </div>
                        :
                        <div className="right"
                            onClick={() => setItemDetail(false)}>
                            <AiOutlineMinus />
                        </div>
                    }
                </div>
                {showItemDetail === true &&
                    <div className="item-detail">
                        <div className="detail">
                            <div className="icon">
                                <AiOutlineEye />
                            </div>
                            <div className="text">
                                Sản phẩm đã xem
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <AiOutlineHeart />
                            </div>
                            <div className="text">
                                Sản phẩm yêu thích
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <AiOutlineFieldTime />
                            </div>
                            <div className="text">
                                Sản phẩm chờ hàng về
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <BiCommentDetail />
                            </div>
                            <div className="text">
                                Sản phẩm đã đánh giá
                            </div>
                        </div>

                    </div>
                }
                <div className="additional-info">
                    <div className="left">
                        Thông tin
                    </div>
                    {showInfoDetail !== true ?
                        <div className="right"
                            onClick={() => setInfoDetail(true)}>
                            <AiOutlinePlus />
                        </div>
                        :
                        <div className="right"
                            onClick={() => setInfoDetail(false)}>
                            <AiOutlineMinus />
                        </div>
                    }
                </div>
                {showInfoDetail === true &&
                    <div className="additional-info-detail">
                        <div className="detail">
                            <div className="icon">
                                <HiOutlineTicket />
                            </div>
                            <div className="text">
                                Mã giảm giá
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <AiOutlineHistory />
                            </div>
                            <div className="text">
                                Lịch sử giao dịch
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <BsPatchQuestion />
                            </div>
                            <div className="text">
                                Câu hỏi thường gặp
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <BsPatchExclamation />
                            </div>
                            <div className="text">
                                Gửi yêu cầu hỗ trợ
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="profile-right">
                <Order />
            </div>
        </div>
    );
}

export default Profile;
