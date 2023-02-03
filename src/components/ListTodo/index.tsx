import { useState, FC } from 'react';
import List from '@mui/material/List';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectTodo } from '../../state/slices/selectors';
import { removeTodo, completeTodos } from '../../state/slices/todoSlice';
import TodoItem from '../TodoItem';
import ConfirmModal from '../ConfirmModal';

const ListTodo: FC = () => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const todosList = useAppSelector(selectTodo);

  const handleClickDelete = (id: string) => {
    setIsOpenConfirmModal(true);
    setSelectedId(id);
  };

  const handleCloseModal = () => setIsOpenConfirmModal(false);

  const handleConfirmDelete = () => {
    if (selectedId) {
      dispatch(removeTodo(selectedId));
    }
    setIsOpenConfirmModal(false);
  };

  const handleRejectDelete = () => {
    setSelectedId(null);
    setIsOpenConfirmModal(false);
  };

  const checkChanged = (id: string) => {
    dispatch(completeTodos(id));
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {todosList.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleClickDelete={handleClickDelete}
            checkChanged={checkChanged}
          />
        ))}
      </List>
      <ConfirmModal
        isOpenConfirmModal={isOpenConfirmModal}
        handleCloseModal={handleCloseModal}
        handleConfirmDelete={handleConfirmDelete}
        handleRejectDelete={handleRejectDelete}
      />
    </>
  );
};

export default ListTodo;
