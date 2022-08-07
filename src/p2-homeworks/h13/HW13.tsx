import React from 'react';
import {Request} from "./Request";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

export const HW13 = () => {
    const success = useSelector((state:AppStoreType)=>state.requestReducer)
    return (
        <div>
            <hr/>
            <hr/>
            <Request success={success.success}/>
            <hr/>
        </div>
    );
};

