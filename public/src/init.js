console.log('hi');
import { addTodoHandler } from './add-todo-handler.js';
import { getAllTodosHandler } from './get-all-todos-handler.js';
import { getOneTodoHandler } from './get-one-todo-handler.js'

document.querySelector('#add').addEventListener('click', addTodoHandler);

document.querySelector('#get-todos').addEventListener('click', getAllTodosHandler);

document.querySelector('#get-todo').addEventListener('click', getOneTodoHandler);