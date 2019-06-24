import React from 'react';
import './TodoListTemplate.css'

const TodoListTemplate = ({form,children}) => {
    //  TodoListTemplate 에서는 form 값과 children 값을 받아온다.!
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;