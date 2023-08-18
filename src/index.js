import './assets/alex.png'
import './assets/bg.jpg'
import './modules/form.js'
import './styles/normalize.css'
import './styles/style.css'

const menu = document.querySelector('.fa-bars')
menu.addEventListener('click', () => {
	const nav = document.querySelector('.nav__menu')
	nav.classList.toggle('enabled')
})

function smoothScroll(target) {
	const element = document.querySelector(target)
	element.scrollIntoView({
		behavior: 'smooth',
	})
}

document.querySelectorAll('nav li a').forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault()
		const target = event.target.getAttribute('href')
		smoothScroll(target)
	})
})
