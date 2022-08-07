import {RequestAPI} from "../api/requestAPI";
import {Dispatch} from "redux";
import {AppThunk} from "../../h10/bll/store";

type initialStateType = typeof initialState

const initialState = {
    success: true,
    error: "",
    info: ""
}

type requestReducerActionType = successRequestACType | setSuccessRequestACType

export const requestReducer = (state: initialStateType = initialState, action: requestReducerActionType): initialStateType => {
    switch (action.type) {
        case "SUCCESS-REQUEST":
            return {
                ...state,
                success: action.success
            }
        case "SET-REQUEST":
            return {
                ...state,
                error: action.error,
                info: action.info
            }
        default:
            return state
    }
}


type successRequestACType = ReturnType<typeof successRequestAC>
export const successRequestAC = (success: boolean) => {
    return {
        type: "SUCCESS-REQUEST",
        success
    } as const
}


type setSuccessRequestACType = ReturnType<typeof setSuccessRequestAC>
export const setSuccessRequestAC = (error: string, info: string) => {
    return {
        type: "SET-REQUEST",
        error,
        info
    } as const
}

//THUNK HW10(store)

export const testRequestTC = (success:boolean): AppThunk => {
    return (dispatch: Dispatch) => {
        dispatch(setSuccessRequestAC("",""))
        RequestAPI.testRequest(success)
            .then(res=> {
                dispatch(setSuccessRequestAC(res.data.text, res.data.info))
            })
            .catch(err => {
                dispatch(setSuccessRequestAC(err.response.data.text, err.response.data.info))
            })
    }
}