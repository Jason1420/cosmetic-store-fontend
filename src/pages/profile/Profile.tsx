import React, { useState, useEffect } from 'react';
import './Profile.scss';
import axios from 'axios';
import { useFormik } from 'formik'
import { URL } from '../../routes/Url';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

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
    const userId = useSelector((state: RootState) => state.auth.userDTO.id)


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

                </div>
                <div className="historical-pay">

                </div>
                <div className="account">

                </div>
                <div className="item">

                </div>
                <div className="additional-info">

                </div>
            </div>
            <div className="profile-right">

            </div>
        </div>
    );
}

export default Profile;
