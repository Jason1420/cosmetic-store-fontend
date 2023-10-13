import React, { useEffect, useState } from 'react'
import './ShowRoom.scss'
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

interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const ShowRoom: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
    return (
        <div className='showroom-container'>
            <div className="showroom-top">
                <div className="title">
                    Danh sách cửa hàng
                </div>
                <div className="search-bar">
                    <div className="location-icon">
                        <IoLocationOutline />
                    </div>
                    <input type="text " placeholder='Tìm kiếm theo địa chỉ hoặc tên cửa hàng' />
                    <div className="search-icon">
                        <GoSearch />
                    </div>
                </div>
            </div>
            <div className="showroom-bottom">
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
                <div className="showroom">
                    <div className="image">
                        <img src={showroom1} alt="" />
                    </div>
                    <div className="name">
                        TTTM Vạn Hạnh Mall
                    </div>
                    <div className="location">
                        Tầng 02 - CL2-03 - Vạn Hạnh Mall 11 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM
                    </div>
                    <div className="hotline">
                        Hotline: 0772998173
                    </div>
                    <div className="email">
                        Email: vanhanhmall.store@lixibox.com
                    </div>
                    <div className="open-day">
                        Thời gian hoạt động: Tất cả các ngày trong tuần
                    </div>
                    <div className="open-time">
                        Giờ mở cửa: 09:30 - 22:00 (Đã đóng cửa)
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowRoom