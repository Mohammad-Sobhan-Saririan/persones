import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../Persones/Navbar/SearchBar";
class NavBar extends Component {
    state = {
        persones: this.props.persones,
    };

    render() {
        return (
            // <nav className="navbar navbar-light bg-light">
            //     <a className="navbar-brand" href="#">
            //         Liked Person Number : {" "}
            //         <span className="badge bg-danger">
            //             {this.props.persones.filter((p) => p.like === true).length}
            //         </span>
            //     </a>
            // </nav>

            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
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
                    >
                        {/* <div className="navbar-nav">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/Persones"
                            >
                                Persones
                            </Link>
                        </div> */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
