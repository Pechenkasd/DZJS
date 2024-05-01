const fileInput = document.querySelector('#file')
const slides = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const closeImg = document.querySelector('.close-img-icon')
const deleteBtn = document.querySelector('.close')

let imgfiles = []
let currentSlides = 0

fileInput.onchange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return alert("Файл не выбран")
    imgfiles = imgfiles.concat(files)
    console.log(files, 'ggg')

    imgfiles.forEach((file, index) => {
        const imgURL = URL.createObjectURL(file)
        const slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgURL}" alt="Slide ${index + 1}">`
        slides.appendChild(slide)
    })
    showSlides(currentSlides)
}

function showSlides(index) {
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) => slide.style.display = i === index ? "block" : "none")
}

prevButton.addEventListener('click', () => {
    if (currentSlides >= 0) {
        currentSlides--
        showSlides(currentSlides)
    }
})

nextButton.addEventListener('click', () => {
    if (currentSlides <= imgfiles.length - 1) {
        currentSlides++
        showSlides(currentSlides)
    }
})

deleteBtn.addEventListener('click', () => {
    imgfiles.splice(currentSlides, 1)

    slides.innerHTML = ''
    imgfiles.forEach((file, index) => {
        const imgURL = URL.createObjectURL(file)
        const slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgURL}" alt="Slide ${index + 1}">`
        slides.appendChild(slide)
    })
    if (currentSlides > 0) {
        return currentSlides--
    }
    if (currentSlides === 1) {
        return currentSlides++
    }
    showSlides(currentSlides)
    if (imgfiles.length === 1) {
        return closeImg.style.display = 'none'
    }
})