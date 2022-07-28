const navSlider = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {

        //Toggle Nav//
        nav.classList.toggle('nav-active');

         //Animate Links//

        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
              link.style.animation=''
            }
            else {
              link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 2}s`;} 
    });

    //Burger Animation//
       burger.classList.toggle('xmove');
  });
            

       

}

navSlider();




//Sticky Nav Bar  //
 window.onscroll = function() {navStay()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function navStay() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

navStay();

