import React from 'react'
import Slider from 'react-slick'
import styled from '../styles/Banner.module.css'

import banner1 from '../asset/Banner1.png'
import banner2 from '../asset/Banner2.png'
import banner3 from '../asset/Banner3.png'

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img className={styled.banner1} src={banner1} alt="Logo" />
      </div>
      <div>
        <img className={styled.banner2} src={banner2} alt="Logo" />
      </div>
      <div>
        <img className={styled.banner3} src={banner3} alt="Logo" />
      </div>
    </Slider>
  )
}

export default Banner
