import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit} from 'react-icons/ti'

function ToDo({ToDos, completeToDos, removeToDo, updateToDo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''

    });

    const submitUpdate = value => {
        updateToDo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };

      if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
      }
    
    

  return ToDos.map((ToDo, index) => (
    <div className={ToDo.isComplete ? 'todo-row complete': 
    'ToDo-row'} key={index}>
    
    <div key={ToDo.id} onClick={() => completeToDos(ToDo.id)}>
       {ToDo.text} 
    </div>
    <div className='icons'>
        <RiCloseCircleLine
        className='delete-icon'
        onClick={() => removeToDo(ToDo.id)} />
        <TiEdit className='edit-icon'
        onClick={() => setEdit({id: ToDo.id, value: ToDo.text})} />
    </div>

    </div>


  ));
}

export default ToDo