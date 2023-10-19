import React, { useEffect, useState } from 'react'
import './EmptyCart.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { TfiDropbox } from "react-icons/tfi"
import { useNavigate } from 'react-router-dom'
import { PagePath } from '../../routes/Path'
interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const EmptyCart: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const cart = useSelector((state: RootState) => state.cart)
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(PagePath.HOME)
    }
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
    return (

        <div className='empty-cart-container'>
            <div className="cart-left__title">
                <div className="title">
                    Giỏ Hàng Của Bạn
                </div>
                <div className="quantity">
                    {`(${cart.totalQuantity} sản phẩm)`}
                </div>
            </div>
            <div className="content">
                <div className="image">
                    <TfiDropbox />
                </div>
                <div className="text">
                    Giỏ hàng của bạn hiện đang trống
                </div>
                <div className="des">
                    Hãy quay lại và chọn cho mình sản phẩm yêu thích bạn nhé
                </div>
                <button onClick={() => handleOnClick()}>Tiếp tục mua sắm</button>
            </div>

        </div>
    )
}

export default EmptyCart