// login
const modal = document.querySelector('.user-box-wrapper');
const modalBoxes = document.querySelectorAll('.user-box-wrapper .user-box');
const userForm = document.querySelector('#userName');
const inputName = userForm.querySelector('input');
const guest = document.querySelector('.guest');
const userName = document.querySelector('.title span');
const savedName = localStorage.getItem('userName');
const logout = document.querySelector('.logout > button');
const logoutTabDevice = document.querySelector('.logout .tab-device');

const TOOPTIP_TAB_DEVICE_CLASS = '.tab-device';

const login = {
	checkLogined: function(){
		if(savedName !== null)
			login.printMain(savedName);
		else
			modalBox.init('show','login');
	},
	saveUser: function(e){
		e.preventDefault();
		const name = e.type === 'submit' ? inputName.value : 'Neighbor';
		login.printMain(name);
	},
	printMain: function(name){
		localStorage.setItem('userName',name);
		userName.innerHTML = `&grave;&commat;${name}&acute;`;
		modalBox.init('hide');
	},
	logoutUser: function(e){
		const clickedDesktop = e.currentTarget.classList.contains('desktop'); 
		const clickedTabDevice = e.currentTarget.classList.contains('tab-device'); 
		const actionType = e.pointerType; // in desktop : mouse, in tab device : touch
		if( (clickedDesktop && actionType === 'mouse') || (clickedTabDevice) )
			modalBox.init('show','reset-user');
	},
	logoutConfirm: function(){
		function returnConfirm(){
			localStorage.clear();
			modalBox.init('show','login');
		}
		return {exe: returnConfirm};
	},
}

// modal common
const modalBox = {
	init: function(action, boxName){
		modalBoxes.forEach(element => {element.style.display = 'none';});

		if(action === 'show' && boxName !== null){
			modal.style.display = 'flex';
			modalBox.show(boxName);
		}else if(action === 'hide'){
			modal.style.display = 'none';
		}
	},
	show: function(boxName){
		const boxClass = boxName === 'login' ? boxName : 'confirm';
		const targetModal = modal.querySelector(`.${boxClass}`);
		const confirmForm = targetModal.querySelector('.confirm');
		const closeModal = targetModal.querySelector('.cancle');
		let title, ask, confirmFunc;

		targetModal.style.display = 'block';

		if(boxName !== 'login'){ // confirm modal case
			switch(boxName){
				case 'reset-user':
					title = 'Reset &commat;User Name';
					ask = 'Are you sure you want to <strong>clear all mind lists</strong> and rewrite them <strong>with a new name</strong>?';
					confirmFunc = login.logoutConfirm();
				break;
				case 'reset-todo':
					title = 'Reset &num;To do List';
					ask = 'Are you sure you want to <strong>clear all mind lists</strong> and rewrite them?';
					confirmFunc = todoList.resetTodoAll();
				break;
			}

			targetModal.querySelector('h2 .ask').innerHTML= title;
			targetModal.querySelector('p').innerHTML = ask;

			confirmForm.addEventListener('click', confirmFunc.exe);

			closeModal.addEventListener('click', function(){
				modalBox.init('hide');
			});
		}
	},
}

login.checkLogined();
userForm.addEventListener('submit', login.saveUser);
guest.addEventListener('click', login.saveUser);
logout.addEventListener('click', login.logoutUser);
logoutTabDevice.addEventListener('click', login.logoutUser);
