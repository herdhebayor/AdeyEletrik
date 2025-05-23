/** @format */

const navToggler = document.getElementById('toggler')
const navBarCollapse = document.getElementById('navbar-collapse')
const closeCollapse = document.getElementById('close')
const userLoggedIn = document.getElementById('userLoggedIn')
const userLoggedInCollapse = document.getElementById('userLoggedIn-collapse')
const loggedIn = localStorage.getItem('isLoggedIn')

navToggler.addEventListener('click', () => {
	navBarCollapse.classList.add('show')
})
closeCollapse.addEventListener('click', () => {
	navBarCollapse.classList.remove('show')
})

//Check if user have logged in

function userIsLoggedIn(){
	const formData = localStorage.getItem('formData')
	const parsedData = JSON.parse(formData)
	console.log(loggedIn)
	const username = document.getElementById('userName')
	const usernameCollapse = document.getElementById('userName-collapse')
	if(loggedIn === "true"){
		
		username.innerHTML = parsedData.firstName[0];
		usernameCollapse.innerHTML =  parsedData.firstName[0];
		userLoggedIn.style.display = 'block'
		userLoggedInCollapse.style.display = 'block'
		document.getElementById('nav-btn').style.display = 'none'
		document.getElementById('nav-btn-collapse').style.display = 'none'
	}else{
		console.log('trues')
		username.innerHTML = ''
		usernameCollapse.innerHTML = ''
		userLoggedIn.style.display = 'none'
		userLoggedInCollapse.style.display = 'none'
		document.getElementById('nav-btn').style.display = 'block'
		document.getElementById('nav-btn-collapse').style.display = 'block'
	}
}
window.addEventListener('DOMContentLoaded', userIsLoggedIn);

//Show log out button
const caret = document.getElementById('caret')
const collapseCaret = document.getElementById('caret-collapse')
caret.addEventListener('click', ()=>{
	const btn = document.getElementById('caret-drop')
	btn.classList.toggle('show')
})


collapseCaret.addEventListener('click', () => {
	const btn = document.getElementById('caret-drop-collapse')
	btn.classList.toggle('show')
})

document.getElementById('logout-btn').addEventListener('click', logoutUser)
document.getElementById('logout-btn-collapse').addEventListener('click', logoutUser)

function logoutUser(){
	localStorage.setItem('isLoggedIn', "false")
	console.log('User logged out')
}
