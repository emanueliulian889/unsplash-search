import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from "./api/unsplash";

import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/imageList/imageList";

class App extends React.Component {
    state = {
        images: [],
    }

    onSearchSubmit = async (term) => {
      const response = await unsplash
          .get('/search/photos', {
            params: {
                query: term,
                per_page: 10,
                crop: 'top'
            },
      })

        console.log(this)
        this.setState({
            images: response.data.results
        })
    }

  // React says we have to define render!!
  render() {
    return (
        <div className='ui container'>
          <SearchBar onSubmitForm={this.onSearchSubmit} />
            {this.state.images.length}
          <ImageList images={this.state.images} />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
