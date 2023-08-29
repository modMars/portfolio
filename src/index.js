// import './assets/alex512.png'
import pdf from './assets/CV_Alejandro-Salcido.pdf'
import './assets/alex600.webp'
import './assets/calculator800.webp'
import './assets/cv.svg'
import './assets/library800.webp'
import './assets/nav-bg.svg'
import './assets/todo800.webp'
import './assets/weather800.webp'
import './modules/form.js'
import './modules/scroll.js'
import './styles/animations.css'
import './styles/normalize.css'
import './styles/style.css'

const menu = document.querySelector('.nav__menu-hamburger')
const navMenu = document.querySelector('.nav__menu')
menu.addEventListener('click', e => {
	e.preventDefault()
	if (navMenu.classList.contains('enabled')) {
		navMenu.classList.remove('enabled')
		navMenu.classList.add('closed')
	} else {
		navMenu.classList.remove('closed')
		navMenu.classList.add('enabled')
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

document.addEventListener('click', e => {
	if (e.target !== navMenu && e.target !== menu) {
		if (navMenu.classList.contains('enabled')) {
			navMenu.classList.remove('enabled')
			navMenu.classList.add('closed')
		}
	}
})

const cvBtn = document.querySelector('.cv')
cvBtn.addEventListener('click', () => {
	window.open(pdf)
})

// const portraitImage = document.getElementById('portrait')
// portraitImage.src = alexImage
