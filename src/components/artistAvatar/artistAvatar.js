import React from "react";
import classes from './artistAvatar.module.css';

const artistAvatar = (props) => (
    <a href={props.link} target="_blank" className={classes.profileFooter}>
        <img src={props.avatar} alt=""/>
        <span>{props.name}</span>
    </a>
)

export default artistAvatar;