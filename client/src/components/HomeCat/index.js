import Cat1 from "../../assets/images/categorices/cat1.jpg";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#ffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#ffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#ffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#ffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4'
    ]);

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-3 hd">Featured Categorices</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={10}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center" style={{ background:item }}>
                                        <img src={Cat1} alt="Cat1"/>
                                        <h6>Red Apple</h6>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>
        </section>
    )
}
export default HomeCat;