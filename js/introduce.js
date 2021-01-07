//圖片更換
function changePic(e){
  let picSrc = e.target.getAttribute('src');
  let mainPic=document.getElementById('mainPic').querySelector('img')
  mainPic.setAttribute('src',picSrc)
  
}
let imgblock= document.getElementsByClassName('block');
for(let i =0;i<imgblock.length;i++){
  imgblock[i].addEventListener('click',changePic);
}

let itemsCount ;
let price1;

//選取增加顏色 
function select(e){
  if(e.target.getAttribute('id')){
    e.target.removeAttribute('id')
  }else{
    if(e.target.previousElementSibling==null){
      e.target.nextElementSibling.removeAttribute('id')
      e.target.setAttribute("id",'selectColor')
      //更換數字及價錢
      selectDiv[0].index = 1
      let countOne = selectDiv[0].index
      let Count = document.getElementsByClassName('block-quantity')[0].firstElementChild.querySelector('span')
      let priceDis = document.getElementsByClassName('price')[0].firstElementChild.firstElementChild
      let price = document.getElementsByClassName('price')[0].firstElementChild.lastElementChild
      Count.innerHTML = countOne
      priceDis.innerHTML = '$'+350*(countOne)
      price.innerHTML = 400*(countOne)
      itemsCount = countOne
      price1 = 350*(countOne)
      //更換select數字
      let changeSelect = document.getElementsByClassName("count")[0].querySelector("select")
      changeSelect[1].selected=true;
    }else if(e.target.nextElementSibling==null){
      e.target.previousElementSibling.removeAttribute('id')
      e.target.setAttribute("id",'selectColor')
      //更換數字及價錢
      selectDiv[1].index = 5
      let countFive = selectDiv[1].index
      let Count = document.getElementsByClassName('block-quantity')[0].firstElementChild.querySelector('span')
      let priceDis = document.getElementsByClassName('price')[0].firstElementChild.firstElementChild
      let price = document.getElementsByClassName('price')[0].firstElementChild.lastElementChild
      Count.innerHTML = countFive
      priceDis.innerHTML = '$'+350*(countFive)
      price.innerHTML = 400*(countFive)
      let changeSelect = document.getElementsByClassName("count")[0].querySelector("select")
      changeSelect[5].selected=true;
      itemsCount = countFive
      price1 = 350*(countFive)
    }
    
  }
}
let selectDiv = document.getElementsByClassName('block-quantity')[0].querySelector('div').querySelectorAll('span');
for(let i = 0; i < selectDiv.length;i++){
  selectDiv[i].addEventListener('click',select)
}

//價格及數量更換
let item_id = Date.now();
let content = document.getElementsByClassName('intro-blockright')[0].querySelector('h2').innerHTML;

function changeCount(e){
  let Count = document.getElementsByClassName('block-quantity')[0].firstElementChild.querySelector('span')
  let countDiv = document.getElementsByClassName('count')[0].querySelector('select')
  let priceDis = document.getElementsByClassName('price')[0].firstElementChild.firstElementChild
  let price = document.getElementsByClassName('price')[0].firstElementChild.lastElementChild
  Count.innerHTML = countDiv.value
  itemsCount = countDiv.value
  priceDis.innerHTML = '$'+350*(countDiv.value)
  price1 = 350*(countDiv.value)
  price.innerHTML = 400*(countDiv.value)
}




//輪播圖
function slidePic(offset){
  let picAll = document.getElementsByClassName('relative-pro')[0].querySelector('ul')

  let newLeft = parseInt(picAll.style.left)+offset;

  if(newLeft<-2*(liWidth.offsetWidth)){
    picAll.style.left = -liWidth+"px";
  }else if(newLeft>0){
    picAll.style.left = 0 +"px";
  }else{
    picAll.style.left = newLeft+"px";
  }

}

let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];
let liWidth = document.getElementsByClassName('relative-pro')[0].querySelector('li')

left.addEventListener('click',function(){
  slidePic(liWidth.offsetWidth);
})
right.addEventListener('click',function(){
  slidePic(-liWidth.offsetWidth);
})

//新增
function add1(e){

  console.log(e.target.parentNode.parentNode.querySelector('span').innerHTML)
  if(e.target.parentNode.parentNode.querySelector('span').innerHTML == 0){
    alert('填入幾項商品')
  }else{
    let task = {    
      "item_id": item_id,
      "name": content, 
      "count": itemsCount,
      "price": price1
    };
    let tasks = JSON.parse(localStorage.getItem("tasks"));
      if(tasks){ // 若存在
        tasks.unshift(task);
      }else{ // 若不存在
        tasks = [task];
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      icon();
  }
}


let shopButton = document.getElementsByClassName('intro-button')[0].querySelectorAll('input');
for(let i = 0;i<shopButton.length;i++){
  shopButton[i].addEventListener('click',add1)
}

