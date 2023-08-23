import React, { Component } from "react";
import _ from "lodash";
import "../../css/pagination.css";
import PropTypes from "prop-types";
class PageNavbar extends Component {
    state = {};
    render() {
        const { itemCount, pageSize, currentPage, onPageChange } = this.props;
        const Pages = Math.ceil(itemCount / pageSize);
        if (Pages === 0) return null;
        const pages = _.range(1, Pages + 1);

        return (
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a
                            class={
                                currentPage !== 1
                                    ? "page-link bg bg-dark text-white"
                                    : "page-link disabled bg bg-dark"
                            }
                            onClick={() => {
                                if (currentPage > 1)
                                    onPageChange(currentPage - 1);
                            }}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages.map((page) => (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <a
                                class={
                                    page === currentPage
                                        ? "page-link bg bg-danger border border-danger "
                                        : "page-link bg bg-dark text-white"
                                }
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                    <li class="page-item">
                        <a
                            class={
                                currentPage !== Pages
                                    ? "page-link bg bg-dark text-white"
                                    : "page-link disabled bg bg-dark "
                            }
                            onClick={() => {
                                if (currentPage < Pages)
                                    onPageChange(currentPage + 1);
                            }}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
PageNavbar.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
export default PageNavbar;
