import { useState } from 'react'
import './Register.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { URL } from '../../routes/Url';
import { PagePath } from '../../routes/Path';
import * as Yup from 'yup';
import { useFormik } from 'formik';
const Register = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            fullName: "",
            email: "",
            address: "",
            phoneNumber: "",
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
                const registerForm = {
                    username: formik.values.username,
                    password: formik.values.password,
                    fullName: formik.values.fullName,
                    email: formik.values.email,
                    address: formik.values.address,
                    phoneNumber: formik.values.phoneNumber,
                }
                const registerNewUser = URL.REGISTER;
                const res = await axios.post(registerNewUser, registerForm,)
                if (res.data.code === 200) {
                    navigate(PagePath.LOGIN)
                }
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <div className="register-background" >
            <div className="register-container">
                <div className="register-logo">
                    {/* <img src={Logo} alt="logo-register" /> */}
                </div>
                <div className="register-box">
                    <div className="register-title">Đăng Ký</div>
                    <div className="register-subtitle">Access our dashboard</div>


                    <div className="form">
                        <div className="register-input">
                            <label htmlFor="username">Tài khoản</label>
                            {formik.errors.username &&
                                <label className="formik-error ">{formik.errors.username}</label>}
                            <input type="text"
                                className="form-control "
                                id="username"
                                placeholder='Nhập tài khoản'
                                value={formik.values.username}
                                onChange={formik.handleChange} />

                        </div>

                        <div className="register-input ">
                            <div className="password-input-form">
                                <label htmlFor="password">Mật khẩu</label>
                                {formik.errors.password &&
                                    <label className="formik-error ">{formik.errors.password}</label>}
                                <input type={isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    id="password"
                                    placeholder='Nhập mật khẩu'
                                    tabIndex={2}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onKeyUp={(event) => {
                                        if (event.key === "Enter") {
                                            formik.handleSubmit();
                                        }

                                    }}

                                />
                                <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                    onClick={() => handleShowPassword()}
                                ></i>


                            </div>
                        </div>
                        <div className="register-input">
                            <label htmlFor="fullName">Họ và tên</label>
                            {formik.errors.fullName &&
                                <label className="formik-error ">{formik.errors.fullName}</label>}
                            <input type="text"
                                className="form-control "
                                id="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange} />

                        </div>
                        <div className="register-input">
                            <label htmlFor="email">Email</label>
                            {formik.errors.email &&
                                <label className="formik-error ">{formik.errors.email}</label>}
                            <input type="text"
                                className="form-control "
                                id="email"
                                value={formik.values.email}
                                onChange={formik.handleChange} />

                        </div>
                        <div className="register-input">
                            <label htmlFor="phoneNumber">Số điện thoại</label>
                            {formik.errors.phoneNumber &&
                                <label className="formik-error ">{formik.errors.phoneNumber}</label>}
                            <input type="text"
                                className="form-control "
                                id="phoneNumber"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange} />

                        </div>
                        <div className="register-input">
                            <label htmlFor="address">Địa chỉ</label>
                            {formik.errors.address &&
                                <label className="formik-error ">{formik.errors.address}</label>}
                            <input type="text"
                                className="form-control "
                                id="address"
                                value={formik.values.address}
                                onChange={formik.handleChange} />

                        </div>

                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary register-btn"
                            tabIndex={3} onClick={() => formik.handleSubmit()}>Đăng ký</button>
                    </div>
                    <NavLink tabIndex={4} className="forgot-password text-end" to={PagePath.LOGIN}>Bạn đã có tài khoản</NavLink>
                </div>
            </div>
        </div >

    )
}

export default Register