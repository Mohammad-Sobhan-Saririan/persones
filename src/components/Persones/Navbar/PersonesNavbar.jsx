import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../css/PersonesNavbar.css";
class PersonesNavBar extends Component {
    state = {};
    render() {
        return (
            //    implement navbar for search

            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" aria-disabled="true">
                        Liked Person Number :{" "}
                        <span className="badge bg-danger">
                            {
                                this.props.persones.filter(
                                    (p) => p.like === true
                                ).length
                            }
                        </span>
                    </a>
                </div>
                {/* search bar */}
                <SearchBar
                    value={this.props.value}
                    onChange={this.props.onChange}
                ></SearchBar>
            </nav>
        );
    }
}

export default PersonesNavBar;
