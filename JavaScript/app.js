// Pages function below, courtesy of Scott's lesson.
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

// Open resume link in new window 
const resumeLink = document.getElementById('resumelink')
resumeLink.setAttribute('href', 'TannerSchmiedlResume.pdf')
resumeLink.setAttribute('target','_blank')
resumeLink.innerText = "Resume"



// Added email link
const emailH4 = document.getElementById('emailh4')
const emailLink = document.createElement('a')
emailLink.innerText = 'Email'
emailLink.setAttribute('href', 'mailto:tschmiedl@me.com')
emailLink.setAttribute('target', '_blank')
emailH4.prepend(emailLink)










