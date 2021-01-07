//滑動效果
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


let sliderDiv = document.querySelectorAll('.block');

function checkSlide(e) {
  sliderDiv.forEach(sliderDiv => {

    const slideInAt = (window.scrollY + window.innerHeight) - sliderDiv.offsetHeight / 2;

    const divBottom = sliderDiv.offsetTop + sliderDiv.offsetHeight;

    const isHalfShown = slideInAt > sliderDiv.offsetTop;
    const isNotScrolledPass = window.scrollY < divBottom;
    if(isHalfShown && isNotScrolledPass) {
      sliderDiv.classList.add('active');
    } else {
      sliderDiv.classList.remove('active');
    }
  })
}
window.addEventListener('scroll', debounce(checkSlide));

//輪播事件
let slider = document.querySelectorAll('.Slider');
console.log(slider);

function opaImage(index) {
  for (let i = 0; i < slider.length; i++  ) {
    slider[i].index = i;//自定義屬性，得到對應的下標
    slider[i].style.zIndex = 50 - i;//為圖片排列順序
    slider[i].style.opacity = '0';//將圖片透明度全部賦值為0
  }
  //將傳入引數下標值的圖片透明度賦值為 1
  slider[index].style.opacity = '1';

  }
opaImage(0);

let count = 1;//獲取計數器
// 定義自動輪播函式
function imageMove() {
// 判斷count的值如果能被整除，則將count重新賦值為0；
  if (count % slider.length == 0) {
    count = 0;
  }
// 將count值當做引數傳給函式showImage();
  opaImage(count);
  count++ ;//執行一次 ＋1
}
// 設定兩秒呼叫一次函式imageMove()，並且賦值給imageInitailMove
var imageInitailMove = setInterval('imageMove()', 2500);