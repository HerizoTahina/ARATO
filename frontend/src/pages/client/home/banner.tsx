import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay } from 'swiper/modules';

type Props = {}

function Banner({ }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='banner'>
      <Swiper
        modules={[Thumbs, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src='/images/banner_3.jpg' alt='image_2' className='banner__image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/banner_1.jpg' alt='image_2' className='banner__image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/banner_2.jpg' alt='image_2' className='banner__image' />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src='/images/banner_3.jpg' alt='image_2' className='banner__image' />
          </SwiperSlide>
        ... */}
      </Swiper>
    </div >
  )
}

export default Banner