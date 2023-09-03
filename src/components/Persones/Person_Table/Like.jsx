import React, { Component } from "react";
import PropTypes from "prop-types";

class Like extends Component {
    state = {};
    render() {
        let classes = this.props.like
            ? "fa-solid fa-thumbs-up"
            : "fa-regular fa-thumbs-up";
        return <i onClick={this.props.onClick} class={classes}></i>;
    }
}

Like.propTypes = {
    like: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default Like;
