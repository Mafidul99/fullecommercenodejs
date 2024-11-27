

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';



const HomeBanner = () => {

    return (
        <>
            <div className="container mt-3">
                <div className="homeBannerSection">
                    <div className="homeSliderRow align-items-center">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={15}
                            navigation={true}
                            loop={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <div className="item">
                                <img src="https://cmsimages.shoppersstop.com/Lancome_Carousel_2_Web_d99f9644cc/Lancome_Carousel_2_Web_d99f9644cc.jpg" className="w-100" alt="slider1" />
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="item">
                            <img src="https://cmsimages.shoppersstop.com/Wedding_Ecom_Banner_Web_2544_X_740_Pxl_6d85c92d98/Wedding_Ecom_Banner_Web_2544_X_740_Pxl_6d85c92d98.jpg" className="w-100" alt="slider2" />
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="item">
                            <img src="https://cmsimages.shoppersstop.com/women_westernwear_main_banner_web_e6a67601f7/women_westernwear_main_banner_web_e6a67601f7.png" className="w-100" alt="slider3" />
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="item">
                            <img src="https://cmsimages.shoppersstop.com/women_westernwear_main_banner_web_e6a67601f7/women_westernwear_main_banner_web_e6a67601f7.png" className="w-100" alt="slider5" />
                        </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HomeBanner;