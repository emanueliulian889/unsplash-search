import React from "react";
import { ImageGroup, Image } from "react-fullscreen-image";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    // componentDidMount() {
    //     this.imageRef.current.addEventListener('load', this.setSpans);
    // }

    // setSpans = () => {
    //     const height = this.imageRef.current.clientHeight;
    //     const spans = Math.ceil(height / 10);
    //     this.setState({ spans })
    // }

    onClickImage = (id) => {
        console.log('image', id);

    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <ImageGroup>
                    <Image src={urls.regular}
                           alt={description}
                           // ref={this.imageRef}
                           // onClick={(id) => this.onClickImage(id)}
                   />
                </ImageGroup>

            </div>
        )
    }
}

export default ImageCard;