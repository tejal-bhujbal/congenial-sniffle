import React, {Component} from "react";
import PropTypes from "prop-types";
import {Modal, Button} from "react-bootstrap";
import {UserFormContainer} from '../../pages';

class Popup extends Component {
    render(){
        const {title, body, secondaryBtn, primaryBtn, display} = this.props;
        return (
            <Modal show={display} className={display ? "showModal" : null} onHide={(e) => this.props.popupCloseHandler('Cancel')} >
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        (body && typeof body === 'object')
                            ?
                            <UserFormContainer /> 
                            :
                            body
                    }
                </Modal.Body>

                <Modal.Footer>
                    {secondaryBtn && <Button variant="secondary" onClick={(e) => this.props.popupCloseHandler('Cancel')}>{secondaryBtn}</Button>}
                    <Button variant="primary" onClick={(e) => this.props.popupCloseHandler('Submit')}>{primaryBtn}</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

Popup.propTypes = {
    title: PropTypes.string,
    body: PropTypes.any,
    secondaryBtn: PropTypes.string,
    primaryBtn: PropTypes.string,
    popupCloseHandler: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired
};

export default Popup;