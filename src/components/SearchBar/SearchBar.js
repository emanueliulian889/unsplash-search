import React, { Component } from "react";
import classes from './searchBar.module.css';


const style = {
    maxWidth: '700px',
    margin: '0 auto'
}

class SearchBar extends Component {
    state = {
        term: '',
        toggleClearBtn: false
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitForm(this.state.term);
    }

    render() {
        return (
            <div className="ui segment" style={style}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label style={{marginBottom: '5px', display: 'block'}}>Image Search: </label>
                    <input
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value}) }
                        type="text"
                        placeholder='search...'
                        required
                    />
                </form>
                <button
                    className={this.state.term.length > 0 ? classes.show : classes.hide}
                    onClick={this.props.clearSearch}
                ><i className='close icon'></i></button>
            </div>
        )
    }
}

export default SearchBar;