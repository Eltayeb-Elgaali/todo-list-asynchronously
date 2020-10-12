console.log('hi');
import { addTodoHandler } from './add-todo-handler.js';
import { getAllTodosHandler } from './get-all-todos-handler.js';

document.querySelector('#add').addEventListener('click', addTodoHandler);

document.querySelector('#get-todos').addEventListener('click', getAllTodosHandler);
