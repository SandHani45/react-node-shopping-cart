import React from 'react'
import Images from '../../theme/Images';
import Button from '../../components/utiles/Button';

const HomePromotion =  (props) => {
  
  let promotion = {
    img:Images.sliderTwo,
    lineOne:'Up to 40% off',
    lineTwo:'in secound hand guiters',
    linkTitle:'Shop now',
    linkTo:'/shop'
  }

  const renderPromotion = () => (
    promotion ?
        <div className="home_promotion_img" 
            style={{
                background:`url(${promotion.img})`
            }}
        >
           <div className="tag title"> {promotion.lineOne}</div>
            <div className="tag low_title"> {promotion.lineTwo}</div>
            <div>
                <Button 
                    type="default"
                    title={promotion.linkTitle}
                    linkTo={promotion.linkTo}
                    addStyle={{
                        margin:'10px 0 0 0'
                    }}
                />
            </div>
        </div>    
    :null
  )

  return (
    <div className="home_promotion">
        {renderPromotion()}
    </div>
  )
}
export default HomePromotion;