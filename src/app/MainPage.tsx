import React from 'react'
import './MainPage.scss'
import Header from '../containers/header/Header'
import Navbar from '../containers/navbar/Navbar'
import Banner from '../containers/content/Banner'
import ListItem from '../containers/content/ListItem'
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
            <div className="main-page__banner">
                <Banner />
            </div>
            <div className="main-page__list-item">
                <ListItem />
            </div>
            <div className="main-page__footer">
                <Footer />
            </div>
        </div>
    )
}

export default MainPage