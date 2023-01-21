import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { AiFillDelete } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';


const AddTask = ({addTask}) =>{

  const[value,updateValue] = useState("");

const handleSubmit= e =>{
  e.preventDefault();
  if(value!=="")
  {
    addTask(value)
    updateValue("");
  }
};
return(
  <form onSubmit={handleSubmit}>
    <input type="text" value={value} placeholder="enter your task" onChange={e=>updateValue(e.target.value)}></input>
    <button type="submit"><i class="material-icons"><GrAdd/></i></button>
  </form>
);
}
const TodoList = ()=>
{
  const addTask= text=> updateTasks([...tasks,{text}]);

  const [tasks,updateTasks] = useState([
      {
          text:"Wake up",
          isCompleted:false
      },
      {
          text:"Fresh up",
          isCompleted:false
      },
      {
          text:"Home work",
          isCompleted:false
      }
  ]);
  const toggleTask = index =>{
    const newTask = [...tasks];
    if(newTask[index].isCompleted){
      newTask[index].isCompleted = false;
    }
    else{
      newTask[index].isCompleted = true;
    }
    updateTasks(newTask);
  }

  const removeTask= index =>{
    const newTask=[...tasks];
    newTask.splice(index,1);
    updateTasks(newTask);
  }
  return(
      <div className="list-of-tasks-todo">
        <h1>React Todo List App</h1>
          {tasks.map((task,index)=>(
              <div className="task-status">
                <span onClick={()=> toggleTask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
                  {task.text}
                </span>
                <button onClick={()=> removeTask(index)}><i class = "material-icons"><AiFillDelete/></i></button>                          
              </div>
          ))}
          <AddTask addTask={addTask}/>
      </div>
  );
}
ReactDom.render(<TodoList />,document.getElementById('root'));
