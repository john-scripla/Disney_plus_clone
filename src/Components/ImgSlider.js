import React from 'react'
import Slider from 'react-slick'
import styled from  'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const ImgSlider = () => {

    let settings  = {
    
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow:1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
          <Wrap>
              <img src="Disney_Clone_challenge/images/slider-badging.jpg"/>
          </Wrap>
          <Wrap>
              <img src="Disney_Clone_challenge/images/slider-badag.jpg"/>
          </Wrap>
        </Carousel>
    )
}

export default ImgSlider



const Carousel = styled(Slider)`
margin-top: 20px;

ul li button {
    &:before{
        font-size:10px;
        color: white;
    }
}
li.slick-active button::before {
    color:white;
}
.slick-list {
    overflow: visible;
}

button {
    z-index:1;
}


`
const Wrap = styled.div`
cursor: pointer;
img {
    border: 4px solid transparent;
    border-radius: 4px;
    width:100%;
    height: 100%;
    box-shadow: 4px 4px 4px 4px #888888;
    transition: 300ms;

    &:hover {
        border:4px solid rgba(249, 249,249. 0.8);
    }



}
`