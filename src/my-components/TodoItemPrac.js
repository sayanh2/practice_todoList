import React from 'react'

export const TodoItemPrac = ({todo, onDelete}) => {
    return (
        <>
        <h2>{todo.title}</h2>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </>
    )
}
