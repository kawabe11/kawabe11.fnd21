'use strict'
// 1行目に記載している 'use strict' は削除しないでください


  // 10進数からの変換ボタン
function numberConversion10(){
  const inputelement = document.getElementById("n10");
  let inputNum = inputelement.value
  let baseNumber2 = Number(inputNum).toString(2);
  let baseNumber10 = Number(inputNum).toString(10);
  let baseNumber16 =Number(inputNum).toString(16);
  document.getElementById("n2").value = baseNumber2
  document.getElementById("n16").value = baseNumber16
}

  // 2進数からの変換ボタン
function numberConversion2(){
  const inputelement = document.getElementById("n2");
  let inputNum = inputelement.value
  // let baseNumber2 = Number(inputNum).toString(2);
  let baseNumber10 = parseInt(inputNum, 2);
  let baseNumber16 =Number(baseNumber10).toString(16);
  
  document.getElementById("n10").value = baseNumber10
  document.getElementById("n16").value = baseNumber16
}

  // 16進数からの変換ボタン
function numberConversion16(){
  const inputelement = document.getElementById("n16");
  let inputNum = inputelement.value
  // let baseNumber2 = Number(inputNum).toString(10);
  let baseNumber10 = parseInt(inputNum, 16);
  let baseNumber2 =Number(baseNumber10).toString(2);
  
  document.getElementById("n10").value = baseNumber10
  document.getElementById("n2").value = baseNumber2
}

document.getElementById("button10").addEventListener("click", numberConversion10);

document.getElementById("button2").addEventListener("click", numberConversion2);

document.getElementById("button16").addEventListener("click", numberConversion16);
