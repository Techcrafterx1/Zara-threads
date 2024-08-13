import React from "react";
import './spin.css'

const Spin = ({img1, name, fPrice, nPrice, link}) => {
    return(
        <a href={link}>
           <div className="box">
                <div className="card c1" >
                    <div className="imgBox">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="detail">

                    <h4>{name}</h4>
                    <h5><span>{fPrice}</span></h5>
                    <h5>{nPrice}</h5>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Spin