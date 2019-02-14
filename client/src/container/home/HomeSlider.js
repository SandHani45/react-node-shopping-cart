import React from 'react';
import Images  from '../../theme/Images';
import Slider from 'react-slick';
import Button from '../../components/utiles/Button';

const HomeSlider= () => {
    let slides = [
        {
            img:Images.sliderOne,
            lineOne:'Finder',
            lineTwo:'Custom Shop',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:Images.sliderTwo,
            lineOne:'B-Stock',
            lineTwo:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        },
        {
            img:Images.sliderThree,
            lineOne:'',
            lineTwo:'',
            linkTitle:'',
            linkTo:''
        },
        
    ]

    const settings = {
        dots:false,
        inifinite: true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false
    }

    const generateSlides = () => (
         slides ? 
            slides.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image" 
                            style={{
                                background:`url(${item.img})`,
                                height:`${window.innerHeight}px`
                            }}
                    >
                        <div className="featured_action">
                            <div className="tag title"> {item.lineOne}</div>
                            <div className="tag low_title"> {item.lineTwo}</div>
                            <div>
                                <Button 
                                    type="default"
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyle={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
         :null
    )
  

  return (
    <div className="featured_container">
        <Slider {...settings}>
            {generateSlides()}
        </Slider>
    </div>
  )
}
export default HomeSlider;
