const aboutMeBtn = document.getElementById('aboutmebtn')

const aboutMeTextBox = document.getElementById('aboutmetext')
aboutMeTextBox.style.display="none"

const workExperienceBtn = document.getElementById('workexperiencebtn')

const workExperienceTextBox = document.getElementById('workexperiencetext')
workExperienceTextBox.style.display="none"


// Button that opens up about me div 
aboutMeBtn.addEventListener('click', () => {
    aboutMeTextBox.style.display="block";
}

)
workExperienceBtn.addEventListener('click', () => {
    workExperienceTextBox.style.display="block";
})