import { FC, useRef } from 'react';
import debounce from 'lodash.debounce';
import TextField from '@mui/material/TextField';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { setSearchFilter } from '../../state/slices/todoSlice';
import { getSearchFilter } from '../../state/slices/todoSelectors';

const Search: FC = () => {
  const searchFilter = useAppSelector(getSearchFilter);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const searchValue = event.target.value;
    inputDebounce(searchValue);
  };

  const inputDebounce = useRef(
    debounce((searchValue: string) => {
      dispatch(setSearchFilter(searchValue));
      // Here you can add delay
    }, 0),
  ).current;

  return (
    <TextField
      ref={inputRef}
      value={searchFilter}
      type='text'
      sx={{ width: 300 }}
      id='filled-basic'
      label='Search'
      onChange={event => onChangeInput(event)}
    />
  );
};

export default Search;
