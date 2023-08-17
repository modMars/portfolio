import './assets/bg.jpg'
import './modules/form.js'
import './styles/normalize.css'
import './styles/style.css'

function smoothScroll(target) {
	const element = document.querySelector(target)
	element.scrollIntoView({
		behavior: 'smooth',
	})
}

document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault()
		const target = event.target.getAttribute('href')
		smoothScroll(target)
	})
})
