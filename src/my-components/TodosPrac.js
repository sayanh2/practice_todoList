import React from 'react'
import { TodoItemPrac } from './TodoItemPrac'

export const TodosPrac = ({todos, onDelete}) => {
    let myStyle = {
        minHeight: "70vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h1 className="text-center my-3">Todos List</h1>
            {todos.length === 0 ? <h2 className="text-center text-success">No todos to Display</h2>:
                todos.map((todo)=>{
                    return(
                        <>
                        <TodoItemPrac todo={todo} key={todo.sno} onDelete={onDelete}/><hr/>
                        </>
                    )
                })
            }
        </div>
    )
}

