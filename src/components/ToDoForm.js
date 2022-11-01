import React, {useState, useEffect, useRef} from 'react'


function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });

    const handleChange = x => {
        setInput(x.target.value);
    }

    const handleSubmit = x => {
        x.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

    setInput('');
    };

  return (
    <form onSubmit={handleSubmit} className='ToDo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='ToDo-input edit'
        />
        <button onClick={handleSubmit} className='ToDo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Add a ToDo'
          value={input}
          onChange={handleChange}
          name='text'
          className='ToDo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='ToDo-button'>
          Add ToDo
        </button>
      </>
    )}
  </form>
);
}

export default ToDoForm;