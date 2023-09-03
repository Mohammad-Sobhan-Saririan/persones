import React, { Component } from "react";
import Like from "./Like";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

class TableBody extends Component {
    state = {};
    render() {
        const { list, onDelete, onLike, onUpdate } = this.props;
        return (
            <tbody>
                {list.map((person) => (
                    <tr key={person.id}>
                        <td className=" py-3 px-3">{person.id}</td>
                        <td className=" py-3">{person.name}</td>
                        <td className=" py-3">{person.lastName}</td>
                        <td className=" py-3">{person.city}</td>
                        <td className=" py-3">{person.email}</td>
                        <td className=" py-3">{person.mobilePhone}</td>
                        <td className=" py-3">
                            <Like
                                onClick={() => onLike(person)}
                                like={person.like}
                            ></Like>
                        </td>
                        <td className=" py-3">
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(person)}
                            >
                                Delete
                            </button>
                        </td>
                        <td className=" py-3">
                            <span className="btn btn-info btn-sm">
                                <Link
                                    to={`/Update/${person.id}/${person.name}/${person.lastName}/${person.city}/${person.email}/${person.mobilePhone}`}
                                    className="text-decoration-none text-white"
                                >
                                    Update
                                </Link>
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

TableBody.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default TableBody;
