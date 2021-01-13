import React, {Component} from "react";
import classes from './pagination.module.css';

class Pagination extends Component {
    pages() {
        let pages = [];
        for (let i = this.rangeStart(); i <= this.rangeEnd(); i++) {
            pages.push(i);
        }
        return pages;
    }

    rangeStart() {
        let start = this.props.current - this.props.pageRange;
        return start > 0 ? start : 1;
    }

    rangeEnd() {
        let end = this.props.current + this.props.pageRange;
        let totalPages = this.totalPages();
        return end < totalPages ? end: totalPages;
    }

    totalPages() {
        return Math.ceil(this.props.total / this.props.perPage)
    }

    nextPage() {
        return this.props.current + 1;
    }

    prevPage() {
        return this.props.current - 1;
    }

    hasFirst() {
        return this.rangeEnd() !== 1;
    }

    hasLast() {
        return this.rangeEnd() < this.totalPages();
    }

    hasPrev() {
        return this.props.current > 1;
    }

    hasNext() {
        return this.props.current < this.totalPages();
    }

    changePage(page) {
        this.props.onPageChange(page);
        console.log("Page inside Pagination", page);
    }

    render() {
        console.log(this.hasNext())
        return (
            <div>
                <div className={classes.pagination}>
                    <div className={classes.pagLeft}>
                        <span
                            role="button"
                            className={!this.hasPrev() ? 'hidden': ''}
                            onClick={event => this.changePage(this.prevPage())} >
                            Prev
                        </span>
                    </div>
                    <div className="pages-midd">
                        <ul className={this.props.current > 0 ? ' ' : classes.limitPagination}>
                            {/*<li className={!this.hasFirst() ? 'hidden': ' '}>*/}
                            {/*    <a href="#" onClick={event => this.changePage(1)}>1</a>*/}
                            {/*</li>*/}
                            {/*<li className={!this.hasFirst() ? 'hidden': ''}>...</li>*/}
                            {
                                this.pages().map((page, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#"
                                               onClick={e => this.changePage(page)}
                                               className={this.props.current === page ? 'current': ' '} >
                                                {page}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            {/*<li className={this.hasLast() ? 'hidden' : ''}>...</li>*/}
                            {/*<li className={!this.hasLast() ? 'hidden' : ''}>*/}
                            {/*    <a href="#" onClick={e => this.changePage(this.totalPages())}>*/}
                            {/*        === total pages: {this.totalPages()} ===*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className={classes.pagRight}>
                        <span
                            role="button"
                            className={!this.hasNext() ? 'hidden': ''}
                            onClick={event => this.changePage(this.nextPage())}>
                            Next
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

Pagination.defaultProps = {
    pageRange: 3
}

export default Pagination;