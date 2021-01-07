let all = document.getElementsByClassName("main-article")[0].querySelectorAll('li')
console.log(all)
let blog = document.getElementById("blog")


blog.addEventListener("click",function(e){
  let a = e.target.getAttribute("class")
  console.log(a)
  for(let i = 0; i < all.length; i++){
    if(all[i].classList.contains("off")){
      all[i].classList.remove("off")
    }
    if(a == null){
      all[i].classList.remove("off")
    }else if(a != all[i].getAttribute("class")){
      all[i].classList.add("off")
    }
  }

  
})