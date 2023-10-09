import React, { useEffect, useState } from 'react'
import './ShowRoom.scss'
import { ItemDisplay } from '../../types/ItemDisplay'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
import { URL } from '../../routes/Url'
import Pagination from '../../components/Pagination/Pagination'
import { Constant } from '../../constant/Constant'



const ShowRoom = () => {

    return (
        <div className='showroom-container'>
            <div className="showroom-top">
                <div className="title">
                    Danh sách cửa hàng
                </div>
                <div className="search-bar">

                </div>
            </div>
            <div className="showroom-bottom">

            </div>
        </div>
    )
}

export default ShowRoom