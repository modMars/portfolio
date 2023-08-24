const header = document.querySelector('header')
const sectionOne = document.querySelector('.main__landing')
const hidden = document.querySelectorAll('.hidden')

const sectionOneOptions = {
	rootMargin: '-200px',
}
const hiddenOptions = {
	threshold: 1.0,
}

const hiddenObserver = new IntersectionObserver((entries, hiddenObserver) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('shown')
		}
	})
}, hiddenOptions)

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			header.classList.add('solid-bg')
		} else {
			header.classList.remove('solid-bg')
		}
	})
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
hidden.forEach(hidden => {
	hiddenObserver.observe(hidden)
})
