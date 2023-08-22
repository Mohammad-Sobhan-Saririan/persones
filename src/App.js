import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Persones from "./components/Persones/Persones";
import { Route, Routes, Navigate } from "react-router-dom";
import PersonForm from "./components/PersonForm";
import NotFound from "./components/NotFound";
import Coustomers from "./components/Coustomers";
import LoginForm from "./components/Login/LoginForm";
import NavBar from "./components/Navbar/Navbar";
import { getPersones } from "./services/FakePersoneServices";
import {AltLoginForm} from "./components/Login/LoginForm";
import Update from "./components/Update/Update";
import {AltUpdateForm} from "./components/Update/Update";
class App extends React.Component {
    state = {
        persones: getPersones(),
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    persones={this.state.persones}
                    onChange={this.handleChange}
                    search={this.state.search}
                />
                <main className="container">
                    <Routes>
                        <Route path="/Update/:id/:name/:lastname/:city/:email/:mobilephone" element={<AltUpdateForm/>}></Route>
                        <Route
                            path="/Persones"
                            // Component={<Persones persones={this.state.persones} />}
                            element={
                                <Persones persones={this.state.persones} />
                            }
                            render 
                        ></Route>
                        <Route
                            path="/Person-Form"
                            element={<PersonForm />}
                            // Component={<PersonForm />}
                        ></Route>
                        <Route path="/not-found" element={<NotFound />}></Route>
                        <Route
                            path="/Coustomers"
                            // Component={<Coustomers />}
                            element={<Coustomers />}
                        ></Route>
                        <Route
                            path="/"
                            element={<Navigate to="/Persones" />}
                            // Component={<Navigate to="/Persones" />}
                        ></Route>
                        {/* <Route
                            path="*"
                            element={<Navigate to="/not-found" />}
                        ></Route> */}
                        <Route path="/Login" element={<AltLoginForm/>}></Route>
                        <Route path='/Persones/:id' element={<PersonForm/>}></Route>
                    </Routes>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
