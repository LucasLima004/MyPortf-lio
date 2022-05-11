const target = document.querySelectorAll('[data-anime]');
const animeScroll = ()=>{
 
let windowTop = window.pageYOffset + (window.innerHeight * 0.75 ||
     document.body.clientHeight * 0.75 || 
     document.documentElement.clientHeight * 0.75);
   
    target.forEach(function(element){
     (windowTop) > element.offsetTop 
     ? element.classList.add('animate') : element.classList.remove('animate')
    })
   
}
   
window.addEventListener('scroll', animeScroll);


function getElement(element){
   const div = document.getElementById("aboutCard")
   if(element==1){
      div.innerText = "Graphic design projects, logo creation, animations, 3d design projects, texturing, graphic arts and visual identity."
      div.classList.add('animate')
   }else if(element==2){
      div.innerText = "Full-stack programming, with an emphasis on front-end and web design projects, as well as back-end programming, which is server-oriented programming, and database programming, where information is worked on.";
      div.classList.add('animate')
   }else if(element==3){
      div.innerText = "Mechanical designs developed in 3d form, technical drawings, electrical circuits and schematic drawings."
      div.classList.add('animate')
   }else{
      div.innerText = ""
   }
}
