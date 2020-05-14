import { combineReducers } from "redux"
import { Todo } from "./todo"

export const rootReducer = combineReducers({
  todo: Todo,
})
