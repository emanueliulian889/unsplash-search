import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        term: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmitForm(this.state.term);
    }

    render() {
        return (
            <div className="ui segment" style={{marginTop: '40px'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label style={{marginBottom: '5px', display: 'block'}}>Image Search: </label>
                    <input
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value}) }
                        type="text"
                        placeholder='search...'/>
                </form>
            </div>
        )
    }
}

export default SearchBar;