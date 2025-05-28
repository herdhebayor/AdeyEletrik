/** @format */
const passwordToggle = document.getElementById('password-toggler')
const confirmPasswordToggle = document.getElementById('confirmPassword-toggler')

// SIGN UP FORM VALIDATION
document
	.getElementById('signup-form')
	.addEventListener('submit', function (event) {
		event.preventDefault()

		let firstName = document.getElementById('firstname').value
		let lastName = document.getElementById('lastname').value
		let email = document.getElementById('email').value
		let sex = document.getElementById('sex').value
		let address = document.getElementById('address').value
		let password = document.getElementById('password').value
		let confirmPassword = document.getElementById('confirmPassword').value
		let phone= document.getElementById('phone').value
		let occupation = document.getElementById('occupation').value
		let passwordError = document.getElementById('passwordError')
		let confirmPasswordError = document.getElementById('confirmPasswordError')

		let passwordValid = validatePassword(password)
		if (!passwordValid) {
			passwordError.textContent = 'Password does not meet the requirements.'
			return
		} else {
			passwordError.textContent = ''
		}

		if (password !== confirmPassword) {
			confirmPasswordError.textContent = 'Passwords do not match!'
			return
		} else {
			confirmPasswordError.textContent = ''
		}

		// Get form data
		 const formData= {
			firstName: firstName,
			lastName: lastName,
			name: firstName + ' ' + lastName,
			email: email,
			password: password,
			sex: sex,
			address: address,
			phone:phone,
			occupation:occupation,
		}
		// Store form data in local storage
		localStorage.setItem('formData', JSON.stringify(formData))

		// Display success message
		document.getElementById('successMessage').style.display = 'block'
		document.getElementById('signup-form').reset() // Reset the form
		document.getElementById('passwordStrength').innerHTML = ''
		setInterval(() => {
			document.getElementById('successMessage').style.display = 'none'
		}, 1000) //Remove success message

		setInterval(() => {
			window.location.href = './log-in.html' // Redirect to login page
		}, 1500)
	})

document.getElementById('password').addEventListener('focus', function () {
	document.getElementById('passwordHint').style.display = 'block'
})

document.getElementById('password').addEventListener('blur', function () {
	document.getElementById('passwordHint').style.display = 'none'
})

document.getElementById('password').addEventListener('input', function () {
	let password = this.value
	let passwordStrength = document.getElementById('passwordStrength')
	let strength = getPasswordStrength(password)

	passwordStrength.innerHTML = '' // Clear previous strength bars
	if (strength) {
		let strengthBar = document.createElement('div')
		strengthBar.className = strength
		passwordStrength.appendChild(strengthBar)
	}
})

function validatePassword(password) {
	let regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
	return regex.test(password)
}

function getPasswordStrength(password) {
	if (password.length < 8) {
		return 'weak'
	}
	if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)) {
		return 'strong'
	}
	return 'medium'
}

// Toggle password visibility
passwordToggle.addEventListener('click', function () {
	togglePasswordVisibility()
})
confirmPasswordToggle.addEventListener('click', function () {
	toggleConfirmPasswordVisibility()
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
function toggleConfirmPasswordVisibility() {
	const confirmPasswordInput = document.getElementById('confirmPassword')

	if (confirmPasswordInput.type === 'password') {
		confirmPasswordInput.type = 'text'
		confirmPasswordToggle.classList.replace('bi-eye', 'bi-eye-slash')
	} else {
		confirmPasswordInput.type = 'password'
		confirmPasswordToggle.classList.replace('bi-eye-slash', 'bi-eye')
	}
}
