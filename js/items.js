//新增localstorage
function add2(e){
  let item_id = Date.now();
  let itemsContent = e.target.parentNode.querySelector('h2').innerHTML
  let task = {    
    "item_id": item_id,
    "name": itemsContent, 
    "count": 1,
    "price": 350
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


let itemsButton = document.getElementsByClassName('main')[0].querySelectorAll('input');
console.log(itemsButton)
for(let i = 0; i < itemsButton.length; i++){
  itemsButton[i].addEventListener('click',add2)
}
