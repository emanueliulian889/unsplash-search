import React from "react";
import hero from '../../assets/hero.jpg';

const style = {
    padding: '100px',
    backgroundImage: "url(" + hero + ")",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '50px',
}

const heroBox = (props) => (
    <div style={style}>
        {props.children}
    </div>
);

export default heroBox;