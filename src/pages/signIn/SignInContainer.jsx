import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SignIn from './SignIn.jsx';
import {userSignIn} from '../../redux/actions';

class SignInContainer extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => {
        return ({
            formField: {
                email: '',
                password: ''
            },
            formError: {
                email: '',
                password: ''
            },
            disableSubmitAction: true
        });
    }

    onChangeHandler = async (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        await this.setState(prevState => {
            let {formField, formError, disableSubmitAction} = prevState;
            switch (name) {
                case 'email':
                    formError[name] = '';
                    if(value){
                       if(!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(value)){
                            formError[name] = 'Please enter valid email addrress';
                        }
                    }else{
                        formError[name] = 'Please enter email addrress';
                    }
                    break;
                case 'password':
                    if(value){
                        formError[name] = '';
                    }else{
                        formError[name] = 'Please enter password';
                    }
                    break;
                default:
                    break;
            }

            if(Object.values(formError).find(ele => ele !== '')){
                disableSubmitAction = true;
            }else{
                disableSubmitAction = false;
            }

            formField[name] = value;

            return {
                formField: formField,
                formError: formError,
                disableSubmitAction: disableSubmitAction
            }
        })
        
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        await this.props.userSignIn(this.state.formField);
        let {isError, userSignInRes} = this.props.signInData;
        if(isError === false && userSignInRes.status === 200){
            localStorage.setItem('user', JSON.stringify(userSignInRes.userDetails));
            this.props.history.push('/');
        }
    }

    render() {
console.log("inside sign in container");        
         const {formField, formError} = this.state;
        return (
            <SignIn formField={formField} formError={formError} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler} />
        );
    }
}

SignInContainer.propTypes = {
    userSignIn: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    signInData: state.userReducer
});
const mapDispatchToProps = {
    userSignIn
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);