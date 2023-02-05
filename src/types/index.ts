import { TODO_STATUS_FILTER } from '../constants/filters';

export type TInput = {
  task: string;
};
export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export type TStatusFilter = keyof typeof TODO_STATUS_FILTER;
