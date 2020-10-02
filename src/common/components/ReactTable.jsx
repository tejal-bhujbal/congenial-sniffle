import React, {Component} from "react";
import PropTypes from "prop-types";
import {Table} from 'react-bootstrap';

class ReactTable extends Component{
    render(){
        const {thead, tbody, rowActions} = this.props;
        return (
            <Table striped bordered hover>
                <thead>
                    {
                        <tr>
                            {
                                thead && thead.length > 0 && thead.map((col, theadColIndex) => 
                                    <th key={theadColIndex}>
                                        {col}
                                    </th>
                                )
                            }
                            {
                                rowActions && rowActions.length > 0 && 
                                <th colSpan={rowActions.length}>Actions</th>
                            }
                        </tr>
                    }
                </thead>
                <tbody>
                    {
                        tbody && tbody.length > 0 && tbody.map((row, rowIndex) => 
                            <tr key={rowIndex}>
                                {
                                    Object.entries(row).map((col, rowColIndex) => 
                                        <td key={rowColIndex}>
                                            {col}
                                        </td>
                                    )
                                }
                                {
                                    rowActions && rowActions.length > 0 && rowActions.map((action, actionColIndex) => 
                                        <td className="clickable" onClick={(e) => this.props.actionHandler(action)} key={"Action"+actionColIndex}>
                                            {action}
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

ReactTable.propTypes = {
    thead: PropTypes.any.isRequired,
    tbody: PropTypes.any.isRequired,
    rowActions: PropTypes.any,
    actionHandler: PropTypes.func
};

export default ReactTable;