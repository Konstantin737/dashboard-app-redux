//создаем стор
import { createStore } from "redux";
//передаем сюда созданный набор редюсеров
import { rootReducer } from "./root-reducer";

//добавил редюсеры к стору и добавил строку для работы REDUX_DEVTOOLS
const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//теперь этот стор передадим в провайдер, в который обернут App
export {store}