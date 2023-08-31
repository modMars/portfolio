// import './assets/alex512.png'
import pdf from './assets/CV_Alejandro-Salcido.pdf'
import './assets/cv.svg'
import './modules/form.js'
import './modules/scroll.js'
import './styles/animations.css'
import './styles/normalize.css'
import './styles/style.css'

const menu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.nav__menu')
menu.addEventListener('click', e => {
	e.preventDefault()
	if (navMenu.classList.contains('enabled')) {
		navMenu.classList.remove('enabled')
		navMenu.classList.add('closed')
	} else {
		navMenu.classList.add('enabled')
		navMenu.classList.remove('closed')
	}
})

document.addEventListener('click', e => {
	if (e.target !== navMenu && e.target !== menu) {
		if (navMenu.classList.contains('enabled')) {
			navMenu.classList.remove('enabled')
			navMenu.classList.add('closed')
		}
	}
})

function smoothScroll(target) {
	const element = document.querySelector(target)
	element.scrollIntoView({
		behavior: 'smooth',
	})
}

document.querySelectorAll('.nav__link').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault()
		if (window.innerWidth <= 1011) {
			navMenu.classList.remove('enabled')
			navMenu.classList.add('closed')
		}
		event.preventDefault()
		const target = event.target.getAttribute('href')
		smoothScroll(target)
	})
})

const cvBtn = document.querySelectorAll('.cv')
cvBtn.forEach(e => {
	e.addEventListener('click', () => {
		window.open(pdf)
	})
})
