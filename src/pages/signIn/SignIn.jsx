import React, { Component } from "react";
import PropTypes from "prop-types";
import {Form, Button} from "react-bootstrap";

class SignIn extends Component {
    render() {
        const {formField, formError} = this.props;
        return (
            <div className="container mt-5 col-lg-6 col-md-6 col-sm-12">
                <Form>
                    <Form.Label className="mb-5">Sign In Form</Form.Label>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={formField.email} onChange={this.props.onChangeHandler} isInvalid={formError.email ? true : false} />
                        <Form.Text className="error"> {formError.email} </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter password" value={formField.password} onChange={this.props.onChangeHandler} isInvalid={formError.password ? true : false} maxLength="8" />
                        <Form.Text className="error"> {formError.password} </Form.Text>
                    </Form.Group>

                    <Button className="btn primary float-right" type="button" onClick={this.props.onSubmitHandler}> Sign In </Button>
                </Form>            
            </div>
        );
    }
}

SignIn.propTypes = {
    formField: PropTypes.any.isRequired,
    formError: PropTypes.any.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired
};

export default SignIn;