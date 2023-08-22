import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Persones from "./components/Persones/Persones";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/Navbar/Navbar";
import { getPersones } from "./services/FakePersoneServices";
import { AltLoginForm } from "./components/Login/LoginForm";
import { AltUpdateForm } from "./components/Update/Update";
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
                        <Route
                            path="/Update/:id/:name/:lastname/:city/:email/:mobilephone"
                            element={<AltUpdateForm />}
                        ></Route>
                        <Route
                            path="/Persones"
                            element={
                                <Persones persones={this.state.persones} />
                            }
                            render
                        ></Route>
                        <Route path="/not-found" element={<NotFound />}></Route>
                        <Route
                            path="/"
                            element={<Navigate to="/Persones" />}
                        ></Route>
                        <Route
                            path="*"
                            element={<Navigate to="/not-found" />}
                        ></Route>
                        <Route path="/Login" element={<AltLoginForm />}></Route>
                    </Routes>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
