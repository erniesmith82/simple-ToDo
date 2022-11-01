import React, {useState} from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [ToDos, setToDos] = useState([]);
  
    const addToDo = ToDo => {
      if (!ToDo.text || /^\s*$/.test(ToDo.text)) {
        return;
      }
  
      const newToDos = [ToDo, ...ToDos];
  
      setToDos(newToDos);
     
    };
  
    const updateToDo = (ToDoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setToDos(prev => prev.map(item => (item.id === ToDoId ? newValue : item)));
    };
  
    const removeToDo = id => {
      const removedArr = [...ToDos].filter(ToDo => ToDo.id !== id);
  
      setToDos(removedArr);
    };
  
    const completeToDo = id => {
      let updatedToDos = ToDos.map(ToDo => {
        if (ToDo.id === id) {
          ToDo.isComplete = !ToDo.isComplete;
        }
        return ToDo;
      });
      setToDos(updatedToDos);
    };
  
    return (
      <>
        <h1>What are we to do?</h1>
        <ToDoForm onSubmit={addToDo} />
        <ToDo
          ToDos={ToDos}
          completeToDo={completeToDo}
          removeToDo={removeToDo}
          updateToDo={updateToDo}
        />
      </>
    );
  }
  
  export default ToDoList;