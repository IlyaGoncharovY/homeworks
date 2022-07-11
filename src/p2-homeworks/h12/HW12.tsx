import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeAC, themeReducer, themeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, themeType>(state => state.themeReducer.theme)  /* 'some'; // useSelector*/
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const superSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let nTheme = e.currentTarget.value
        dispatch(changeThemeAC(nTheme as themeType))
    }

    const superRadioHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let nTheme = e.currentTarget.value
        dispatch(changeThemeAC(nTheme as themeType))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect onChange={superSelectHandler} options={themes}/>
            </div>
            <div>
                <SuperRadio onChange={superRadioHandler} options={themes} value={theme}/>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
