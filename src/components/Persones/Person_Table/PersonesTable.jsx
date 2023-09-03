import React, { Component } from "react";
import Like from "./Like";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import PropTypes from "prop-types";

class PersonesTable extends Component {
    state = {};
    render() {
        const { list, onDelete, onLike, onSort, onUpdate } = this.props;
        return (
            <table className="table table-striped table-dark table-hover">
                <TableHead onSort={onSort}></TableHead>
                <TableBody
                    list={list}
                    onDelete={onDelete}
                    onLike={onLike}
                    onUpdate={onUpdate}
                ></TableBody>
            </table>
        );
    }
}

PersonesTable.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default PersonesTable;
