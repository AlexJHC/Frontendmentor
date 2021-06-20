// Variables
let button = document.querySelector('.btn-emu')
let socilMenu = document.querySelector('.social')

// Toggle social menu
button.addEventListener("click", () => {
  socilMenu.classList.toggle('hide')
  return false
})

// Fill collor while social button, white mouse pointer inside 
button.addEventListener("mouseenter", () => {
  document.querySelector('#path2').style.fill = "white"
  return false
})

// Return color to social button, while mouse pointer live 
button.addEventListener("mouseleave", () => {
  document.querySelector('#path2').style.fill = "#6E8098"
  return false
})

// Close social menu if mouse click outside menu or button while menu show
window.onclick = (e) => {
  if (!e.target.matches('div.btn-emu') 
  && !e.target.matches('svg')
  && !e.target.matches('path')
  && !e.target.matches('.social')
  && !socilMenu.classList.contains('hide')) {
    socilMenu.classList.add('hide')
  }
}