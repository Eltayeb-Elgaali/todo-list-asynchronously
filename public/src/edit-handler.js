import { Todo } from './todo.js';

export const editHandler = async (target) => {
    const id = Number(target.currentTarget.form.id.value);
    const newTodo = new Todo({
        todoText: target.currentTarget.form.todoText.value,
        completed: target.currentTarget.form.completed.checked,
        id
    });

    const todoData = await newTodo.editTodo(id,newTodo);
    console.log({
        action: 'Edit todo',
        todo: todoData,
        event: target

    });
    const renderedTodo = newTodo.renderTodo(todoData);
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').appendChild(renderedTodo);
}