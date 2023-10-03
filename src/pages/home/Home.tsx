import React from 'react'
import Banner from '../../containers/content/Banner'
import ListItem from '../../containers/content/ListItem'
import Footer from '../../containers/footer/Footer'
import './Home.scss'
const home = () => {
    return (
        <div className='home-page'>
            <div className="home-page__banner">
                <Banner />
            </div>
            <div className="home-page__list-item">
                <ListItem />
            </div>

        </div>
    )
}

export default home