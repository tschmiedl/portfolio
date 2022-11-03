// Pages function below
const pages = document.getElementsByTagName('section')
const buttons = document.getElementsByClassName('navbuttons')

function onClickHandle(event){
    
    const pageId = event.target.innerText.toLowerCase()
    

for (let i = 0; i < pages.length;i++){
    if (pageId === pages[i].id){
        pages[i].className = 'current-page'
    }
    else {
        pages[i].className = 'hidden-page'
    }
    
}}
for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', onClickHandle)
}

// Used JQuery Background Image Carousel
// Got this method from https://stackoverflow.com/questions/57548709/how-do-i-make-my-background-into-a-auto-slideshow-carousel
$.backstretch([
    "./images/bluegrey.jpeg",
    "./images/brownhorse.jpeg",
    "./images/green.jpeg",
    "./images/green2.jpeg",
    "./images/redboat.jpeg"
  ], {
      duration: 4000,
      transition: 'fade|fade|fade|fade|fade',
      transitionDuration: 400
  });







