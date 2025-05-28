/** @format */

const navToggler = document.getElementById('toggler')
const navBarCollapse = document.getElementById('navbar-collapse')
const closeCollapse = document.getElementById('close')
const userLoggedIn = document.getElementById('userLoggedIn')
const userLoggedInCollapse = document.getElementById('userLoggedIn-collapse')
const loggedIn = localStorage.getItem('isLoggedIn')
const formData = localStorage.getItem('formData')
let parsedData = JSON.parse(formData)
let loggedInValue = loggedIn

navToggler.addEventListener('click', () => {
	navBarCollapse.classList.add('show')
})
closeCollapse.addEventListener('click', () => {
	navBarCollapse.classList.remove('show')
})

//Check if user have logged in

function userIsLoggedIn() {
	console.log(loggedIn)
	const username = document.getElementById('userName')
	const usernameCollapse = document.getElementById('userName-collapse')
	if (loggedInValue === 'true') {
		username.innerHTML = parsedData.firstName[0]
		document.getElementById('profile-name').innerHTML = parsedData.name
		document.getElementById('role').innerHTML = parsedData.occupation
		document.getElementById('mobile').innerHTML = parsedData.phone
		userLoggedIn.style.display = 'block'
		userLoggedInCollapse.style.display = 'block'
		document.getElementById('nav-btn').style.display = 'none'
		document.getElementById('nav-btn-collapse').style.display = 'none'
	} else {
		username.innerHTML = ''
		document.getElementById('profile-name').innerHTML = ''
		document.getElementById('role').innerHTML = ''
		document.getElementById('mobile').innerHTML = ''
		userLoggedIn.style.display = 'none'
		userLoggedInCollapse.style.display = 'none'
		document.getElementById('nav-btn').style.display = 'block'
		document.getElementById('nav-btn-collapse').style.display = 'block'
	}
}
window.addEventListener('DOMContentLoaded', userIsLoggedIn)

//Log out user
const logoutBtn = document.querySelectorAll('.logout-btn')
logoutBtn.forEach((btn) => btn.addEventListener('click', logoutUser))

function logoutUser() {
	loggedInValue = false
	localStorage.setItem('isLoggedIn', loggedInValue)
	window.location.reload()
	console.log(loggedInValue)
}
