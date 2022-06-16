const todoForm = document.querySelector('#InsertTodo');
const nowTime = document.querySelector('#clock');
const targetList = document.querySelector('.list-wrapper ul.todo');
const TODO_KEY = 'todo';
let todoObject = [];

const todoList = {
	submit: function(e){
		e.preventDefault();

		const mindInput = this.querySelector('.write-todo');
		const mindText = mindInput.value;
		const newTodo = {
			doing: mindText,
			date: nowTime.innerText,
			id: Date.now()
		}

		mindInput.value = '';
		todoList.printTodoList(newTodo); // print todo li to note list
		todoObject.push(newTodo);
		todoList.saveTodo(); // save todo li to local storage
		
		mindInput.placeholder = "What's Ur purpose, today? click update button or press Enter";
	},
	deleteTodo: function(e){
		e.preventDefault();
		const li = e.target.parentElement;
		li.remove();
		todoObject = todoObject.filter(toDo => toDo.id !== parseInt(li.id));
		todoList.saveTodo();
	},
	saveTodo: function(){
		localStorage.setItem(TODO_KEY, JSON.stringify(todoObject));
	},
	checkSavedTodo: function(){
		const storage = JSON.parse(localStorage.getItem(TODO_KEY));
		return storage !== null ? storage : [];
	},
	printTodoList: function(newTodo){
		// print todo li to note list
		const li = document.createElement('li');
		const doing = document.createElement('span');
		const date = document.createElement('span');
		const deletButton = document.createElement('button');

		doing.classList.add('do');
		date.classList.add('date');
		deletButton.classList.add('del');
		deletButton.innerText = '✕';

		li.id = newTodo.id;
		doing.innerText = newTodo.doing;

		const dateString = newTodo.date;
		date.innerText = dateString.replace('#','');

		li.appendChild(doing);
		li.appendChild(deletButton);
		li.appendChild(date);
		targetList.appendChild(li);
		li.querySelector('.del').addEventListener('click',todoList.deleteTodo);
	},
	printSavedTodo: function(){
		todoObject = todoList.checkSavedTodo();
		if(todoObject){
			todoObject.forEach(todoList.printTodoList);
		}
	}
};

todoList.printSavedTodo();
todoForm.addEventListener('submit',todoList.submit);