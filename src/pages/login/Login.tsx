import { useState } from 'react'
import Logo from '../../assets/logo/logoCustom-removebg-preview.png'
import './Login.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { isLogged, refreshed } from '../../store/reducers/authReducer';
import { RootState } from '../../store/store';
import jwtDecode from 'jwt-decode';
import { URL } from '../../routes/Url';
import { PagePath } from '../../routes/Path';
import { AuthenticateCode } from '../../constant/Constant';

const Login = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    // logic for login
    const [username, setUsername] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [loginErrorCode, setLoginErrorCode] = useState<boolean>(false) // 0:no error, bad credential
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth)

    const handleLogin = async () => {
        setPassword("")
        try {
            const loginUrl = URL.LOGIN
            const result = await axios.post(loginUrl, {
                username: username,
                password: password
            }, {
                withCredentials: true
            });
            setLoginErrorCode(false)
            navigate(PagePath.HOME)
            dispatch(isLogged(result.data.data))
        } catch (error: any) {
            if (error.response.data.message === AuthenticateCode.BAD_CREDENTIALS) {
                setLoginErrorCode(true)
            }
        }
    }
    // refresh token function
    const axiosJWT = axios.create();

    const refreshToken = async () => {
        try {
            const res = await axios.post(URL.REFRESH_TOKEN, null, {
                withCredentials: true
            })
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
    // custom axios instance to refresh token when access token expired
    axiosJWT.interceptors.request.use(async (config) => {
        let date = new Date();
        const decodedToken: any = jwtDecode(user.accessToken);
        if (decodedToken.exp <= date.getTime() / 1000) {
            const data = await refreshToken()
            const refreshUser = { ...user, accessToken: data.data.accessToken }
            dispatch(refreshed(refreshUser))
            config.headers['Authorization'] = `Bearer ${refreshUser.accessToken}`;
        }
        return config;
    },
        (error) => {
            return Promise.reject(error);
        });
    return (
        <div className="login-background" >
            <div className="login-container">
                <div className="login-logo">
                    {/* <img src={Logo} alt="logo-login" /> */}
                </div>
                <div className="login-box">
                    <div className="login-title">Đăng nhập</div>
                    <div className="login-subtitle">Access our dashboard</div>
                    <div className="login-input">
                        <label >Tài khoản</label>
                        {loginErrorCode && <p className='login-error-response'>*Sai tài khoản hoặc mật khẩu</p>}
                        <input type='text' tabIndex={1} className='form-control' placeholder='Nhập tài khoản'
                            value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="login-input ">
                        <div className="label-form">
                            <label>Mật khẩu</label>

                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Nhập mật khẩu'
                                tabIndex={2} value={password} onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        handleLogin();
                                    }

                                }}
                            />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                onClick={() => handleShowPassword()}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary login-btn"
                            tabIndex={3} onClick={() => handleLogin()}>Đăng nhập</button>
                    </div>
                    <NavLink tabIndex={4} className="forgot-password text-end" to={PagePath.REGISTER}>Đăng ký nếu bạn chưa có tài khoản</NavLink>
                </div>
            </div>
        </div >

    )
}

export default Login