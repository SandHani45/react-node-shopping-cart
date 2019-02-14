import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
//validation components
import { update, generateData, isFormValid } from '../utiles/Forms/FormAction';
//compoenents
import Button from './../utiles/Button';
import FormField from './../utiles/Forms/FormField';
//action
import {registerUser} from '../../actions/authAction';
//MetiralUI
import Dialog from '@material-ui/core/Dialog';
 
 class Register extends Component {
   state= {
        formError : false,
        formSuccess:false,
        formdata:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                config:{
                name:'lastname_input',
                type:'text',
                placeholder:'Enter your lastname'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
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
            },
            confirmPassword:{
                element:'input',
                value:'',
                config:{
                name:'confirm_password_input',
                type:'password',
                placeholder:'Confirm your  password'
                },
                validation:{
                    required:true,
                    confirm:'password'
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({
//         errors: nextProps.errors
//       });
//     }
//   }
   updateForm = (element) =>{
    const newFormData = update(element,this.state.formdata,'register');
    this.setState({
        formError:false,
        formdata : newFormData
    })
  }

   //form submit
    submitForm = (event) => {
        event.preventDefault();
        const submitData = generateData(this.state.formdata,'register');
        const formIsValid = isFormValid(this.state.formdata,'register')
        if(formIsValid){
            this.props.registerUser(submitData,this.props.history);
            this.setState({
                formError:false,
                formSuccess:true
            })
        }else{
            this.setState({
                formError:true
            })
        }
    }

  render() {
    return (
      <div className="page_wrapper">
            <div className="conatiner">
                <div className="register_login_container">
                    <div className="left">
                        <form onSubmit={(event) =>this.submitForm(event)}>
                            <h2>Personal information</h2>
                            <div className="form_block_two">
                                <div className="block">
                                    <FormField
                                        id={'name'}
                                        formdata={this.state.formdata.name}
                                        change= {(event)=>this.updateForm(event)}
                                    />
                                </div>
                                <div className="block">
                                    <FormField
                                        id={'lastname'}
                                        formdata={this.state.formdata.lastname}
                                        change= {(event)=>this.updateForm(event)}
                                    />
                                </div>
                            </div>
                            <div>    
                                <FormField
                                    id={'email'}
                                    formdata={this.state.formdata.email}
                                    change= {(event)=>this.updateForm(event)}
                                />
                            </div>
                            <h2>Acccount information</h2>
                            <div className="form_block_two">
                                <div className="block">
                                    <FormField
                                        id={'password'}
                                        formdata={this.state.formdata.password}
                                        change= {(event)=>this.updateForm(event)}
                                    />
                                </div>
                                <div className="block">
                                    <FormField
                                        id={'confirmPassword'}
                                        formdata={this.state.formdata.confirmPassword}
                                        change= {(event)=>this.updateForm(event)}
                                    />
                                </div>
                            </div>
                            {this.state.formError ?
                                 <div className="error_label">
                                    Please check your data
                                </div> : null}
                            <button onClick={(event => this.submitForm(event))}>Register</button>
                        </form>
                    </div>
                </div>
                <Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>
                            Congratulations!!
                        </div>
                        <div>
                            You will be redireact to LOGIN in a couple secounds
                        </div>
                    </div>
                </Dialog>
            </div>
      </div>
    )
  }
}
const mapStateToPropes = state =>({
  auth:state.auth
})
export default connect(
  mapStateToPropes,
  {registerUser}
)(Register);