import React from 'react'
import s from "../styleHeader.module.css"


function Error404() {
    return (
        <div className={s.ErrorClass}>
            <div className={s.numClass}>404</div>
            <div className={s.contentClass}>Page not found!</div>
            <div className={s.footerContentClass}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
