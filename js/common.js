let button = document.getElementsByClassName("search")[0].querySelector('img');
// console.log(button)
let searchBlock = document.getElementById('search-block');
// console.log(searchBlock)
let value = searchBlock;
button.addEventListener("click",function(){
  if(searchBlock.classList.contains('hide')){
    searchBlock.classList.remove('hide');
    button.classList.add('hide');
  }

})
document.addEventListener("dblclick",function(){
  if(button.classList.contains('hide')){
    button.classList.remove('hide')
    searchBlock.classList.add('hide');
  }
})


let header = document.querySelector("header");
// console.log(header)
let lastScrollY = 0;
window.addEventListener('scroll',function(){
  // console.log("ji");
  let st = this.scrollY;
  // console.log(st)
  if( st > lastScrollY) {
    header.classList.add('hideUp');
  }else{
    header.classList.remove('hideUp');
  }
  lastScrollY = st;
})






//header ham icons

let fa = document.getElementsByClassName('fa')[0];
let header_list = document.getElementsByClassName('header-list')[0];
console.log(header_list)
fa.addEventListener('click',function(){
  if(header_list.classList.contains('hideHam')){
    header_list.classList.remove('hideHam');
  }else{
    header_list.classList.add('hideHam')
  }
})
document.addEventListener('scroll',function(){
  if(!header_list.classList.contains('hideHam')){
    header_list.classList.add('hideHam');
  }
})
window.onload=function(){
  if(!header_list.classList.contains('hideHam')){
    header_list.classList.add('hideHam');
  }
}

//localstorage
//讀取至購物車ICONS
function icon(){
  let tasks = JSON.parse(window.localStorage.getItem("tasks"));
  let list = tasks.length;
  let shopCount = document.getElementsByClassName('shopCount')[0];
  let mobileshopCount = document.getElementsByClassName('mobileshopCount')[0];
  mobileshopCount.innerHTML = list;
  shopCount.innerHTML = list
}
icon();