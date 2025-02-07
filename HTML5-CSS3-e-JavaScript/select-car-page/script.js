let prevButton = document.querySelector('#prev')
let nextButton = document.querySelector('#next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOLd = container.querySelector('.list .item.active')
    itemOLd.classList.remove('active')

    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.number').textContent = '0' + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty('---calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    list.style.setProperty('---calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}

