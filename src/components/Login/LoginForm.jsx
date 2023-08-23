import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";
import Form from "./Form";
import { getCity } from "../../services/FakePersonCity";
import SelectInput from "./SelectInput";
import { savePersone } from "../../services/FakePersoneServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Persones from "../Persones/Persones";
class LoginForm extends Form {
    state = {
        Cities: getCity(),
        account: {
            Name: "",
            Lastname: "",
            City: "",
            Email: "",
            Mobilephone: "",
        },
        errors: {},
    };
    schema = {
        Name: Joi.string().required().label("Name"),
        Lastname: Joi.string().required().label("Lastname"),
        City: Joi.string().required().label("City"),
        Email: Joi.string().email().required().label("Email"),
        Mobilephone: Joi.string()
            .regex(/^(\+98|0)?9\d{9}/)
            .required()
            .label("Mobilephone"),
    };

    doSubmit = () => {
        // connect to server
        savePersone(this.state.account);
        console.log("Submitted");
        console.log(this.state.account);
        this.props.navigate("/Persones", { replace: true });
    };
    render() {
        return (
            <div>
                <h1
                    style={{
                        color: "blue",
                        fontFamily: "cursive",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        marginBottom: "40px",
                    }}
                    font-family="Georgia"
                >
                    Login
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="Name"
                        label="Name"
                        value={this.state.account.Name}
                        onChange={this.handleChange}
                        error={this.state.errors.Name}
                    ></Input>
                    <Input
                        name="Lastname"
                        label="Lastname"
                        value={this.state.account.Lastname}
                        onChange={this.handleChange}
                        error={this.state.errors.Lastname}
                    ></Input>
                    <SelectInput
                        name="City"
                        Cities={this.state.Cities}
                        onChange={this.handleChange}
                    ></SelectInput>
                    {/* <Input
                        name="City"
                        label="City"
                        value={this.state.account.City}
                        onChange={this.handleChange}
                        error={this.state.errors.City}
                    ></Input> */}
                    <Input
                        name="Email"
                        label="Email"
                        value={this.state.account.Email}
                        onChange={this.handleChange}
                        error={this.state.errors.Email}
                    ></Input>
                    <Input
                        name="Mobilephone"
                        label="Mobilephone"
                        value={this.state.account.Mobilephone}
                        onChange={this.handleChange}
                        error={this.state.errors.Mobilephone}
                    ></Input>
                    <button
                        style={{
                            width: "20%",
                            display: "flex",
                            justifyContent: "center",
                            position: "ralative",
                            textAlign: "center",
                            marginLeft: "40%",
                            marginRight: "40%",
                            marginTop: "50px",
                            height: "40px",
                        }}
                        type="submit"
                        disabled={this.validate()}
                        className="btn btn-primary"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

// export default LoginForm;
export function AltLoginForm(props) {
    let navigate = useNavigate();
    return <LoginForm navigate={navigate} />;
    // return (
    //     <div></div>
    // )
}
