const mainLink = document.getElementById('main-link');
const ddprod = document.getElementById('ddprod');

const mainLinkc = document.getElementById('main-linkc');
const ddcompany = document.getElementById('ddcompany');

const mainLinkct = document.getElementById('main-linkct');
const ddcontact = document.getElementById('ddcontact');

const toggleButton = document.getElementById('toggle-button')
const navItems = document.getElementById('nav-items')

mainLink.addEventListener('click', (e)=>{
    ddprod.classList.toggle('active');
})

mainLinkc.addEventListener('click', (e)=>{
    ddcompany.classList.toggle('active');
})

mainLinkct.addEventListener('click', (e)=>{
    ddcontact.classList.toggle('active');
})

toggleButton.addEventListener('click', () => {
    mainLink.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
    mainLinkc.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
    mainLinkct.classList.toggle('active')
})