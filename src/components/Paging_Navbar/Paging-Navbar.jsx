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
                                    ? "page-link"
                                    : "page-link disabled"
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
                                class="page-link"
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
                                    ? "page-link"
                                    : "page-link disabled"
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
