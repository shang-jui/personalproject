let slideImg = document.querySelectorAll('.frame');
console.log(slideImg);
let pointer = document.querySelectorAll('.frame-pic li');
console.log(pointer)

function showImage(index) {
  for (let i = 0; i < slideImg.length; i++  ) {
  pointer[i].index = i;//自定義屬性，得到對應的下標
  slideImg[i].index = i;//自定義屬性，得到對應的下標
  slideImg[i].style.zIndex = 50 - i;//為圖片排列順序
  slideImg[i].style.opacity = '0';//將圖片透明度全部賦值為0
  pointer[i].style.background = 'gray';//圓點北京色全部設定為黑色
  }
  //將傳入引數下標值的圖片透明度賦值為 1
  slideImg[index].style.opacity = '1';
  //將傳入引數下標值的圖片的背景色賦值為white
  pointer[index].style.background = 'white';
  }
showImage(0);

let count = 1;//獲取計數器
// 定義自動輪播函式
function imageMove() {
// 判斷count的值如果能被整除，則將count重新賦值為0；
  if (count % slideImg.length == 0) {
    count = 0;
  }
// 將count值當做引數傳給函式showImage();
  showImage(count);
  count++ ;//執行一次 ＋1
}
// 設定兩秒呼叫一次函式imageMove()，並且賦值給imageInitailMove
var imageInitailMove = setInterval('imageMove()', 2500);

for (var i = 0; i < pointer.length; i++  ) {
  pointer[i].onclick = function(e) {
  clearInterval(imageInitailMove);
  // 將當前點選的圓點的下標值賦值給count
  count = e.target.index;
  // 呼叫函式
  showImage(count);
  imageInitailMove = setInterval('imageMove()', 2000);
  }
}