import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserLogin, refreshed } from "./reducers/authReducer";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { URL } from "../routes/Url";


export const AxiosInstance = (dispatch: Dispatch<AnyAction>, user: UserLogin) => {
    const newInstance = axios.create();

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

    newInstance.interceptors.request.use(async (config) => {
        let date = new Date();
        const decodedToken: any = jwtDecode(user.accessToken);
        if (decodedToken.exp <= date.getTime() / 1000) {
            const data = await refreshToken()
            const refreshUser: UserLogin = {
                ...user,
                accessToken: data.data.accessToken
            }
            dispatch(refreshed(refreshUser))
            config.headers['Authorization'] = `Bearer ${refreshUser.accessToken}`;
        }
        return config;
    },
        (error) => {
            return Promise.reject(error);
        });

    return newInstance;
}