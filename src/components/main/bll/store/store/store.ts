import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducers/profileReducer";
import {authorizationReducer} from "../reducers/authorizationReducer";
import {registrationReducer} from "../reducers/registrationReducer";
import {errorReducer} from "../reducers/errorReducer";
import {updatePasswordReducer} from "../reducers/updatePasswordReducer";
import {recoveryPasswordReducer} from "../reducers/recoveryPasswordReducer";

export type StoreType = ReturnType<typeof reducers>
// export type ActionsType =
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
//     StoreType,
//     unknown,
//     Actionstype>

const reducers = combineReducers({
    profileReducer,
    authorizationReducer,
    registrationReducer,
    errorReducer,
    updatePasswordReducer,
    recoveryPasswordReducer
})

export const store = createStore(reducers)
