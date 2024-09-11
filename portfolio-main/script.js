// typing text animation script
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer", "Student", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-1", {
    strings: ["", "Web Developer", "Web Designer", "Student", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



//  ARROW SCROLL TO UP
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //    STICKY NAVBAR

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};


//       SCROLL REVEAL

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header', {origin: 'top'});
ScrollReveal().reveal('.main-content, .profile-img, .media-body, .my-skill-card, .my-skills, .skills, .projects, .contact, form', {origin: 'bottom'});