import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { logOutAction } from '../../../actions/authAction';

class Header extends Component {

    state = {
        page:[
            {
                name:'Home',
                linkTo:'/',
                public: true
            },
            {
                name:'Guitars',
                linkTo:'/shop',
                public: true
            }
        ],
        user:[
            {
                name:'My Cart',
                linkTo:'/user/cart',
                public: false
            },
            {
                name:'My Account',
                linkTo:'/user/dashboard',
                public: false
            },
            {
                name:'Log in',
                linkTo:'/login',
                public: true
            },
            {
                name:'Log out',
                linkTo:'/user/logout',
                public: false
            },
        ]
    }


    logoutHandler = () => {
        this.props.dispatch(logOutAction())
                .then(response =>{
                    if(response.payload.success){
                        this.props.history.push('/')
                    }
                })
    }


    cartLink = (item,i) => {
        const user = this.props.auth.user;

        return (
            <div className="cart_link" key={i}>
                <span>{user.cart ? user.cart.length:0}</span>
                <Link to={item.linkTo}>
                    {item.name}
                </Link>
            </div>
        )
    }


    defaultLink = (item,i) => (
        item.name === 'Log out' ?
            <div className="log_out_link"
                key={i}
                onClick={()=> this.logoutHandler()}
            >
                {item.name}
            </div>

        :
        <Link to={item.linkTo} key={i}>
            {item.name}
        </Link>
    )


    showLinks = (type) =>{
        let list = [];

        if(this.props.auth.user){
            type.forEach((item)=>{
                if(!this.props.auth.user.isAuth){
                    if(item.public === true){
                        list.push(item)
                    }
                } else{
                    if(item.name !== 'Log in'){
                        list.push(item)
                    }
                }
            });
        }

        return list.map((item,i)=>{
            if(item.name !== 'My Cart'){
                return this.defaultLink(item,i)
            } else {
                return this.cartLink(item,i)
            }
            
        })
    }


    render() {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            WAVES
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            {this.showLinks(this.state.user)}
                        </div>
                        <div className="bottom">
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps =(state) =>({
    auth: state.auth

})

export default connect(mapStateToProps)(withRouter(Header));