import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { TODO_STATUS_FILTER } from '../../constants/filters';
import { ITodo, TStatusFilter } from '../../types';
interface IInitialState {
  todos: ITodo[];
  filters: {
    todoStatus: TStatusFilter;
    search: string;
  };
}

const initialState: IInitialState = {
  todos: [],
  filters: {
    todoStatus: TODO_STATUS_FILTER.ALL,
    search: '',
  },
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = { id: nanoid(), title: action.payload, completed: false };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    changeTodoCompleted: (state, action: PayloadAction<string>) => {
      const selectedTodoId = action.payload;
      const todos = [...state.todos];
      const selectedTodoIndex = state.todos.findIndex(
        ({ id }) => id === selectedTodoId,
      );
      const [selectedTodo] = todos.splice(selectedTodoIndex, 1);

      if (selectedTodo.completed) {
        state.todos = [
          { ...selectedTodo, completed: !selectedTodo.completed },
          ...todos,
        ];
      } else {
        state.todos = [
          ...todos,
          { ...selectedTodo, completed: !selectedTodo.completed },
        ];
      }
    },
    setStatusFilter: (state, action: PayloadAction<TStatusFilter>) => {
      if (action.payload === TODO_STATUS_FILTER.ALL) {
        state.filters.search = '';
      }
      state.filters.todoStatus = action.payload;
    },
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  changeTodoCompleted,
  setStatusFilter,
  setSearchFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
