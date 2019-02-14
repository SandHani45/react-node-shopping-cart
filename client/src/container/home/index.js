import React,{Component} from 'react'
import HomeSlider from './HomeSlider';
import HomePromotion from './HomePromotion';
import { connect } from 'react-redux';
//action
import { getProductByArrival,getProductBySells } from '../../actions/productAction';
//card
import UiCardBlock from '../../components/utiles/UiCardBlock';

class Home extends Component  {

  componentDidMount(){
    this.props.dispatch(getProductBySells());
    this.props.dispatch(getProductByArrival());
  }

  render(){
    return (
      <div>
        {/* top slider */}
          <HomeSlider />
            {/* seling card */}
            <UiCardBlock 
                list={this.props.products.bySell}
                title="Best Selling guiters"
            />
        {/* middle Promotion section   */}
          <HomePromotion />
          <UiCardBlock 
                list={this.props.products.byArrival}
                title="New arrivals"
            /> 
      </div>
    )
  }
  
}

const mapStateToProps =state =>({
    auth:state.auth,
    products:state.products

})
export default connect(mapStateToProps) (Home);