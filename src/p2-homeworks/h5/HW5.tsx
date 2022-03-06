import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Rout from "./Routes";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>
                <Rout/>
                <PreJunior/>

            </HashRouter>
        </div>
    )
}

export default HW5
