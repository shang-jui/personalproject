let scrollDiv = document.querySelectorAll(".block")
console.log(scrollDiv)

for(let i =0 ; i < scrollDiv.length; i++){
  scrollDiv[i].style.opacity="0"
}

function checkSlide() {
  for(let i =0 ; i < scrollDiv.length; i++){
    const slideInAt = (window.scrollY + window.innerHeight) - scrollDiv[i].offsetHeight / 2;
    const isHalfShown = slideInAt > scrollDiv[i].offsetTop;
    if(isHalfShown ) {
      scrollDiv[i].style.opacity="1"
    } else {
      scrollDiv[i].style.opacity="0"
    }
  }
}
window.addEventListener('scroll', checkSlide);