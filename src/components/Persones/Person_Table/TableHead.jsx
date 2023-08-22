import React, { Component } from "react";
class TableHead extends Component {
    state = {};
    render() {
        const { onSort } = this.props;
        return (
            <thead>
                <tr>
                    <th scope="col" className="px-3">
                        <a className="btn-tablebtn" onClick={() => onSort("id")}>
                            ID
                        </a>
                    </th>
                    <th scope="col">
                        <a className="btn-tablebtn" onClick={() => onSort("name")}>
                            Name
                        </a>
                    </th>
                    <th scope="col">
                        <a className="btn-tablebtn" onClick={() => onSort("lastName")}>
                            LastName
                        </a>
                    </th>
                    <th scope="col">
                        <a className="btn-tablebtn" onClick={() => onSort("city")}>
                            City
                        </a>
                    </th>
                    <th scope="col">
                        <a className="btn-tablebtn" onClick={() => onSort("email")}>
                            Email
                        </a>
                    </th>
                    <th scope="col">
                        <a
                            className="btn-tablebtn"
                            onClick={() => onSort("Mobile Phone")}
                        >
                            Mobile Phone
                        </a>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default TableHead;
