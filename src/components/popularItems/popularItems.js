import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import unsplash from "../../api/unsplash";
import ImageList from "../imageList/imageList";

class PopularItems extends Component {
    state = {
        id: 1,
        popularImages: [],
    }

    componentDidMount() {
        unsplash
            .get('/photos', {
                params: {
                    order_by: 'popular',
                    per_page: 8
                }
            })
            .then(response => {
                this.setState({
                    popularImages: response.data
                })
            })
    }

    render() {
        return (
            <Aux>
                <h1 style={{textAlign: 'center'}}>Popular images</h1>
                <ImageList images={this.state.popularImages} />
            </Aux>
        )
    }
}

export default PopularItems;