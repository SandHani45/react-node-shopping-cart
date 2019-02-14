import React, { Component } from 'react'

import { withRouter} from 'react-router-dom';
//validation components
import { update, generateData, isFormValid } from '../utiles/Forms/FormAction';
//compoenents
import Button from './../utiles/Button';
import FormField from './../utiles/Forms/FormField';
//redux
import { connect } from 'react-redux';
//Actions
import { loginUser } from './../../actions/authAction';

class Login extends Component  {
  state = {
    formError : false,
    formSuccess:'',
    formdata:{
        email:{
            element:'input',
            value:'',
            config:{
                name:'email_input',
                type:'email',
                placeholder:'Enter your email'
            },
            validation:{
                required:true,
                email:true
            },
            valid:false,
            touched:false,
            validationMessage:''
        },
        password:{
            element:'input',
            value:'',
            config:{
            name:'password_input',
            type:'password',
            placeholder:'Enter your password'
            },
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            validationMessage:''
        }
    }
  }


    //get error props
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/user/dashboard");
    }
    if (nextProps.errors) {
        this.setState({
            formError: true
        });
    }
    }

  updateForm = (element) =>{
    const newFormData = update(element,this.state.formdata,'login');
    this.setState({
        formError:false,
        formdata : newFormData
    })
  }

  submitForm = (event) =>{
    event.preventDefault();
    const submitData = generateData(this.state.formdata,'login');
    const formIsValid = isFormValid(this.state.formdata,'login')
    if(formIsValid){
        this.props.loginUser(submitData);
    }else{
        this.setState({
            formError:true
        })
    }
  }

  render(){
    return (
      <div className="page_container">
          <div className="container">
            <div className="register_login_container">
              <div className="left">
                <h1>New Customers</h1>
                <p>Seasonal affective disorder (SAD) is most common in the winter, though the exact
                  cause is so far unknown. Scientists have investigated its relation to serotonin,
                  sunlight, and even the sufferer's specific personality traits to find the answer.
                  en.wikipedia.org/wiki/S…
                </p>
                  <Button 
                    type="default"
                    linkTo="/register" 
                    title="Create an account"
                    addStyle={{
                      margin:'10px 0 0 0'
                    }}
                    />
              </div>
              <div className="right">
                    <h2>Register Customers</h2>
                    <p>If you have account please login</p>
                    <div className="signin_wrapper">
                        <form onSubmit={(event)=>this.submitForm(event)} className="">
                            <FormField
                               id={'email'}
                               formdata={this.state.formdata.email}
                               change= {(event)=>this.updateForm(event)}
                            />
                            <FormField
                               id={'password'}
                               formdata={this.state.formdata.password}
                               change= {(event)=>this.updateForm(event)}
                            />
                            {this.state.formError ?
                                 <div className="error_label">
                                    Please check your data
                                </div> : null}
                                <button onClick={(event => this.submitForm(event))}>Login</button>
                        </form>
                    </div>
              </div>
            </div>
          </div>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(
    mapStateToProps,
    { loginUser }
)(withRouter(Login));