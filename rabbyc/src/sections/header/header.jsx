import React from "react";
import { img9 } from "./index.js";
import './header.css'

const Header = () => {
    return (
        <header className="header" id="header">
           <img 
            src={img9}
            alt="hero"
           />
        <div className="header_text" >
            <h2>Finding Accessories that <br/> <span>Accentuates</span> your <span>Style</span>.</h2>
            <h5>rfgwetgetgegerwfwrcb  bwrfwrfrbw<br/> wrfwreber wevbe ereve tvegegegwergbrwgwrgwg<br/>bwggwbgwgbwgrwbvwbvbvwbwbrrwgw</h5>
            <a href="#nav"> On Sale!</a>
        </div>
        </header>
    )
}

export default Header