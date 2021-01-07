//重整按鈕 觸發取得資料
document.addEventListener("DOMContentLoaded", function(){
  get_tasks();
});


let shopList = document.getElementsByClassName('list')[0];


//取得資料放進網頁
function get_tasks(){
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  if(tasks){
    tasks.forEach(function(item, i){
      let listCount = document.createElement('div');
      listCount.classList = 'listCount';
      listCount.setAttribute("data-id", `${item.item_id}`);
      shopList.appendChild(listCount);

      let name = document.createElement("p");
      name.innerHTML=item.name
      listCount.appendChild(name)
      
      let count = document.createElement('select')
      count.setAttribute('onchange',"shopChange()")
      listCount.appendChild(count)

      for(let i = 1 ; i < 10; i++){
        let countValue = document.createElement("option")
        countValue.setAttribute('value',i)
        countValue.innerHTML = i
        count.appendChild(countValue)
        if(countValue.value == item.count){
          countValue.selected=true;
        }
      }

      let NT = document.createElement('p')
      NT.innerHTML = 'NT.'
      listCount.appendChild(NT)

      let price = document.createElement('span')
      price.innerHTML = 350
      NT.appendChild(price)

      let NTALL = document.createElement('p');
      NTALL.innerHTML = 'NT.'
      listCount.appendChild(NTALL)

      let priceAll = document.createElement('span')
      priceAll.innerHTML = item.price
      NTALL.appendChild(priceAll)

      let deleteImg = document.createElement('div');
      deleteImg.classList = 'deleteImg'
      listCount.appendChild(deleteImg)

      let img = document.createElement('img');
      img.classList = "delete"
      img.setAttribute('src','./img/trash.png')
      deleteImg.appendChild(img)
    
    });
  }
  changePrice();
}

//更新
function shopChange(e){
  // let changePri = document.getElementsByClassName('listCount')[0].querySelectorAll('p')[2].querySelector('span')
  let changePri = document.getElementsByClassName('listCount')
  for(let i = 0; i<changePri.length; i++){
    let changePrice = changePri[i].querySelectorAll('p')[2].querySelector('span')
    let countDiv = changePri[i].querySelector('select').value
    let item_id = changePri[i].getAttribute('data-id')
    changePrice.innerHTML = countDiv * 350
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function(task, i){
      if(item_id == task.item_id){ // id 相同
        tasks[i].count = parseInt(countDiv);
        tasks[i].price = parseInt(changePrice.innerHTML)
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  changePrice();
  // let countDiv = document.getElementsByClassName('listCount')[0].querySelector('select').value
  // let item_id = document.getElementsByClassName('listCount')[0].getAttribute('data-id')
  // changePri.innerHTML = countDiv * 350
 

}
//移除
document.addEventListener("click", function(e){
  /*移除按鈕*/
  if(e.target.classList.contains("delete")){ 
    let targetLi = e.target.parentNode.parentNode

    if (confirm("你確定要刪除嗎？")) {  
      targetLi.classList.add('fade_out');

      setTimeout(function(){
        targetLi.remove();
      }, 1000);

      // 取得待辦事項的 id
      let item_id = targetLi.getAttribute("data-id");
      console.log(item_id)
      // 從 localStorage 取得資料
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      // // 準備用來放要存到 localStorage 裡的資料
      let updated_tasks = [];

      tasks.forEach(function(task, i){
        if(item_id != task.item_id){ // id 不相同的時候
          updated_tasks.push(task); // 將物件資料放至新的陣列中
        }
      });
      // 回存至 localStorage
      localStorage.setItem("tasks", JSON.stringify(updated_tasks));
      changePrice();
      icon();
    };
  }
})

//總金額
function changePrice(){
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let subtotal = document.getElementById('subtotal')
  let totalPrice = 0;
  for(let i = 0; i<tasks.length; i++){
    let price = tasks[i].price 
    totalPrice = totalPrice+price
  }
  subtotal.innerHTML = parseInt(totalPrice)
  
  let freight = document.getElementById('freight')
  if(totalPrice>399){
    freight.innerHTML = 0
  }else{
    freight.innerHTML = 90
  }
  
  let total = document.getElementById('total')
  total.innerHTML = parseInt(totalPrice)+parseInt(freight.innerHTML)
}