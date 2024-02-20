import './App.css';
import { useState } from 'react';
function App() {
  const[toDos,setTodos]=useState([])//1st state-to store listing array 
  const[toDo,setTodo]=useState('')  //second state-status while typing 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> It's Wedddnesday Today🌝 ☕ </h2>
      </div> 
      <div className="input">
        <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />{/*e-event , also syntax for input in react */}
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo, status:false}])} className="fas fa-plus"></i>{/*using spread opeartor todos array is split and adding todo to create new array, also object is used within array to specify text and status-tick or no tick, id is choosen as date now,*/}
      </div>

      <div className="todos">
      {/*to display below things,map is used   */}
      
      { toDos.map((obj)=>{

      
       return( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
                             }))
            }} 
            value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>  )
      })  }
       {toDos.map((obj)=>{
      if(obj.status){
        return(<h1>{obj.text}</h1>)
      }
      return null
    })}
   ``
    
      </div> 
   
    </div>
  );
  

}

export default App;
 {/*filter() method creates new array with all elements that pass the test implementedby the ...fucntion */}
