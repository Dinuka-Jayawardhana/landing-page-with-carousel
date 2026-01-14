
import data from './data.json'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css'



function Carousel() {
  console.log(data);
  return (
    <div className='carousel'>
      <div>
        <div className='carousel-content'>
          <span>Discover</span>
          <h1>Burger Heaven</h1>
          <hr />
          <p>Burger Heaven serves delicious, juicy burgers made with fresh ingredients. Come enjoy a tasty burger experience, whether dining in, taking away, or ordering online.</p>
          <a href="#" className='slider-btn'>Get Started</a>
        </div>
      </div>

      <Swiper className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={2}

      >
        {
          data.map(item => (
            <SwiperSlide style={{backgroundImage:`url(${item.url})`}} className='myswiper-slider'>
              <div className='carousel-image'>
                <h1>{item.title}</h1>
                <p>{item.caption}</p>
                <a href={`${item.url}`} target="_blank">explore</a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default Carousel
