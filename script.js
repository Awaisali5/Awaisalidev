
// toggle menu navbar 

const toggleMenu=document.getElementById("menu-icon");

const Navbar=document.querySelector('.navbar');


toggleMenu.onclick = () => {
    toggleMenu.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
}




// scroll section active link 

const sections= document.querySelectorAll('section');

const navLinks=document.querySelectorAll('header nav a');


// to enable the scroll on which section 
window.onscroll = () => {
    sections.forEach(sec =>{

       let top=window.scrollY;
       let offset=sec.offsetTop -150;
       let height=sec.offsetHeight;
       let id=sec.getAttribute('id');
       
       
       if(top >= offset && top <offset + height)
       {
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*= '+id +']').classList.add('active');
        });
       };
    });

    // sticky Navbar 

    let header=document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);


// remove toggle menu &  navbar when click on some link in the menu 

toggleMenu.classList.remove('bx-x');
Navbar.classList.remove('active');

}

//   typed js to multiple text 

var typed = new Typed('.multiple-text',{
    strings : ['Front-End Developer', 'Back-End Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// scroll reveal 
ScrollReveal({
    reset: true,
    distance: '70px',
    duration: 3000,
    delay: 200,
    
});

    ScrollReveal().reveal('.home-content, .heading' ,  { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container, .project-box, .contact form, .project-box' ,  { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img ' ,  { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content ' ,  { origin: 'right' });



