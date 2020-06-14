const commercial = document.querySelector('.commercial')
const medical = document.querySelector('.medical')
const nav = document.querySelector('nav')
const navRightContainer = document.querySelector('.nav__right__container')
const navRightLink = document.querySelector('.nav__right__link')
const content = document.querySelector('.content')
const contentContainer = document.querySelector('.content__container')

const navTrigger = document.querySelector('.navTrigger')


document.addEventListener("DOMContentLoaded", () => {
    getCurrentLink()
    getCurrentSection()
    mobileNav()

})


function getCurrentSection() {
    let currentSection = "commercial"

    nav.addEventListener('click', (e) => {

        if(e.target.classList[0] === 'commercial' && currentSection === "medical"){
            currentSection = "commercial"
                commercial.classList.toggle('nav__left__list__item--current')
                medical.classList.toggle('nav__left__list__item--current')

                navRightContainer.innerHTML = ` <div class="nav__right__link nav__right__link--current"     id="about-link"                ><p>About the Disease</p></div>
                                                <div class="nav__right__link"                               id="diagnosing-link"           ><p>Diagnosing the Disease</p></div>
                                                <div class="nav__right__link"                               id="speaker-link"              ><p>Speaker Program</p></div>
                                                <div class="nav__right__link"                               id="commercial-lit-link"       ><p>Literature</p></div>
                                                <div class="nav__right__link"                               id="contact-us-link"           ><p>Contact Us</p></div>`
            getCurrentLink()

        } else if(e.target.classList[0] === 'medical' && currentSection === "commercial"){
            currentSection = "medical"
                commercial.classList.toggle('nav__left__list__item--current')
                medical.classList.toggle('nav__left__list__item--current')

                navRightContainer.innerHTML = ` <div class="nav__right__link nav__right__link--current"     id="pipeline-link"              ><p>Pipeline & MOA Panels</p></div>
                                                <div class="nav__right__link"                               id="clinical-link"              ><p>Clinical Trial Panels</p></div>
                                                <div class="nav__right__link"                               id="moa-link"                   ><p>MOA</p></div>
                                                <div class="nav__right__link"                               id="mirf-link"                  ><p>MIRF</p></div>
                                                <div class="nav__right__link"                               id="medical-lit-link"           ><p>Literature</p></div>`
            getCurrentLink()
        }

    })
}

function getCurrentLink() {
    let navLinks = navRightContainer.getElementsByClassName("nav__right__link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("nav__right__link--current");
            current[0].className = current[0].className.replace(" nav__right__link--current", "");
            this.className += " nav__right__link--current";

        });
    }
}

function mobileNav() {

    navTrigger.addEventListener('click', (e) => {

        navTrigger.classList.toggle('active')
        nav.classList.toggle('mobile-nav-closed')
    })
}

function showContentAndCloseNav() {
    content.classList.remove('hide')
    nav.classList.toggle('mobile-nav-closed')
}
