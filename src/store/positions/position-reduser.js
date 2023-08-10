//Редюсер, сида импортирую константу из экшна

import { ADD_POSITIONS } from "./position-actions";

export const positionReducer = (state = [], actions) => {
   switch(actions.type) { 
      //если мы получаем actions.type = ADD_POSITIONS, то вернем все позиции
      case ADD_POSITIONS: {
         return actions.positions
      }
      default: {
         return state
      }
   }
}