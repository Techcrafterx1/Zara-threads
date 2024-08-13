import React from "react";
import './detail.css'

const Detail = ({img, name, price, numLeft, link}) => {
    return (
        <a className="detailP" href={link}>
            <figure>
                <img src={img} alt="img" />
            </figure>
            <div className="content">
                <h3>{name}</h3>
                <h4>#{price}</h4>
                <h5>{numLeft} left in stock!</h5>
            </div>
        </a>
    )
}

export default Detail