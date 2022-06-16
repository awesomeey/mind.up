const todoList = {
	nowTime: document.querySelector('#clock'),
	thisForm: document.querySelector('#InsertTodo'),
	insertInput: document.querySelector('#InsertTodo input#todoWrite'),
	targetList: document.querySelector('.todo-list-wrapper ul.todo-list'),
	targetTemp: document.querySelector('.todo-list-wrapper template'),
	deletButton: document.querySelector('.todo-list-wrapper .del'),
	submit: function(e){
		e.preventDefault();

		const mindInput =  e.target[0];
		const cloneTemp = todoList.targetTemp.cloneNode(true);
		const mindText = mindInput.value;
		const time = todoList.nowTime.innerText;

		mindInput.value = '';

		if(mindText !== ''){
			const updateMind = document.createElement('li');
			const replaceMind = cloneTemp.innerHTML.replace('*do*',mindText).replace('*date*',time);

			updateMind.innerHTML = replaceMind;
			todoList.targetList.appendChild(updateMind);
			updateMind.querySelector('.del').addEventListener('click',todoList.delete);
		}else{
			mindInput.placeholder = 'insert Ur mind! whatever ;-)'
			mindInput.focus();
		}
	},
	delete: function(e){
		e.preventDefault();
		e.target.parentElement.remove();
	}
};

document.querySelector('template').remove();
todoList.thisForm.addEventListener('submit',todoList.submit);