import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../Persones/Navbar/SearchBar";
import PropTypes from "prop-types";
class NavBar extends Component {
    state = {
        persones: this.props.persones,
    };

    render() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark "
                style={{ position: "sticky", top: "0px", zIndex: "1" }}
            >
                <div className="container-fluid mx-1">
                    <Link className="navbar-brand" to="/">
                        Shop
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    ></div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    persones: PropTypes.array.isRequired,
};
export default NavBar;
