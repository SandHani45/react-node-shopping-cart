import React, { Component } from 'react'
//redux
import {connect} from 'react-redux';
//actions
import {woodAction,brandAction} from '../../actions/productAction';
//components
import CollapseCheckbox from '../../components/utiles/CollapseCheckbox';
import PageTop from './../../components/utiles/PageTop';
import {frets} from '../../theme/FixedCategories';

class Shop extends Component {

    componentDidMount(){
        this.props.dispatch(woodAction());
        this.props.dispatch(brandAction());
    }

    handleFilter = (filters,category) =>{
        console.log(filters)
    }
    
    render() {
        const products = this.props.products;
        return (
        <div>
            <PageTop 
                title="Browse Products"
            />
            <div className="container">
                <div className="shop_wrapper">
                    <div className="left">
                        <CollapseCheckbox 
                            initState={true}
                            title ="Brands"
                            list={products.brands}
                            handleFilter={(filters)=>this.handleFilter(filters,'brand')}
                        />
                        <CollapseCheckbox 
                            initState={false}
                            title ="Frets"
                            list={frets}
                            handleFilter={(filters)=>this.handleFilter(filters,'frets')}
                        />
                        <CollapseCheckbox 
                            initState={false}
                            title ="Woods"
                            list={products.woods}
                            handleFilter={(filters)=>this.handleFilter(filters,'woods')}
                        />
                    </div>
                    <div className="right">
                        edf
                    </div>
                </div>
            </div>
        </div>
        )
    }
    }
const mapStateToPropes = (state) =>({
    products:state.products
})
export default connect(mapStateToPropes) (Shop);
