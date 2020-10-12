import { Todo }  from './todo.js';

export const deleteHandler = async (target) => {
    const id = Number(target.currentTarget.form.id.value);
    const newTodo = new Todo();

    const todoData = await newTodo.deleteTodo(id);
    if(todoData.status !== 200 ){
        return;
    }
    console.log({
        action: 'Delete todo',
        todoId: id,
        event: target
    });

    document.querySelector('#root').innerHTML = '';
    const pEl = document.createElement('p');
    pEl.innerText = `To do Item with id ${id} was deleted`;
    document.querySelector('#root').appendChild(pEl);

}