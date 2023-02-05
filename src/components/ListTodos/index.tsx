import { useState, FC } from 'react';
import List from '@mui/material/List';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { getFilteredTodos } from '../../state/slices/todoSelectors';
import { removeTodo, changeTodoCompleted } from '../../state/slices/todoSlice';
import TodoItem from '../TodoItem';
import ConfirmModal from '../ConfirmModal';

const ListTodos: FC = () => {
  const filteredTodos = useAppSelector(getFilteredTodos);
  const dispatch = useAppDispatch();
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selectedId, setSelectedId] = useState<null | string>(null);

  const handleClickDelete = (id: string) => {
    setIsOpenConfirmModal(true);
    setSelectedId(id);
  };

  const checkChanged = (id: string) => {
    dispatch(changeTodoCompleted(id));
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

  return (
    <>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {filteredTodos.map(todo => (
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

export default ListTodos;
