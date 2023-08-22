import React, { Component } from "react";
class SelectInput extends Component {
    state = {};
    render() {
        return (
            <div
                className="form-group mb-2 mt-2 block-center"
                style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <label
                    style={{
                        fontFamily: "Georgia",
                        fontSize: "20px",
                        position: "relative",
                    }}
                    htmlFor={this.props.name}
                >
                    {this.props.name}
                </label>
                <select
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        margin : "normal"
                    }}
                    className="form-control mb-2 mt-1 border border-dark"
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                >
                    <option value="">Select City</option>
                    {this.props.Cities.map((city) => (
                        <option key={city._id} value={city._id}>
                            {city.city}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default SelectInput;
