/** @format */

const username = document.getElementById('username')
const password = document.getElementById('password')
const error = document.getElementById('error-box')
const passwordToggle = document.getElementById('password-toggler')
const isLoggedIn = false
let userIsLoggedIn = localStorage.getItem('isLoggedIn')


document.getElementById('login-form').addEventListener('submit', (e) => {
	e.preventDefault()
	console.log('submit')
	const formData = localStorage.getItem('formData')
	if (formData && formData !== '') {
		const parsedData = JSON.parse(formData)
		if ( username.value !== parsedData.email) {
			error.innerHTML = 'incorrect username '
			return
		} else {
			error.innerHTML = ''
		}
		if (password.value !== parsedData.password) {
			error.innerHTML = 'incorrect  password'
			return
		} else {
			error.innerHTML = ''
		}
	} else {
		error.innerHTML = 'user not found please sign up'
		return
	}
	userIsLoggedIn = true
	localStorage.setItem('isLoggedIn', userIsLoggedIn)
	window.location.href = './index.html'
})


	passwordToggle.addEventListener('click', function () {
		togglePasswordVisibility()
	})

function togglePasswordVisibility() {
	const passwordInput = document.getElementById('password')

	if (passwordInput.type === 'password') {
		passwordInput.type = 'text'
		passwordToggle.classList.replace('bi-eye', 'bi-eye-slash')
	} else {
		passwordInput.type = 'password'
		passwordToggle.classList.replace('bi-eye-slash', 'bi-eye')
	}
}
