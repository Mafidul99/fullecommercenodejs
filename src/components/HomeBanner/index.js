

import React from "react";
import Slider from "react-slick";



const HomeBanner =()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
      };

    return(
            <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://cmsimages.shoppersstop.com/Lancome_Carousel_2_Web_d99f9644cc/Lancome_Carousel_2_Web_d99f9644cc.jpg" className="w-100" alt="slider1"/>
                    </div>
                    <div className="item">
                        <img src="https://cmsimages.shoppersstop.com/Wedding_Ecom_Banner_Web_2544_X_740_Pxl_6d85c92d98/Wedding_Ecom_Banner_Web_2544_X_740_Pxl_6d85c92d98.jpg" className="w-100" alt="slider2"/>
                    </div>
                    <div className="item">
                        <img src="https://cmsimages.shoppersstop.com/women_westernwear_main_banner_web_e6a67601f7/women_westernwear_main_banner_web_e6a67601f7.png" className="w-100" alt="slider3"/>
                    </div>
                    <div className="item">
                        <img src="https://cmsimages.shoppersstop.com/Lancome_Carousel_2_Web_d99f9644cc/Lancome_Carousel_2_Web_d99f9644cc.jpg" className="w-100" alt="slider4"/>
                    </div>
                    <div className="item">
                        <img src="https://cmsimages.shoppersstop.com/women_westernwear_main_banner_web_e6a67601f7/women_westernwear_main_banner_web_e6a67601f7.png" className="w-100" alt="slider5"/>
                    </div>
                </Slider>
            </div>
            </>
    )
}

export default HomeBanner;