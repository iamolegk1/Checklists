import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ITodo } from '../../types';
import { TODO_STATUS_FILTER } from '../../constants/filters';

export const getState = (state: RootState) => state.todos;

export const getAllTodos = (state: RootState) => getState(state).todos;

export const getAllFilters = (state: RootState) => getState(state).filters;

export const getStatusFilter = (state: RootState) => {
  return getState(state).filters.todoStatus;
};

export const getSearchFilter = (state: RootState) => {
  return getState(state).filters.search;
};

export const getFilteredTodos = createSelector(
  getAllFilters,
  getAllTodos,
  ({ todoStatus: statusFilter, search: searchFilter }, allTodos: ITodo[]) => {
    if (statusFilter === TODO_STATUS_FILTER.ALL) {
      if (!searchFilter) return allTodos;
      return allTodos.filter((todo: ITodo) =>
        todo.title.toLowerCase().includes(searchFilter.toLowerCase()),
      );
    }

    if (statusFilter === TODO_STATUS_FILTER.DONE) {
      if (!searchFilter)
        return allTodos.filter((todo: ITodo) => todo.completed);
      return allTodos.filter(
        (todo: ITodo) =>
          todo.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
          todo.completed,
      );
    }

    return allTodos;
  },
);
