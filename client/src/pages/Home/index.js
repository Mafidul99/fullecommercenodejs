import HomeBanner from "../../components/HomeBanner";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner5 from "../../assets/images/banner5.jpg";
import Banner6 from "../../assets/images/banner6.jpg";
import Banner3 from "../../assets/images/banner2.webp";
import pro1 from "../../assets/images/products/pro_1.jpg";
import Button from '@mui/material/Button';
import { IoMailOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";



const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={Banner1} className="cursor w-100" />
                                </div>
                                <div className="banner mt-4">
                                    <img src={Banner3} className="cursor w-100" />
                                </div>
                                <div className="banner mt-4">
                                    <img src={Banner2} className="cursor w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info">
                                    <h3 className="mb-0 hd">Best Sellers</h3>
                                    <p className="textlight mb-0">Do not miss the current offers utily the end of march</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <FaArrowRight /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={10}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>



                            <div className="d-flex align-items-center mt-5">
                                <div className="info">
                                    <h3 className="mb-0 hd">New Products</h3>
                                    <p className="textlight mb-0">Do not miss the current offers utily the end of march</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <FaArrowRight /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                            <div className="d-flex mt-4 mb-2 bannerSec">
                                <div className="banner">
                                    <img src={Banner6} className="cursor w-100" />
                                </div>
                                <div className="banner">
                                    <img src={Banner5} className="cursor w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h4 className="text-white">Join our newsletter and get....</h4>
                            <p className="text-light">$20 discount for your first order</p>


                            <form>
                                <IoMailOutline/>
                                <input type="text" placeholder="Your Email Address.."/>
                                <Button>Subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            
        </>
    )

}

export default Home;