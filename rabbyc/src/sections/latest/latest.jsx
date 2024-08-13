import React from "react";
import './latest.css'
import {Spin , Detail} from '../../components/index'
import { img1 } from "./index";

const Latest = () => {
    return (
        <section className="latest">
            <div className="latest_new">
                <h4>New Arrivals</h4>
                <div className="latest_new-content">
                    <Spin img1={img1} name='Gucci Bag' fPrice='#45,000' nPrice='#30,000' link='#nav'/>
                    <Spin img1={img1} name='Gucci Bag' fPrice='#45,000' nPrice='#30,000' link='#nav'/>
                </div>
                <div className="latest_new-btn">
                    <a href="#latest">View All</a>
                </div>
            </div>
            <div className="latest_top">
                <h4>Top Selling</h4>
                <div className="latest_top-content">
                    <Detail img={img1} name='Gucci Bag' price='20500' numLeft='9' link='#nav'/>
                    <Detail img={img1} name='Gucci Bag' price='20500' numLeft='9' link='#nav'/>
                </div>
            </div>
        </section>
    )
}

export default Latest