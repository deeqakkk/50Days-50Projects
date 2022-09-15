const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

// Invoking the getData() function with a delay of 2000ms
setTimeout(getData, 2000)

// Function have the simplest functionality i.e to update the HTML empty content with the actual content
function getData() {
    header.innerHTML =
        '<img src="https://cdn.pixabay.com/photo/2022/09/08/02/30/purple-flower-7439907_960_720.jpg" alt="flower" />'
    title.innerHTML = 'Flower in the field'
    excerpt.innerHTML =
        'Nature is beautiful. It is a gift from God. We should take care of it.'
    profile_img.innerHTML =
        '<img src="https://cdn.pixabay.com/photo/2022/09/08/01/43/blue-tit-7439864_960_720.jpg" alt="bird" />'
    name.innerHTML = 'Sparrow P'
    date.innerHTML = '21/09/2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
