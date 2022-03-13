import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import Menu from "./Menu";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
        {/*    <HashRouter>*/}
                <Header/>
                <Menu/>
           {/* </HashRouter>*/}
        </div>
    )
}

export default HW5
