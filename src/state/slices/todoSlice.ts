import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from '../../types';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as ITodo[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    completeTodos: (state, action: PayloadAction<string>) => {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodos } = todoSlice.actions;
export default todoSlice.reducer;
