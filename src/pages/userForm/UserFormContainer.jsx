import React, { Component } from "react";
import UserForm from './UserForm.jsx';

class UserFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            formField: {
                name: '',
                empCode: '',
                project: '',
                techStack: ''
            },
            formError: {
                name: '',
                empCode: '',
                project: '',
                techStack: ''
            }
        }
    }

    onChangeHandler = (e) => {
        e.preventDefault();
    }

    render() {
        const {formField, formError} = this.state;
        return (
            <UserForm
                formField={formField}
                formError={formError}
                onChangeHandler={this.onChangeHandler}
            />
        );
    }
}

export default UserFormContainer;