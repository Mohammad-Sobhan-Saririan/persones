import React, { Component } from "react";
import { getCity } from "../../../services/FakePersonCity";
import PropTypes from "prop-types";
class ListGroup extends Component {
    state = {
        city: getCity(),
    };
    render() {
        return (
            <ul className="list-group">
                <li
                    className={
                        this.props.currentCity === "AllCity"
                            ? "list-group-item active border-3 border-danger bg-danger"
                            : "list-group-item bg-dark text-white"
                    }
                    onClick={() => this.props.onChangeCity("AllCity")}
                >
                    All City
                </li>
                {this.state.city.map((c) => (
                    <li
                        key={c.id}
                        className={
                            this.props.currentCity === c.city
                                ? "list-group-item active  border-3 border-danger bg-danger"
                                : "list-group-item bg-dark text-white"
                        }
                        onClick={() => this.props.onChangeCity(c.city)}
                    >
                        {c.city}
                    </li>
                ))}
            </ul>
        );
    }
}

ListGroup.propTypes = {
    currentCity: PropTypes.string.isRequired,
    onChangeCity: PropTypes.func.isRequired,
};

export default ListGroup;
