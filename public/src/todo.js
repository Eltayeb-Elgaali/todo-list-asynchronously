export class Todo {
    
    todoText = '';
    completed = undefined;


    constructor(todoData){
        Object.assign(this, todoData)
    }

    postTodo = async (newTodo) => {
        try {
            const res = await fetch('/todos', {
                method: 'POST',
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            return await res.json();
        } catch (err){
            console.log(err);
        };
    }


    getAll = async () => {
        try{
            const res = await fetch('/todos');
            return await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    getOneTodo = async (id) => {
        try {
            const res = await fetch(`/todos/${id}`);
            return await res.json();
        } catch (err) {
            console.log(err);
        };
    }


    editTodo = async (id, edited) => {
        try {
            const res = await fetch(`/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(edited),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            return await res.json();
        } catch (err) {
            console.log(err);
        };
    }

    deleteTodo = async (id) =>{
        try {
            const res = await fetch(`/todos/${id}`, {
                method: 'DELETE'
            });
           return await res.json();
        } catch (err) {
            console.log(err);
        };
    }

    renderTodo = (todo) =>{
        const container = document.createElement('div');
        container.id = `todo-${todo.id}`;

        const checkEl = document.createElement('input');
        checkEl.type = 'checkbox';
        checkEl.checked = todo.completed;
        container.appendChild(checkEl);

        const titleEl = document.createElement('code');
        titleEl.innerText = ' ' + todo.todoText;
        container.appendChild(titleEl);

        return container;
    }

    renderTodos = (todos) => {
        const ulEl = document.createElement('ul');
        todos.map(todo => {
            const liEl = document.createElement('li');
            liEl.id = todo.id;
            liEl.innerHTML = todo.todoText;
            ulEl.appendChild(liEl);
        });

        return ulEl;
    }
}