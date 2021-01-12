import React from "react";

import unsplash from "./api/unsplash";
import './index.css';

import PopularItems from "./components/popularItems/popularItems";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/imageList/imageList";
import Spinner from "./components/Spinner/spinner";
import MessageBlock from "./components/MessageBlock/MessageBlock";
// import Pagination from "./components/Pagination/Pagination";
import HeroBox from "./components/heroBox/heroBox";
import Aux from "./hoc/Aux";

class App extends React.Component {
    state = {
        images: [],
        loading: false,
        noImg: false,
        totalPhotos: 0,
        currentPage: 1,
        perPage: 20,
        popularImages: true,
        authAvatar: '',
        authName: ''
    }

    onSearchSubmit = (term) => {
        unsplash.get(`/search/photos`, {
                params: {
                    query: term,
                    per_page: this.state.perPage,
                    page: term,
                },
            },
            this.setState({
                loading: true
            })
        )
            .then((response) => {
                this.setState({
                    images: response.data.results,
                    loading: false,
                    noImg: false,
                    totalPhotos: parseInt(response.headers['x-total']),
                    currentPage: term,
                    popularImages: false,
                    authAvatar: response.data.user,
                    authName: '',
                });

                if (response.data.total === 0) {
                    this.setState({
                        noImg: true,
                    })
                }
            })
    }

    onClearSearch = () => {
        this.setState({
            images: [],
            loading: false,
            noImg: false,
            totalPhotos: 0,
            currentPage: 1,
            perPage: 20,
            popularImages: true
        })
    }

    // React says we have to define render!!
    render() {
        let imageList = null;
        let popularImages = <PopularItems />
        imageList = <ImageList images={this.state.images} />;

        if (this.state.loading) {
            imageList = <Spinner />
        }

        if (this.state.noImg) {
            imageList =  <MessageBlock>No images found</MessageBlock>
        }

        return (
            <Aux>
                <HeroBox>
                    <SearchBar onSubmitForm={this.onSearchSubmit} clearSearch={this.onClearSearch}/>
                </HeroBox>
                <div className='ui container'>
                    {this.state.popularImages ? <PopularItems /> : ''}
                    {imageList}
                </div>
            </Aux>
        )
    }
}

export default App;