import { FC } from 'react';

import Search from './components/Search';
import Filter from './components/Filter';
import Form from './components/Form';
import ListTodos from './components/ListTodos';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const App: FC = () => (
  <Container>
    <Box
      sx={{
        width: '100%',
        mt: 2,
        gap: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Search />
      <Filter />
    </Box>
    <Box
      sx={{
        mt: 8,
        width: '100%',
        gap: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Form />
      <ListTodos />
    </Box>
  </Container>
);

export default App;
