

import React from "react";
import Slider from "react-slick";



const HomeBanner =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
            <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://cdn.shopclues.com/images/banners/2024/Nov/21/Health_Sport_web_20Nov2024.jpg" className="w-100" alt="slider1"/>
                    </div>
                    <div className="item">
                        <img src="https://cdn.shopclues.com/images/banners/2024/Nov/07/television-web-hb-07Nov24.jpg" className="w-100" alt="slider2"/>
                    </div>
                    <div className="item">
                        <img src="https://cdn.shopclues.com/images/banners/2024/May/17/RefurbFeaturephone_Web_17thMay24.jpg" className="w-100" alt="slider3"/>
                    </div>
                    <div className="item">
                        <img src="https://cdn.shopclues.com/images/banners/2024/May/17/RefurbFeaturephone_Web_17thMay24.jpg" className="w-100" alt="slider4"/>
                    </div>
                    <div className="item">
                        <img src="https://cdn.shopclues.com/images/banners/2024/May/17/RefurbFeaturephone_Web_17thMay24.jpg" className="w-100" alt="slider5"/>
                    </div>
                </Slider>
            </div>
            </>
    )
}

export default HomeBanner;