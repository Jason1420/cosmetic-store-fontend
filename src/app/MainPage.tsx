import './MainPage.scss'
import Header from '../containers/header/Header'
import Navbar from '../containers/navbar/Navbar'
import Home from '../pages/home/Home'
import Classify from '../pages/classify/Classify'
import CustomScrollbars from '../components/CustomScrollbars/CustomScrollbars'
import Footer from '../containers/footer/Footer'
import { BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom'
import { PagePath } from '../routes/Path'
import UploadItem from '../pages/upload_item/UploadItem'
import ItemDetail from '../pages/item_detail/ItemDetail'

const MainPage = () => {

    return (
        <div className='main-page-container'>
            <div className="main-page__header">
                <Header />
            </div>
            <div className="main-page__navbar">
                <Navbar />
            </div>
            <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <div className="main-page__content">
                    <Routes>
                        <Route path={PagePath.HOME} element={<Home />} ></Route>
                        <Route path={PagePath.ITEM} element={<Classify />}></Route>
                        <Route path={`${PagePath.ITEM}/:id`} element={<ItemDetail />}></Route>
                    </Routes>
                </div>
                {/* <div className="main-page__footer">
                    <Footer />
                </div> */}
            </CustomScrollbars >
        </div >
    )
}

export default MainPage