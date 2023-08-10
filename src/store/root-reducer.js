import { combineReducers } from "redux";
//импортируем исполняемые функции, редюсеры
import { positionReducer } from "./positions/position-reduser";
import { filterReduser } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
   positions: positionReducer,
   filters: filterReduser
})