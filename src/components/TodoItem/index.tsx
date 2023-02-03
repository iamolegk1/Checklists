import { FC } from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { ITodo } from '../../types';

type TodoItemProps = {
  todo: ITodo;
  handleClickDelete: (arg0: string) => void;
  checkChanged: (arg0: string) => void;
};

const TodoItem: FC<TodoItemProps> = ({
  todo,
  handleClickDelete,
  checkChanged,
}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => handleClickDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        <Checkbox
          edge='start'
          checked={todo.completed}
          onChange={() => checkChanged(todo.id)}
        />
      </ListItemIcon>
      <ListItemText primary={todo.title} />
    </ListItem>
  );
};

export default TodoItem;
