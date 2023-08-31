const form = document.getElementById('form')
const wrapper = document.querySelector('.popup-wrapper')
const result = document.querySelector('.popup-message')
const statusIcon = document.querySelector('.status-icon')

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
				statusIcon.className = 'fa-solid fa-circle-check status-icon'
				result.textContent = json.message
				wrapper.className = 'popup-wrapper open'
			} else {
				wrapper.className = 'popup-wrapper closed'
				statusIcon.className = 'fa-solid fa-circle-check status-icon'
				result.textContent = json.message
			}
		})
		.catch(error => {
			console.log(error)
			result.textContent = 'Oops! Something went wrong.'
			statusIcon.className = 'fa-solid fa-circle-check status-icon'
			wrapper.className = 'popup-wrapper closed'
		})
		.then(function () {
			form.reset()
			setTimeout(() => {
				wrapper.className = 'popup-wrapper closed'
			}, 3000)
		})
})
