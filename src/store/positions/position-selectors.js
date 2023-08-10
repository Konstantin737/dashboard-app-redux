//селектор который возвращает все позиции
export const selectAllPositions = (state) => state.positions;

//фильтры
export const selectVisiblePositions = (state, filters = []) => {
   if (filters.length===0) {
      return state.positions
   }

   return state.positions.filter(item => {
      //из каждой позиции объеденить все по чему будем фильтровать
      const itemFilter = [].concat(item.role, item.level, ...item.languages, ...item.tools)
      //и проверим соответствуют ли эти фильтры принятым в filters = [], при помощи every, он проверит все ли строки есть в itemFilter
      return filters.every(item=>itemFilter.includes(item))
   })
}

