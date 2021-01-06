import React from "react";
import classes from './imageList.module.css';
import ImageCard from "../imageCard/imageCard";

 const imageList = (props) => {
     const images = props.images.map((image) => {
         return <ImageCard image={image} key={image.id} />
     })
    return (
        <div className={classes.imgList}>{images}</div>
    )
}

export default imageList;