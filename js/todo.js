const todoForm = document.querySelector('#InsertTodo');
const nowTime = document.querySelector('#clock');
const targetList = document.querySelector('.list-wrapper ul.todo');
const resetList = document.querySelector('.reset-list');
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
	},
	deleteTodo: function(e){
		e.preventDefault();
		const li = e.target.parentElement.parentElement;
		li.remove();
		todoObject = todoObject.filter(toDo => toDo.id !== parseInt(li.id));
		todoList.saveTodo();
	},
	resetTodoAll: function(){
		function returnConfirm(){
			const liList = document.querySelectorAll('.list-wrapper ul.todo li');
			liList.forEach(element => {element.remove()});
			localStorage.removeItem('todo');
			modalBox.init('hide');
		}
		return {exe: returnConfirm};
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
		const wrapper = document.createElement('div');
		const doing = document.createElement('span');
		const date = document.createElement('span');
		const deletButton = document.createElement('button');

		wrapper.classList.add('box-wrapper');
		doing.classList.add('do');
		date.classList.add('date');
		deletButton.classList.add('del');
		deletButton.innerText = '✕';

		li.id = newTodo.id;
		doing.innerText = newTodo.doing;

		const dateString = newTodo.date;
		date.innerText = dateString.replace('#','');

		wrapper.appendChild(doing);
		wrapper.appendChild(deletButton);
		li.appendChild(wrapper);
		li.appendChild(date);
		targetList.appendChild(li);
		li.querySelector('.del').addEventListener('click',todoList.deleteTodo);

		responsiveMain(); // function in random.js > To check whether the list element overflows the document height whenever the list count is added.
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
resetList.addEventListener('click',function(){
	modalBox.init('show','reset-todo');
});