import { Todo } from './todo.js';

export const addTodoHandler = async (target) => {
    const newTodo = new Todo({
        todoText: target.currentTarget.form.todoText.value,
        completed: target.currentTarget.form.completed.checked
    });

    const view = await newTodo.postTodo(newTodo);
    const renderedTodo = newTodo.renderTodo(view);
    document.querySelector('#root').appendChild(renderedTodo);

    
}