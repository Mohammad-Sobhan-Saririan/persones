import { Alert } from "bootstrap";
import React, { Component } from "react";
import "./login.css";
const Input = ({ name, label, value, onChange, error }) => {
    const alert = document.querySelector(".alert");
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
                    color: "white",
                }}
                className="form-label mb-2 mt-1
            "
                htmlFor={name}
            >
                {label}
            </label>
            <input
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                }}
                align="center"
                value={value}
                onChange={onChange}
                type="text"
                className="form-control border border-dark"
                id={name}
                name={name}
                placeholder={label}
                margin="normal"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
