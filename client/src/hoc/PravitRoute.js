import React, { Component } from 'react'
import {connect} from 'react-redux';
//action
import { authCheckAction } from '../actions/authAction';

// Metiral-UI
import CircularProgress from '@material-ui/core/CircularProgress';

export default function(ComposedClass,reload,adminRoute=null){

    class PraviteRoute extends Component {
        state = {
            loading : true
        }
        componentDidMount(){
            this.props.dispatch(authCheckAction()).then(res=>{
                let user = this.props.auth.user
                    if(!user.isAuth){
                        if(reload){
                            this.props.history.push('/login')
                        }
                    }else{
                        if(adminRoute && !user.isAuth){
                            this.props.history.push('/user/dashboard')
                        }
                        if(reload === false){
                            this.props.history.push('/user/dashboard')
                        }
                    }
                this.setState({
                    loading:false
                })
            });
            
        }
        render() {
            if(this.state.loading){
                return(
                <div className="main_loader">
                    <CircularProgress style={{color:"#2196F3"}} thickness={7}/> 
                </div>
                )
            }
          return (
            <div>
                <ComposedClass {...this.props} userData={this.props.auth}/>
            </div>
          )
        }
    }
    const mapStateToProps = state =>({
        auth:state.auth
    })
    return connect(mapStateToProps)(PraviteRoute)
}
