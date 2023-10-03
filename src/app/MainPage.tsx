import React from 'react'
import './MainPage.scss'
import Header from '../containers/header/Header'
import Navbar from '../containers/navbar/Navbar'
import Home from '../pages/home/Home'
import Classify from '../pages/classify/Classify'
import CustomScrollbars from '../components/CustomScrollbars/CustomScrollbars'
import Footer from '../containers/footer/Footer'

const MainPage = () => {
    return (
        <div className='main-page-container'>
            <div className="main-page__header">
                <Header />
            </div>
            <div className="main-page__navbar">
                <Navbar />
            </div>
            <CustomScrollbars style={{ height: "100vh  ", width: "100%" }}>
                <div className="main-page__content">
                    <Classify />
                    {/* <Home /> */}

                </div>
                <div className="main-page__footer">
                    <Footer />
                </div>
            </CustomScrollbars>
        </div>
    )
}

export default MainPage