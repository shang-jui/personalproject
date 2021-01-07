let block_img1 = document.getElementsByClassName("block-img1")[0];

var inTrue = true;

block_img1.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img1::before','transform: rotate(90deg)');
    sheet.addRule('.block-img1::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    // console.log(block1)
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img1::before','transform: rotate(180deg)');
    sheet.addRule('.block-img1::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
})

let block_img2 = document.getElementsByClassName("block-img2")[0];



block_img2.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img2::before','transform: rotate(90deg)');
    sheet.addRule('.block-img2::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img2::before','transform: rotate(180deg)');
    sheet.addRule('.block-img2::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
  
})

let block_img3 = document.getElementsByClassName("block-img3")[0];



block_img3.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img3::before','transform: rotate(90deg)');
    sheet.addRule('.block-img3::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img3::before','transform: rotate(180deg)');
    sheet.addRule('.block-img3::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
  
})

let block_img4 = document.getElementsByClassName("block-img4")[0];



block_img4.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img4::before','transform: rotate(90deg)');
    sheet.addRule('.block-img4::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img4::before','transform: rotate(180deg)');
    sheet.addRule('.block-img4::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
  
})

let block_img5 = document.getElementsByClassName("block-img5")[0];



block_img5.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img5::before','transform: rotate(90deg)');
    sheet.addRule('.block-img5::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img5::before','transform: rotate(180deg)');
    sheet.addRule('.block-img5::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
  
})

let block_img6 = document.getElementsByClassName("block-img6")[0];



block_img6.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img6::before','transform: rotate(90deg)');
    sheet.addRule('.block-img6::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img6::before','transform: rotate(180deg)');
    sheet.addRule('.block-img6::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
  
})

let block_img7 = document.getElementsByClassName("block-img7")[0];



block_img7.addEventListener('click',function(e){
  if(inTrue == true){
    var style = document.createElement("style"); 
    document.head.appendChild(style); 
    sheet = style.sheet; 
    sheet.addRule('.block-img7::before','transform: rotate(90deg)');
    sheet.addRule('.block-img7::after','transform: rotate(180deg)');
    inTrue = false;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'block'
  }else{
    sheet.addRule('.block-img7::before','transform: rotate(180deg)');
    sheet.addRule('.block-img7::after','transform: rotate(360deg)');
    inTrue = true;
    let block1 = e.target.parentNode.nextElementSibling
    block1.style.display = 'none'
  }
  
})
// function showBlock1 (){
//   let block1 = document.getElementById('block-dis-1')
//   block1.style.display = 'block'
  
//   let plus1 = document.getElementById('plus-1')
//   plus1.style.display = 'none'

//   let cut1 = document.getElementById('cut-1')
//   cut1.style.display = 'block'

// }
// function hideBlock1 (){
//   let block1 = document.getElementById('block-dis-1')
//   block1.style.display = 'none'
  
//   let plus1 = document.getElementById('plus-1')
//   plus1.style.display = 'block'

//   let cut1 = document.getElementById('cut-1')
//   cut1.style.display = 'none'

// }

// function showBlock2 (){
//   let block2 = document.getElementById('block-dis-2')
//   block2.style.display = 'block'
  
//   let plus2 = document.getElementById('plus-2')
//   plus2.style.display = 'none'

//   let cut2 = document.getElementById('cut-2')
//   cut2.style.display = 'block'

// }
// function hideBlock2 (){
//   let block2 = document.getElementById('block-dis-2')
//   block2.style.display = 'none'
  
//   let plus2 = document.getElementById('plus-2')
//   plus2.style.display = 'block'

//   let cut2 = document.getElementById('cut-2')
//   cut2.style.display = 'none'

// }
// function showBlock3 (){
//   let block = document.getElementById('block-dis-3')
//   block.style.display = 'block'
  
//   let plus = document.getElementById('plus-3')
//   plus.style.display = 'none'

//   let cut = document.getElementById('cut-3')
//   cut.style.display = 'block'

// }
// function hideBlock3 (){
//   let block = document.getElementById('block-dis-3')
//   block.style.display = 'none'
  
//   let plus = document.getElementById('plus-3')
//   plus.style.display = 'block'

//   let cut = document.getElementById('cut-3')
//   cut.style.display = 'none'

// }
// function showBlock4 (){
//   let block = document.getElementById('block-dis-4')
//   block.style.display = 'block'
  
//   let plus = document.getElementById('plus-4')
//   plus.style.display = 'none'

//   let cut = document.getElementById('cut-4')
//   cut.style.display = 'block'

// }
// function hideBlock4 (){
//   let block = document.getElementById('block-dis-4')
//   block.style.display = 'none'
  
//   let plus = document.getElementById('plus-4')
//   plus.style.display = 'block'

//   let cut = document.getElementById('cut-4')
//   cut.style.display = 'none'

// }
// function showBlock5 (){
//   let block = document.getElementById('block-dis-5')
//   block.style.display = 'block'
  
//   let plus = document.getElementById('plus-5')
//   plus.style.display = 'none'

//   let cut = document.getElementById('cut-5')
//   cut.style.display = 'block'

// }
// function hideBlock5 (){
//   let block = document.getElementById('block-dis-5')
//   block.style.display = 'none'
  
//   let plus = document.getElementById('plus-5')
//   plus.style.display = 'block'

//   let cut = document.getElementById('cut-5')
//   cut.style.display = 'none'

// }
// function showBlock6 (){
//   let block = document.getElementById('block-dis-6')
//   block.style.display = 'block'
  
//   let plus = document.getElementById('plus-6')
//   plus.style.display = 'none'

//   let cut = document.getElementById('cut-6')
//   cut.style.display = 'block'

// }
// function hideBlock6 (){
//   let block = document.getElementById('block-dis-6')
//   block.style.display = 'none'
  
//   let plus = document.getElementById('plus-6')
//   plus.style.display = 'block'

//   let cut = document.getElementById('cut-6')
//   cut.style.display = 'none'

// }
// function showBlock7 (){
//   let block = document.getElementById('block-dis-7')
//   block.style.display = 'block'
  
//   let plus = document.getElementById('plus-7')
//   plus.style.display = 'none'

//   let cut = document.getElementById('cut-7')
//   cut.style.display = 'block'

// }
// function hideBlock7 (){
//   let block = document.getElementById('block-dis-7')
//   block.style.display = 'none'
  
//   let plus = document.getElementById('plus-7')
//   plus.style.display = 'block'

//   let cut = document.getElementById('cut-7')
//   cut.style.display = 'none'

// }