import './MainPage.scss'
import Header from '../containers/header/Header'
import Navbar from '../containers/navbar/Navbar'
import Home from '../pages/home/Home'
import Classify from '../pages/classify/Classify'
import CustomScrollbars from '../components/CustomScrollbars/CustomScrollbars'
import Footer from '../containers/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { PagePath } from '../routes/Path'
import ItemDetail from '../pages/item_detail/ItemDetail'
import Cart from '../pages/cart/Cart'
import AllBrands from '../pages/all_brands/AllBrands'


const MainPage = () => {

    return (
        <div className='main-page-container'>
            <div className="main-page__header">
                <Header />
            </div>
            <div className="main-page__navbar">
                <Navbar />
            </div>
            {/* <CustomScrollbars style={{ height: "90vh" }}> */}
            <div className="main-page__content">
                <Routes>
                    <Route path={PagePath.HOME} element={<Home />} ></Route>
                    <Route path={PagePath.ITEM} element={<Classify />}></Route>
                    <Route path={PagePath.ALL_BRANDS} element={<AllBrands />}></Route>
                    <Route path={`${PagePath.ITEM}/:id`} element={<ItemDetail />}></Route>
                    <Route path={PagePath.CART} element={<Cart />}></Route>
                    <Route path='/*' element={<Home />}></Route>
                </Routes>
            </div>
            {/* </CustomScrollbars > */}
            <div className="main-page__footer">
                <Footer />
            </div>
        </div >
    )
}

export default MainPage