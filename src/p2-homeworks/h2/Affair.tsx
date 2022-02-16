import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.text2cols}>
            <div className={s.text2colsLeft}>{props.affair.name}</div>
            <div className={s.text2colsRight}>{props.affair.priority}</div>


            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
