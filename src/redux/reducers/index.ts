import { combineReducers } from 'redux';
import { todosReducer, TodosReducerState } from './todos';

export interface StoreState {
  todos: TodosReducerState;
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
