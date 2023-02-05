import { FC } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { ITodo } from '../../types';

type TTodoItemProps = {
  todo: ITodo;
  handleClickDelete: (arg0: string) => void;
  checkChanged: (arg0: string) => void;
};

const TodoItem: FC<TTodoItemProps> = ({
  todo,
  handleClickDelete,
  checkChanged,
}) => (
  <ListItem
    sx={{ boxShadow: 2, m: 2, borderRadius: '15px', width: '380px' }}
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
    <Typography
      variant='subtitle1'
      sx={
        todo.completed
          ? { textDecoration: 'line-through' }
          : { textDecoration: 'none' }
      }
    >
      {todo.title}
    </Typography>
  </ListItem>
);

export default TodoItem;
