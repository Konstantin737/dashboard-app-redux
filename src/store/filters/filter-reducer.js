//В редюсере уже будет функция, которая выполняет то или иное действие в зависимости от принятой константы(импортируем из экшна)
import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

export const filterReduser = (state=[], action) => {
   switch(action.type) {
      case ADD_FILTER: {
         if(!state.includes(action.filter)) {
            return [...state, !state.includes(action.filter)?action.filter:false]
         }
         return state
      }
      case REMOVE_FILTER: {
         return state.filter(item=>item!==action.filter)
      }
      case CLEAR_FILTER: {
         return []
      }
      default: {
         return state
      }
   }
}