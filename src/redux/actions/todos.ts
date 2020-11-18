import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  date: Date;
  completed: boolean;
}

export interface NewTodo {
  title: string;
  date: Date;
  completed: boolean;
}

export interface SaveTodoAction {
  type: ActionTypes.saveTodo;
  payload: Todo;
}

export interface NewTodoAction {
  type: ActionTypes.newTodo;
  payload: NewTodo;
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const newTodo = (todo: NewTodo): NewTodoAction => ({
  type: ActionTypes.newTodo,
  payload: todo,
});

export const saveTodo = (todo: Todo): SaveTodoAction => ({
  type: ActionTypes.saveTodo,
  payload: todo,
});

export const deleteTodos = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});
