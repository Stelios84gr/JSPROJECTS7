const titleDOM = document.getElementById('title')
const auebTextDOM = document.querySelector('.aueb-text')
const main = document.querySelector('.main')
let image = 'https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png'
let cfName = 'Coding Factory'

titleDOM.textContent = 'Coding Factory'
auebTextDOM.innerHTML = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
main.innerHTML = `<article class="course">
    <div class="cf-container">
    <img src="${image}" class="cf-img img" alt="${cfName}" />
    </div>
    <footer>
    <p class="course-name">&copy; AUEB - Coding Factory</p>
    </footer>
    </article>
`