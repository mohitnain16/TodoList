import React, { useState } from 'react';
const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');
    

    return (
        <form
        onSubmit={(event) => {
          event.preventDefault();
          saveTodo(value);
        }}
      >
      
        <input type="text" placeholder="Add todo"
        margin="normal"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
    );
  };
  
  


export default TodoForm;