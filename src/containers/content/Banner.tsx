import React from 'react';
import './Banner.scss';
import Carousel from 'react-bootstrap/Carousel';
import banner_1 from '../../assets/banner/banner1.jpg'
import banner_2 from '../../assets/banner/banner2.png'
import banner_3 from '../../assets/banner/banner3.png'
import banner_4 from '../../assets/banner/banner4.webp'
import banner_5 from '../../assets/banner/banner5.webp'
const Banner = () => {
    return (
        <div className="banner-container">
            <Carousel interval={5000} data-bs-theme="dark" variant="dark"  >
                <Carousel.Item>
                    <a href="/#" >
                        <img className='banner-item' src={banner_4} alt="" />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/#" >
                        <img className='banner-item' src={banner_5} alt="" />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/#" >
                        <img className='banner-item' src={banner_1} alt="" />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/#" >
                        <img className='banner-item' src={banner_2} alt="" />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="/#" >
                        <img className='banner-item' src={banner_3} alt="" />
                    </a>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export default Banner;
