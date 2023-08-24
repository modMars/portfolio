// import './assets/alex512.png'
import './assets/alex600.webp'
import './assets/library800.webp'
import './assets/todo800.webp'
import './assets/weather800.webp'
import './modules/form.js'
import './modules/scroll.js'
import './styles/normalize.css'
import './styles/style.css'

const menu = document.querySelector('.fa-bars')
menu.addEventListener('click', e => {
	e.preventDefault()
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

// const portraitImage = document.getElementById('portrait')
// portraitImage.src = alexImage
