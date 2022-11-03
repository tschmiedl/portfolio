// 
const pages = document.getElementsByTagName('section')
const buttons = document.getElementsByClassName('navbuttons')

function onClickHandle(event){
    
    const pageId = event.target.innerText.toLowerCase()
    console.log(pageId)


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






