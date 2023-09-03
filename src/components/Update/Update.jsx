import React, { Component } from "react";
import Input from "../Login/Input";
import Joi from "joi-browser";
import Form from "../Login/Form";
import { savePersone } from "../../services/FakePersoneServices";
import { getCity } from "../../services/FakePersonCity";
import { useNavigate } from "react-router-dom";
import SelectInput from "../Login/SelectInput";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

class UpdateForm extends Form {
    state = {
        Cities: getCity(),
        account: {
            Id: this.props.match.params.id,
            Name: this.props.match.params.name,
            Lastname: this.props.match.params.lastname,
            City: this.props.match.params.city,
            Email: this.props.match.params.email,
            Mobilephone: this.props.match.params.mobilephone,
        },
        errors: {},
        match: this.props.match,
    };
    schema = {
        Id: Joi.number().required().label("id"),
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
        // console.log("Submitted");
        // console.log(this.state.account);
        this.props.navigate("/Persones", { replace: true });
    };
    render() {
        console.log(this.validate());
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
                    Update
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
                        value={this.state.account.City}
                        Cities={this.state.Cities}
                        onChange={this.handleChange}
                    ></SelectInput>
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
                        Update
                    </button>
                </form>
            </div>
        );
    }
}

UpdateForm.propTypes = {
    match: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
};

export function AltUpdateForm(props) {
    let navigate = useNavigate();
    let { id, name, lastname, city, email, mobilephone } = useParams();
    return (
        <UpdateForm
            navigate={navigate}
            match={{ params: { id, name, lastname, city, email, mobilephone } }}
        ></UpdateForm>
    );
}
