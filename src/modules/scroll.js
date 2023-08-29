const header = document.querySelector('header')
const sectionOne = document.querySelector('.main__landing')
const hidden = document.querySelectorAll('.hidden')
const links = document.querySelectorAll('.nav__link')

const sectionOneOptions = {
	threshold: 0.9,
}
const hiddenOptions = {
	threshold: 0.6,
}

const hiddenObserver = new IntersectionObserver((entries, hiddenObserver) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('shown')
		}
	})
}, hiddenOptions)

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
	if (window.innerWidth > 1011) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				header.classList.add('solid-bg')
			} else {
				header.classList.remove('solid-bg')
			}
		})
	}
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
hidden.forEach(hidden => {
	hiddenObserver.observe(hidden)
})
