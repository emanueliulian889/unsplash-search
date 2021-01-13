import React from "react";
import classes from './imageList.module.css';
import ImageCard from "../imageCard/imageCard";
import ArtistAvatar from "../artistAvatar/artistAvatar";
import Pagination from "../Pagination/Pagination";

const imageList = (props) => {
     const images = props.images.map((image) => {
         return (
             <div>
                 <ImageCard
                     style={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         bottom: 0,
                         height: '100%',
                         width: '100%',
                         objectFit: 'cover',
                         boxShadow: '0px 10px 10px #000'
                     }}
                     image={image}
                     key={image.id} />

                 <ArtistAvatar
                     avatar={image.user.profile_image.large}
                     name={image.user.name}
                     link={image.user.portfolio_url}
                 />
             </div>
         )
     })

    return (
        <div className={classes.imgList}>{images}</div>
    )
}

export default imageList;