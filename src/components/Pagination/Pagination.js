import React, {Component} from "react";

class Pagination extends Component {
    pages() {
        let pages = [];
        for (let i = this.rangeStart(); i <= this.rangeEnd(); i++) {
            pages.push(i)
        }
        return pages;
    }

    rangeStart() {
        let start = this.props.current - this.props.pageRange;
        return (start > 0) ? start : 1;
    }

    rangeEnd() {
        let end = this.props.current + this.props.pageRange;
        let totalPages = this.totalPages();
        return (end < totalPages) ? end: totalPages;
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
        this.props.onPageChanged(page);
        console.log('---', this.props, '---')
    }

    render() {
        return (
            <div>
                <h1>Pagination</h1>
                <div className="pagination">
                    <div className="pag-left">
                        <a href="#" className={!this.hasPrev() ? 'hidden': ''}
                           onClick={event => this.changePage(this.hasPrev())} >
                            Prev
                        </a>
                    </div>
                    <div className="pages-midd">
                        <ul>
                            <li className={!this.hasFirst() ? 'hidden': ' '}>
                                <a href="#" onClick={event => this.changePage(1)}>1</a>
                            </li>
                            <li className={!this.hasFirst() ? 'hidden': ''}>...</li>
                            {
                                this.pages().map((page, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#"
                                               onClick={e => this.changePage(page)}
                                               className={this.props.current == page ? 'current': ' '} >
                                                === {page} ===
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            <li className={this.hasLast() ? 'hidden' : ''}>...</li>
                            <li className={!this.hasLast() ? 'hidden' : ''}>
                                <a href="#" onClick={e => this.changePage(this.totalPages())}>
                                    {this.totalPages()}
                                </a>
                            </li>
                        </ul>
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