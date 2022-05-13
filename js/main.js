let font_inc = document.getElementById("btnInc");
let font_dec = document.getElementById("btnDec");
let pow = 21;
font_inc.onclick = function(){
    let shopStyle = document.getElementById('Shop_in_Style');
    shopStyle.style.fontSize = (pow*2)+"px"
    pow++;
}
let low = pow;

font_dec.onclick = function(){
    let shopStyle = document.getElementById('Shop_in_Style');
    shopStyle.style.fontSize = (low*2)+"px"
    low--;
   
}
let changeColor = document.getElementById('btnChngColor');

changeColor.onclick = function(){
    document.getElementById('Shop_in_Style').style.color = document.getElementById('inputColor').value;
}
