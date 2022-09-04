const x = window.matchMedia("(max-width: 1000px)")
const body = document.querySelector(".body")
const header3 = document.querySelectorAll('.header-3')
const list = document.querySelector('.nav_bar__list')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const bodyInput = document.getElementById('bodyInput')
const sendbtn = document.querySelector('.contact__btn');
//////fade out animation
AOS.init();




///////remove loader
function removeLoader(){

setTimeout(()=>{
 let loader = document.getElementById('loader');

// hide the loader
loader.style = 'display: none;';
},1000)}




window.addEventListener('resize' , function () {
    template(langInput.value)
})

new Typed('.second-text',{
    strings: ['Alireza Eidivandi' , 'Freelancer' , 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})



    
];
