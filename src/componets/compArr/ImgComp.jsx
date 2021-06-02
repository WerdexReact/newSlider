import React from 'react';
import '../Slider.less'

const ImgComp = (props) => {
    let imgStyles = {
        width: 100 + "%",
        height: "auto"
    }

    return (
        <div>
            <h1 className="header">{props.text}</h1>
            <img src={props.src} alt="slide-img" style={imgStyles} draggable="false"/>
        </div>

    );
};

export default ImgComp;
