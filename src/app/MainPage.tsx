import './MainPage.scss'
import Header from '../containers/header/Header'
import Navbar from '../containers/navbar/Navbar'
import Home from '../pages/home/Home'
import Classify from '../pages/classify/Classify'
import Footer from '../containers/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { PagePath } from '../routes/Path'
import ItemDetail from '../pages/item_detail/ItemDetail'
import Cart from '../pages/cart/Cart'
import AllBrands from '../pages/all_brands/AllBrands'
import Gift from '../pages/gift/Gift'
import HotDeal from '../pages/hot_deal/HotDeal'
import NewItem from '../pages/new_item/NewItem'
import BestSellers from '../pages/best_sellers/BestSellers'
import { useState } from 'react'
import UploadItem from '../pages/upload_item/UploadItem'
import CustomerSupport from '../pages/support/CustomerSupport'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import EmptyCart from '../pages/cart/EmptyCart'
import ShowRoom from '../pages/showroom/ShowRoom'
import Payment from '../pages/payment/Payment'
import Profile from '../pages/profile/Profile'
import SearchInvoice from '../pages/search_invoice/SearchInvoice'

const MainPage = () => {

    const [contentLoading, setContentLoading] = useState<boolean>(true)
    const cart = useSelector((state: RootState) => state.cart)
    return (
        <div className='main-page-container'>
            <div className="main-page__header">
                <Header />
            </div>

            <div className="main-page__navbar">
                <Navbar />
            </div>

            <div className="main-page__content">
                <Routes>
                    {/* Home */}
                    <Route path={PagePath.HOME} element={<Home handleLoading={setContentLoading} />} ></Route>
                    {/* Classify item */}
                    <Route path={PagePath.ITEM} element={<Classify handleLoading={setContentLoading} />}></Route>
                    {/* Detail item */}
                    <Route path={`${PagePath.ITEM}/:id`} element={<ItemDetail handleLoading={setContentLoading} />}></Route>
                    {/* Showroom */}
                    <Route path={PagePath.SHOWROOM} element={<ShowRoom handleLoading={setContentLoading} />}></Route>
                    {/* Upload item */}
                    <Route path={PagePath.UPLOAD} element={<UploadItem handleLoading={setContentLoading} />} ></Route>
                    {/* Support for customer  page */}
                    <Route path={PagePath.CUSTOMER_SUPPORT} element={<CustomerSupport handleLoading={setContentLoading} />} ></Route>
                    {/* Profile */}
                    <Route path={PagePath.PROFILE} element={<Profile handleLoading={setContentLoading} />} ></Route>

                    {/* Navbar */}
                    <Route path={PagePath.HOT_DEAL} element={<HotDeal handleLoading={setContentLoading} />}></Route>
                    <Route path={PagePath.ALL_BRANDS} element={<AllBrands handleLoading={setContentLoading} />}></Route>
                    <Route path={PagePath.NEW_ITEM} element={<NewItem handleLoading={setContentLoading} />}></Route>
                    <Route path={PagePath.BEST_SELLERS} element={<BestSellers handleLoading={setContentLoading} />}></Route>
                    <Route path={PagePath.GIFT} element={<Gift handleLoading={setContentLoading} />}></Route>
                    <Route path={PagePath.SEARCH_INVOICE} element={<SearchInvoice handleLoading={setContentLoading} />}></Route>

                    {/* Cart */}
                    {cart.totalQuantity === 0 ? <Route path={PagePath.CART} element={<EmptyCart handleLoading={setContentLoading} />}></Route> :
                        <Route path={PagePath.CART} element={<Cart handleLoading={setContentLoading} />}></Route>}



                    <Route path='/*' element={<Home handleLoading={setContentLoading} />}></Route>
                </Routes>
            </div>

            {!contentLoading &&
                <div className="main-page__footer">
                    <Footer />
                </div>
            }
        </div >
    )
}

export default MainPage