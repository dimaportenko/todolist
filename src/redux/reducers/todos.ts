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
    case ActionTypes.deleteTodo: {
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos };
    }
    case ActionTypes.saveTodo: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      return { ...state, todos };
    }
    default: {
      return state;
    }
  }
};
