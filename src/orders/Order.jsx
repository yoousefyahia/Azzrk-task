import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './order.css';
import bottle1 from '../images/bottle1.png';
import bottle2 from '../images/boottle2.png';
import shoes1 from '../images/shoes1.png';
import shooes2 from '../images/shooes2.png';
import supplement1 from '../images/supplement1.png';
import supplement2 from '../images/supplement2.png';
import handbag1 from '../images/handbag1.png';
import handbag2 from '../images/handbag2.png';

export default function Order() {
    const slides = [
        {
            id: 1,
            mainImg: shoes1,
            smallImg: shooes2,
            title: "حذاء ركض ابيض",
            price: "59 ر.س",
            oldPrice: "70 ر.س"
        },
        {
            id: 2,
            mainImg: bottle1,
            smallImg: bottle2,
            title: "مطارة مياه رياضية",
            price: "59 ر.س",
            oldPrice: "70 ر.س"
        },
        {
            id: 3,
            mainImg: supplement1,
            smallImg: supplement2,
            title: "مكمل غذائي بروتين",
            price: "59 ر.س",
            oldPrice: "70 ر.س"
        },
        {
            id: 4,
            mainImg: handbag1,
            smallImg: handbag2,
            title: "حقيبة يد رياضية",
            price: "59 ر.س",
            oldPrice: "70 ر.س"
        }
    ];

    return (
        <section className="offers-section">
            <SectionHeader 
                title="العروض" 
                subtitle="تسوق ابرز المنتجات التي تناسبك" 
            />

            <div className="order-slider-container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="order-swiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {[...slides, ...slides].map((slide, index) => (
                        <SwiperSlide key={`${slide.id}-${index}`}>
                            {({ isActive }) => (
                                <div className={`slide-card ${isActive ? 'active-slide' : ''}`}>
                                    <div className="slide-images">
                                        <div className="main-image">
                                            <img src={slide.mainImg} alt={slide.title} />
                                        </div>
                                        <div className="small-image-box">
                                            <img src={slide.smallImg} alt="detail" />
                                        </div>
                                    </div>
                                    <div className="slide-info">
                                        <h3 className="slide-title">{slide.title}</h3>
                                        <div className="slide-price-row">
                                            {slide.oldPrice && <span className="slide-old-price">{slide.oldPrice}</span>}
                                            <span className="slide-price">{slide.price}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}