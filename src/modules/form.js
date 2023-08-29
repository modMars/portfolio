const form = document.getElementById('form')
const wrapper = document.getElementById('popup-container')
const result = document.getElementById('popup-message')
const statusIcon = document.getElementById('status-icon')

form.addEventListener('submit', function (e) {
	e.preventDefault()
	const formData = new FormData(form)
	const object = Object.fromEntries(formData)
	const json = JSON.stringify(object)
	// result.innerHTML = 'Please wait...'

	fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: json,
	})
		.then(async response => {
			let json = await response.json()
			if (response.status == 200) {
				wrapper.style.display = 'flex'
				statusIcon.className = 'fa-solid fa-circle-check'
				result.textContent = json.message
			} else {
				console.log(response)
				wrapper.style.display = 'flex'
				statusIcon.className = 'fa-solid fa-circle-check'
				result.textContent = json.message
			}
		})
		.catch(error => {
			console.log(error)
			result.textContent = 'Oops! Something went wrong.'
			statusIcon.className = 'fa-solid fa-circle-exclamation'
		})
		.then(function () {
			form.reset()
			setTimeout(() => {
				wrapper.style.display = 'none'
			}, 3000)
		})
})
