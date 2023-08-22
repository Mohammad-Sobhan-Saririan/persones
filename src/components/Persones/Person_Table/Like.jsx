import React, { Component } from "react";
class Like extends Component {
    state = {};
    render() {
        let classes = this.props.like ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up";
        return <i onClick={this.props.onClick} class={classes}></i>;
    }
}

export default Like;
{/* <i class="fa-solid fa-thumbs-up"></i>
<i class="fa-regular fa-thumbs-up"></i> */}