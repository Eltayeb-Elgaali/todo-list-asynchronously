import { Todo } from './todo.js';

export const getAllTodosHandler = async (event) => {
    debugger;
    const newTodo = new Todo();

    const allTodosData = await newTodo.getAll();
    console.log({
        action: 'Get all todos',
        Alltodos: allTodosData,
        event
    });
    document.querySelector('#root').innerHTML ='';
    document.querySelector('#root').appendChild(newTodo.renderTodos(allTodosData));

}