import React, {ChangeEvent} from 'react';
import {ThunkDispatch} from "redux-thunk";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {successRequestAC,testRequestTC} from "./bll/requestReducer";
import {AnyAction, Dispatch} from "redux";
import {useAppDispatch} from "../h10/bll/appHook";

type RequestType = {
    success: boolean
}

export const Request = (props: RequestType) => {
    const error = useSelector((state: AppStoreType) => state.requestReducer.error)
    const info = useSelector((state: AppStoreType) => state.requestReducer.info)
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(testRequestTC(props.success))
    }

    return (
        <div>
            <div>
                <input type={"checkbox"} checked={props.success} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(successRequestAC(e.currentTarget.checked))
                }}/>
            </div>
            <div>
                <button onClick={onClickHandler}>Request</button>
            </div>
            <div>
                <span>{error}</span>
                <span>{info}</span>
            </div>
        </div>
    );
};
