import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
//import { tsThisType } from '@babel/types';

function Todos(props) {



    return (  
        props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo}/>
        ))
    );
}


// PropTypes
Todos.protoTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;