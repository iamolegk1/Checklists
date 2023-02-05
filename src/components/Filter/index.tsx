import { FC } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useAppDispatch } from '../../state/hooks';
import { setStatusFilter } from '../../state/slices/todoSlice';
import { TODO_STATUS_FILTER } from '../../constants/filters';

const Filter: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
      }}
    >
      <Button
        size='large'
        variant='contained'
        onClick={() => dispatch(setStatusFilter(TODO_STATUS_FILTER.ALL))}
      >
        All
      </Button>
      <Button
        size='large'
        variant='contained'
        onClick={() => dispatch(setStatusFilter(TODO_STATUS_FILTER.DONE))}
      >
        Done
      </Button>
    </Box>
  );
};

export default Filter;
