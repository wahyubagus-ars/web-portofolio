/*===== SHOW MENU =====*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')  
        })
    }
}

showMenu('navToggle', 'navMenu')
/*===== REMOVE MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')
console.log(sections);
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')
        else document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link')
    })
}
window.addEventListener('scroll', scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 

function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*===== SHOW SCROL TOP =====*/ 

function scrollTop(){
    const scrollTop = document.getElementById('scrollTop')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portofolio-container', {
    selectors: {
        target: '.portofolio-content'
    },
    animation: {
        duration: 400
    }
});

const linkPortofolio = document.querySelectorAll('.portofolio-item')

function activePortofolio(){
    if (linkPortofolio) {
        linkPortofolio.forEach(l => {
            l.classList.remove('active-portofolio')
            this.classList.add('active-portofolio')
        })
    }
}
linkPortofolio.forEach(l => l.addEventListener('click', activePortofolio))

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 


