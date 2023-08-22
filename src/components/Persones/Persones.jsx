import React, { Component } from "react";
import { getPersones, UpdateList } from "../../services/FakePersoneServices";
import PageNavbar from "../Paging_Navbar/Paging-Navbar";
import ListGroup from "./ListGroup/ListGroup";
import { arrayOf } from "prop-types";
import { getCity } from "../../services/FakePersonCity";
import PersonesTable from "./Person_Table/PersonesTable";
import _ from "lodash";
import NavBar from "../Navbar/Navbar";
import PersonesNavBar from "./Navbar/PersonesNavbar";
import { Link } from "react-router-dom";
import "./css/Persones.css";
class Persones extends Component {
    state = {
        persones: this.props.persones,
        filteredPersones: this.props.persones,
        currentPage: 1,
        pageSize: 10,
        currentCity: "AllCity",
        currentParam: "id",
        search: "",
    };

    handleSort = (param) => {
        let persones = [...this.state.persones];
        let filteredPersones = [...this.state.filteredPersones];
        let currentParam = this.state.currentParam;
        if (currentParam === param) {
            filteredPersones = filteredPersones.reverse();
            persones = persones.reverse();
        } else {
            currentParam = param;
            filteredPersones = _.orderBy(filteredPersones, [param]);
            persones = _.orderBy(persones, [param]);
        }
        this.setState({ persones, currentParam, filteredPersones });
    };
    handleDelete = (person) => {
        let persones = this.state.persones.filter((p) => p.id !== person.id);
        let filteredPersones = this.state.filteredPersones.filter(
            (p) => p.id !== person.id
        );
        this.setState({ persones, filteredPersones });
    };
    handleLike = (person) => {
        let persones = [...this.state.persones];
        let filteredPersones = [...this.state.filteredPersones];
        const index = persones.indexOf(person);
        const index2 = filteredPersones.indexOf(person);
        persones[index] = { ...persones[index] };
        filteredPersones[index2] = { ...filteredPersones[index2] };
        persones[index].like = !persones[index].like;
        filteredPersones[index2].like = !filteredPersones[index2].like;
        this.setState({ persones, filteredPersones });
    };

    handlePagination = (page) => {
        this.setState({ currentPage: page });
    };
    handleChangeCity = (city) => {
        this.setState({ currentCity: city });
    };
    handleSearch = ({ currentTarget: e }) => {
        const search = e.value;
        this.setState({ search });
        const personesArr = [...this.state.persones];
        const list = personesArr.filter((p) => {
            for (let item of Object.values(p)) {
                if (
                    item.toString().toLowerCase().includes(search.toLowerCase())
                )
                    return true;
            }
        });
        console.log(list);
        if (search === "" || search === null)
            this.setState({ filteredPersones: this.state.persones });
        this.setState({ filteredPersones: list });
        console.log(this.state.filteredPersones);
    };
    render() {
        console.log(this.state.persones);
        let arr = [];
        {
            arr = UpdateList(this.state.persones);
        }
        console.log(arr);
        let array = [...this.state.filteredPersones];
        array = array.filter((p) => p.city === this.state.currentCity);
        if (this.state.currentCity === "AllCity") {
            array = this.state.filteredPersones.slice();
        }

        const list = [
            ...array.slice(
                (this.state.currentPage - 1) * this.state.pageSize,
                this.state.currentPage * this.state.pageSize
            ),
        ];
        return (
            <React.Fragment>
                {console.log(this.props)}
                <PersonesNavBar
                    persones={array}
                    value={this.state.search}
                    onChange={this.handleSearch}
                ></PersonesNavBar>
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            currentCity={this.state.currentCity}
                            onChangeCity={this.handleChangeCity}
                        ></ListGroup>
                        <span className="">
                            <Link className="btn-mybtn" to="/Login">
                                Add Person
                            </Link>
                        </span>
                    </div>
                    <div className="col">
                        <PersonesTable
                            list={list}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                            onChange={this.handleSearch}
                        ></PersonesTable>
                        <PageNavbar
                            itemCount={array.length}
                            pageSize={this.state.pageSize}
                            currentPage={this.state.currentPage}
                            onPageChange={this.handlePagination}
                        ></PageNavbar>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Persones;
