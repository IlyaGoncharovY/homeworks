import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./styleHeader.module.css"
import {PATH} from "./Menu";


function Header() {
    return (
        <div className={s.container}>
            <div className={s.slide}>
                <div className={s.content}><NavLink to={PATH.PRE_JUNIOR}>PreJunior </NavLink></div>
                    <div className={s.header}>1</div>
                </div>
            <div className={s.slide}>
                <div className={s.content}><NavLink to={PATH.JUNIOR}> Junior </NavLink></div>
                <div className={s.header}>2</div>
            </div>
            <div className={s.slide}>
                <div className={s.content}><NavLink to={PATH.JUNIORPLUS}> JuniorPlus</NavLink></div>
                <div className={s.header}>3</div>
            </div>
        </div>
    )
}

export default Header
