import {combineReducers, createStore} from "redux";

export type StoreType = ReturnType<typeof reducers>
// export type ActionsType =
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
//     StoreType,
//     unknown,
//     Actionstype>

const reducers = combineReducers({})

export const store = createStore(reducers)
