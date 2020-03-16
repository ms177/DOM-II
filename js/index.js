// Your code goes here
// Change title to purple on hover

const title = document.querySelector('.nav-container h1');



window.addEventListener('mouseover', () => {

  title.style.color = 'purple';

});



// Change nav text color and background on hover .

const navLinks = document.querySelectorAll('.nav-link');



navLinks.forEach(link => {

  link.addEventListener('mouseover', (event) => {

    event.target.style.color = 'green';

    event.target.style.background = 'coral';

  });

  link.addEventListener('mouseout', (event) => {

    event.target.style.color = 'black';

    event.target.style.background = 'white';

  });

});



// Make header image larger on click

const headerImg = document.querySelector('.intro img');



headerImg.addEventListener('mouseclick', (event) => {

  gsap.to(event.target, { scale: 1.2, duration: 3 });

});



headerImg.addEventListener('mouseleave', (event) => {

  // event.target.style.transform = 'scale(1)';



  gsap.to(event.target, { scale: 1, duration: 1 });

});



// Change paragraph text color to pink when clicked

const pText = document.querySelectorAll('p');



pText.forEach(p => {

  p.addEventListener('click', (event) => {

    event.target.style.color = 'pink';

  });

});



// Change header font when double clicked

const headers = document.querySelectorAll('h2');



headers.forEach(header => {

  header.addEventListener('dblclick', (event) => {

    event.target.style.fontFamily = 'Arial Black';

  });

});



// Make body background color black while a key is pressed

const body = document.querySelector('body');



body.addEventListener('keydown', (event) => {

  event.target.style.background = 'black';

});



body.addEventListener('keyup', (event) => {

  event.target.style.background = 'white';

});



// Make the images change on window resize

images = document.querySelectorAll('img');



window.addEventListener('resize', () => {

  images.forEach(img => {

    img.style.width = '50%';

  });

});



// Prevent event propogation



const contentSection = document.querySelector('.content-section');



contentSection.addEventListener('click', () => {

  contentSection.style.background = 'teal';

});



const textContent = document.querySelector('.text-content');



textContent.addEventListener('click', (event) => {

  event.target.style.background = 'yellowgreen';

  event.stopPropagation();

});



// Stop nav items from refreshing page



navLinks.forEach(link => {

  link.addEventListener('click', (event) => {

    event.preventDefault();

  });

});