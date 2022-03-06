import React from 'react'
import s from "./NavL.module.css"
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div className={s.NavLinks}>
            // add NavLinks

            <NavLink to={"preJunior"}>PreJunior</NavLink>

        </div>
    )
}

export default Header
