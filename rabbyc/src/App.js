import React from "react";
import {Navbar, Header, Brand, Latest, Products} from './sections/index'

const App = () => {
    return (
        <div className="container">
            <Navbar/>
            <Header/>
            <Brand />
            <Latest />
            <Products />
            {/* <Footer/> */}
        </div>
    )
}

export default App