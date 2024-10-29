import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import gamming from "../../img/gamming.png";
import Weather from "../../img/weather.png";
import Elearning from "../../img/elearning.png";
import Bookstore from "../../img/bookstore.png";
import Cowork from "../../img/cowork.png";
import unstop from "../../img/blogs.png";

const Portfolio = () => {
    const projects = [
        { src: unstop, link: 'https://unstop-blog-app.vercel.app/', text: 'Click to see my project' },
        { src: gamming, link: 'https://gammingcart.vercel.app/', text: 'Click to see my project' },
        { src: Weather, link: 'https://ajaymeru-weather-app.netlify.app/', text: 'Click to see my project' },
        { src: Elearning, link: 'https://frabjous-bienenstitch-9c1be5.netlify.app/', text: 'Click to see my project' },
        { src: Bookstore, link: 'https://boisterous-tulumba-bb607c.netlify.app/', text: 'Click to see my project' },
        { src: Cowork, link: 'https://jay-co-working.netlify.app/', text: 'Click to see my project' },
    ];

    console.log("Projects:", projects);

    return (
        <div data-aos="fade-up">

            <div className="portfolio" id="portfolio" >
                <span>Recent Projects</span>
                <span>Portfolio</span>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.src} alt={`Slide ${index + 1}`} />
                            <div className="slide-text">{project.text}</div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>);
};

export default Portfolio;
