import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgOne,bannerImgTwo,bannerImgThree,bannerImgFour,bannerImgFive } from '../../../assets/assets';

function Banner() {

const [dotActive, setDotactive] = useState(0)

var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
        setDotactive(next)
    },
    appendDots: (dots) => (
        <div
         style={{
           position: "absolute",
           top: '70%',
           left: '50%',
           transform: 'translate(-50%)',
           width: '210px',
        }}
        >
         <ul style={{
             width: '100%',
             display: 'flex',
             alignItems: 'center',
             justifyContent: "space-between",
         }}>
        {''}{dots}{''}</ul>   
        </div>
    ),
    customPaging: (i) => (
        <div
        style={
           i === dotActive ? 
           {
            width: '35px',
            height: '5px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: "white",
            background: '#131921',
            padding: '8px 0',
            cursor: 'pointer',
            border: '1px solid #f3a847',
           }
           : 
           {
            width: '35px',
            height: '5px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: "white",
            background: 'gray',
            padding: '8px 0',
            cursor: 'pointer',
            border: '1px solid white',
           }
        }
        >
         {''}
        </div>
    ),
    
};

  return (
   <div className='w-full'>
     <div className='w-full h-full relative'>
    <Slider {...settings}>
       <div>
        <img src={bannerImgOne} alt="" />
       </div>
       <div>
        <img src={bannerImgTwo} alt="" />
       </div>
       <div>
        <img src={bannerImgThree} alt="" />
       </div>
       <div>
        <img src={bannerImgFour} alt="" />
       </div>
       <div>
        <img src={bannerImgFive} alt="" />
       </div>
     </Slider>
    </div>
   </div>
  )
}

export default Banner