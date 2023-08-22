import React, { Component } from "react";
import Joi from "joi-browser";
class Form extends Component {
    state = {
        data: {},
        errors: {},
    };
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    validate = () => {
        const options = { abortEarly: false };
        const result = Joi.validate(this.state.account, this.schema, options);
        const { error } = result;
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({ account, errors });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };
}

export default Form;
