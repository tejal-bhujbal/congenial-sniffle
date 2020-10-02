import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Row, Col, Button} from 'react-bootstrap';

import {ReactTable, Popup, userService} from '../../common';
import {getAllUsers} from '../../redux/actions';

class UserDashboard extends Component {
    constructor(){
        super();
        this.state = this.getInitialState();
    }

    getInitialState = () => {
        return {
            thead: [
                'Name',
                'Employee Code',
                'Project',
                'Technology Stack'
            ],
            tbody: [],
            rowActions: [
                'Edit',
                'Delete'
            ],
            popup: {
                display: false,
                title: '',
                body: '',
                secondaryBtn: '',
                primaryBtn: '',
            }
        }
    }

    getUsers = async() => {
        await this.props.getAllUsers();
        let {isError, getAllUsersRes} = this.props.userData;
        if(isError === false && getAllUsersRes.status === 200){
            await this.setState({
                tbody: getAllUsersRes.users
            });
        }
    }

    tableActionHandler = (action) => {
        switch (action) {
            case 'Add':
                this.setState(prevState => {
                    let {popup} = prevState;
                    popup.display = true;
                    popup.title = 'Add User Form';
                    popup.body = {
                        isEdit: false
                    };
                    popup.primaryBtn = 'Submit';
                    return {
                        popup: popup
                    }
                });
                break;
            case 'Edit':
                this.setState(prevState => {
                    let {popup} = prevState;
                    popup.display = true;
                    popup.title = 'Edit User Form';
                    popup.body = {
                        isEdit: false
                    };
                    popup.primaryBtn = 'Update';
                    return {
                        popup: popup
                    }
                });
                break;
            case 'Delete':
                this.setState(prevState => {
                    let {popup} = prevState;
                    popup.display = true;
                    popup.title = 'Edit User Form';
                    popup.body = "Are you sure you want to delete?";
                    popup.secondaryBtn = 'Cancel';
                    popup.primaryBtn = 'Okay';                    
                    return {
                        popup: popup
                    }
                });                
                break;
            default:
                break;
        }
    }

    popupCloseHandler = (action) => {
        this.setState(prevState => {
            let {popup} = prevState;
            popup = {
                display: false,
                title: '',
                body: '',
                secondaryBtn: '',
                primaryBtn: '',
            };
            return {
                popup: popup
            }
        });
    }

    handleLogOut = () => {
        userService.logout();
    }

    render() {
        const {thead, tbody, rowActions, popup} = this.state;
        return (
            <div className="conatainer mt-5">
                {popup.display && <Popup display={popup.display} title={popup.title} body={popup.body} secondaryBtn={popup.secondaryBtn} primaryBtn={popup.primaryBtn} popupCloseHandler={this.popupCloseHandler} />}
                <Row className="mb-5">
                    <Col>
                        <Button className="btn primary float-left" onClick={this.handleLogOut}>Log Out</Button>
                    </Col>
                    <Col>
                        <Button className="btn primary float-right" onClick={() => this.tableActionHandler('Add')}>Add New User</Button>
                    </Col>
                </Row>
                <ReactTable thead={thead} tbody={tbody} rowActions={rowActions} actionHandler={this.tableActionHandler} />
            </div>
        );
    }

    async componentDidMount() {
        await this.getUsers();
    }
}

UserDashboard.propTypes = {
    getAllUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    userData: state.userReducer
});
const mapDispatchToProps = {
    getAllUsers
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserDashboard);
