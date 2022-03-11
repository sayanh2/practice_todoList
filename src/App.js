import './App.css';
import React, {useState, useEffect} from "react";
import HeaderPrac from './my-components/HeaderPrac';
import { AddTodoPrac } from './my-components/AddTodoPrac';
import { TodosPrac } from './my-components/TodosPrac';
import { FooterPrac } from './my-components/FooterPrac';
import { AboutPrac } from './my-components/AboutPrac';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo)

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  
  
  const addTodo = (title, desc)=>{
    // console.log("I am adding this todo", title, desc);
    let sno;
    {(todos.length === 0)? sno = 0 :
      sno = todos[todos.length - 1].sno + 1;}
      
      let myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todos, myTodo]);
      // console.log(myTodo);
    }
    
    const onDelete =(todo)=>{
      // console.log('I am onDelete of todo: ', todo)
      // Deleting this way does not work in react
      // let index = todos.indexOf(todo);
      // todos.splice(index, 1);
      setTodos(todos.filter((e)=>{
        return e !== todo;
      }))
      
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    
  
  return (
      <>
      <Router>

       <HeaderPrac title = "Sayan's Todos List"/>
        <Switch>

          <Route exact path="/" render={()=>{
            return (
              <>
                <AddTodoPrac addTodo={addTodo}/>
                <TodosPrac todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>

          <Route path="/about">
            <AboutPrac/>

          </Route>

       </Switch>
       <FooterPrac/>

       </Router>
      </>
  );
}


export default App;


