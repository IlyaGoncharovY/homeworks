import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {themeReducer} from "../../h12/bll/themeReducer";
import {requestReducer} from "../../h13/bll/requestReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";


const reducers = combineReducers({
    loadingReducer,
    themeReducer,
    requestReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export type AppStoreType = ReturnType<typeof reducers>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
// export type AppDispatch = any

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState, unknown, AnyAction>