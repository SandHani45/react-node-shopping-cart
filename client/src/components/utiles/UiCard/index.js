import React, { Component } from 'react'
import Images from '../../../theme/Images';
import Button from '../Button';

 class UiCard extends Component {
     
    renderCardImage(images){
        if(images.length>0){
            return images[0].url
        }else{
            return Images.defaultImage
        }
    }
    componentDidUpdate(){
        console.log(Images.defaultImage)
    }
  render() {
    const props = this.props;
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
            <div className="image"
                style={{
                    background:`url(${this.renderCardImage(props.images)}) no-repeat`
                }}>
            </div>
            <div className="action_container">
                <div className="tags">
                    <div className="brand"> {props.brand.name}</div>
                    <div className="name"> {props.name}</div>
                    <div className="name"> {props.price}</div>
                </div>
            </div>
            { 
                props.grid ?
                <div className="description">
                    djbnfjkleasfbjkalwfbajlsbflasbfjlasbljfa kdbfjlasbf abwsfjklasb ksbfjl
                </div> 
                :null 
            }
            <div className="actions">
                <div className="button_wrap">
                    <Button 
                        type="default"
                        altClass="card_link"
                        title ="View product"
                        linkTo={`/product_details/${props.id}`}
                        addStyle={{
                            margin:'10px 0 0 0'
                        }}
                    />
                </div>
                <div className="button_wrap">
                    <Button 
                        type="bag_link"
                        runAction={()=>{
                            console.log('add to cart')
                        }}
                    />
                </div>
            </div>
      </div>
    )
  }
}
export default UiCard;
