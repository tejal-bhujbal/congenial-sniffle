import React, { Component } from "react";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";

class UserForm extends Component {
    render() {
        const {formField, formError} = this.props;
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={formField.name} onChange={this.props.onChangeHandler} />
                    <Form.Text className="text-muted"> {formError.name} </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Employee code</Form.Label>
                    <Form.Control type="text" placeholder="Enter employee code" value={formField.empCode} onChange={this.props.onChangeHandler} />
                    <Form.Text className="text-muted"> {formError.empCode} </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Project</Form.Label>
                    <Form.Control type="text" placeholder="Enter project" value={formField.project} onChange={this.props.onChangeHandler} />
                    <Form.Text className="text-muted"> {formError.project} </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Technology stack</Form.Label>
                    <Form.Control type="text" placeholder="Enter technology stack" value={formField.techStack} onChange={this.props.onChangeHandler} />
                    <Form.Text className="text-muted"> {formError.techStack} </Form.Text>
                </Form.Group>
            </Form>
        );
    }
}

UserForm.propTypes = {
    formField: PropTypes.any.isRequired,
    formError: PropTypes.any.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
};

export default UserForm;