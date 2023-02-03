import Container from '@mui/material/Container';

import Form from './components/Form';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <>
      <Container maxWidth='xs'>
        <Form />
        <ListTodo />
      </Container>
    </>
  );
}

export default App;
