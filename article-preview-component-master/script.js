document.querySelector('.btn-emu').addEventListener("click", () => {
  document.querySelector('.social').classList.toggle('hide')
  return false
})

document.querySelector('.btn-emu').addEventListener("dbclick", () => {
  return false
})

document.querySelector('.btn-emu').addEventListener("mouseenter", () => {
  document.querySelector('#path2').style.fill = "white"
  return false
})

document.querySelector('.btn-emu').addEventListener("mouseleave", () => {
  document.querySelector('#path2').style.fill = "#6E8098"
  return false
})


