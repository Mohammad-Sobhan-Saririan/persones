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
// const LoginForm = () => {
//     const [account, setAccount] = useState({
//         Name: "",
//         Lastname: "",
//         City: "",
//         Email: "",
//         Mobilephone: "",
//     });
//     let [errors, setErrors] = useState({});
//     const navigate = useNavigate();
//     const schema = {
//         Name: Joi.string().required().min(5).label("Name"),
//         Lastname: Joi.string().required().min(8).label("Lastname"),
//         City: Joi.string().required().label("City"),
//         Email: Joi.string().email().required().label("Email"),
//         Mobilephone: Joi.string()
//             .regex(/^\d{11}$/)
//             .required()
//             .label("Mobilephone"),
//     };
//     const doSubmit = () => {
//         // connect to server
//         savePersone(account);
//         console.log("Submitted");
//         navigate("/Persones");
//     };
//     const validate = () => {
//         const options = { abortEarly: false };
//         const result = Joi.validate(account, schema, options);
//         const { error } = result;
//         if (!error) return null;
//         const errors = {};
//         for (let item of error.details) errors[item.path[0]] = item.message;
//         return errors;
//     };

//     const handleChange = ({ currentTarget: input }) => {
//         const errors = { ...errors };
//         const errorMessage = validateProperty(input);
//         if (errorMessage) errors[input.name] = errorMessage;
//         else delete errors[input.name];
//         const account = { ...account };
//         account[input.name] = input.value;

//         setAccount(account);
//         setErrors(errors);
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validate();
//         setErrors(errors || {});
//         if (errors) return;
//         doSubmit();
//     };

//     const validateProperty = ({ name, value }) => {
//         const obj = { [name]: value };
//         const schema = { [name]: schema[name] };
//         const { error } = Joi.validate(obj, schema);
//         return error ? error.details[0].message : null;
//     };

//     return (
//         <div>
//             <h1
//                 style={{
//                     color: "blue",
//                     fontFamily: "cursive",
//                     display: "flex",
//                     justifyContent: "center",
//                     textAlign: "center",
//                     marginBottom: "40px",
//                 }}
//                 font-family="Georgia"
//             >
//                 Login
//             </h1>
//             <form onSubmit={handleSubmit}>
//                 <Input
//                     name="Name"
//                     label="Name"
//                     value={account.Name}
//                     onChange={handleChange}
//                     error={errors.Name}
//                 ></Input>
//                 <Input
//                     name="Lastname"
//                     label="Lastname"
//                     value={account.Lastname}
//                     onChange={handleChange}
//                     error={errors.Lastname}
//                 ></Input>
//                 <SelectInput
//                     name="City"
//                     Cities={getCity()}
//                     onChange={handleChange}
//                 ></SelectInput>
//                 {/* <Input

//                     name="City"
//                     label="City"
//                     value={account.City}
//                     onChange={handleChange}
//                     error={errors.City}
//                 ></Input> */}
//                 <Input
//                     name="Email"
//                     label="Email"
//                     value={account.Email}
//                     onChange={handleChange}
//                     error={errors.Email}
//                 ></Input>
//                 <Input
//                     name="Mobilephone"
//                     label="Mobilephone"
//                     value={account.Mobilephone}
//                     onChange={handleChange}
//                     error={errors.Mobilephone}
//                 ></Input>
//                 <button
//                     style={{
//                         width: "20%",
//                         display: "flex",
//                         justifyContent: "center",
//                         position: "ralative",
//                         textAlign: "center",
//                         marginLeft: "40%",
//                         marginRight: "40%",
//                         marginTop: "50px",
//                         height: "40px",
//                     }}
//                     disabled={validate()}
//                     className="btn btn-primary"
//                 >
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

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
        Name: Joi.string().required().min(5).label("Name"),
        Lastname: Joi.string().required().min(8).label("Lastname"),
        City: Joi.string().required().label("City"),
        Email: Joi.string().email().required().label("Email"),
        Mobilephone: Joi.string()
            .regex(/^\d{11}$/)
            .required()
            .label("Mobilephone"),
    };

    doSubmit = () => {
        // connect to server
        savePersone(this.state.account);
        console.log("Submitted");
        console.log(this.state.account);
        this.props.navigate('/Persones' , {replace : true});
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
