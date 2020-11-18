import { DeleteTodoAction, SaveTodoAction, NewTodoAction } from './todos';

export enum ActionTypes {
  newTodo,
  saveTodo,
  deleteTodo,
}

export type Action = SaveTodoAction | DeleteTodoAction | NewTodoAction;
