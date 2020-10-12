import { Todo } from './todo.js';

export const addTodoHandler = async (target) => {
    const newTodo = new Todo({
        todoText: target.currentTarget.form.todoText.value,
        completed: target.currentTarget.form.completed.checked
    });

    const todoData = await newTodo.postTodo(newTodo);
    console.log({
        action: 'Add todo',
        todo: todoData,
        event: target
    });
    const renderedTodo = newTodo.renderTodo(todoData);
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').appendChild(renderedTodo);

    
}