import { useState, SyntheticEvent } from 'react';
import { mutate } from 'swr';

import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const handleClick = async () => {
    const uid = localStorage.getItem('uid')!;

    await fetch('/api/addTodo', {
      method: 'POST',
      body: JSON.stringify({ todo, uid }),
    }).then((res) => res.json());

    await mutate('/api/getTodos');
    setTodo('');
  };

  return (
    <>
      <TextField
        label="todo..."
        value={todo}
        onChange={(e: SyntheticEvent & { target: HTMLInputElement }) => setTodo(e.target.value)}
      />
      <Button label="Add todo" outlined onClick={handleClick} />
    </>
  );
};

export default AddTodo;
