import { Todo } from './todo.js';

export const getOneTodoHandler = async (target) => {
    const id = Number(target.currentTarget.form.id.value);
    const newTodo = new Todo();

    const todoData = await newTodo.getOneTodo(id);
    console.log({
        action: 'get one todo',
        todo: todoData,
        event: target
    });
    const renderedTodo = newTodo.renderTodo(todoData);
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').appendChild(renderedTodo);

}