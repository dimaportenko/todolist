import { Todo, ActionTypes, Action } from '../actions';

export interface TodosReducerState {
  todos: Todo[];
  incrementId: number;
}

const initialState: TodosReducerState = {
  todos: [],
  incrementId: 1,
};

export const todosReducer = (
  state: TodosReducerState = initialState,
  action: Action,
): TodosReducerState => {
  switch (action.type) {
    case ActionTypes.newTodo: {
      const id: number = state.incrementId;
      const newTodo = { ...action.payload, id };
      const todos = [...state.todos, newTodo];
      return { todos, incrementId: id + 1 };
    }
    // case ActionTypes.deleteTodo: {
    //   return state.filter((todo) => todo.id !== action.payload);
    // }
    default: {
      return state;
    }
  }
};
