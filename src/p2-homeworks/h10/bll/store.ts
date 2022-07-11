import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loadingReducer,
    themeReducer
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>