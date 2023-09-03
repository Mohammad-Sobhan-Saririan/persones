import React, { Component } from "react";
import "../css/Persones.css";
import "../css/PersonesNavbar.css";
import PropTypes from "prop-types";

class SearchBar extends Component {
    state = {};
    render() {
        return (
            <form className="d-flex" role="search">
                <input
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className="form-control me-2  text-white border border-danger placeholder-white bg-dark"
                    id="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                ></input>
                <button className="btn btn-outline-danger" type="submit">
                    <i
                        style={{ width: "2vi" }}
                        class="fa-solid fa-magnifying-glass"
                    ></i>
                </button>
            </form>
        );
    }
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default SearchBar;
