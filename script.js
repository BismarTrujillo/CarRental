"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnOnClick;
}
function calculateBtnOnClick() {
    const numberOfDaysField = Number(document.getElementById("numberOfDaysField").value);
    
    let extraPerDay = 0;
    let subTotal = numberOfDaysField * 29.99;
    
    const gps = document.getElementById("gps").checked;
    const tollTag = document.getElementById("tollTag").checked;
    const roadSide = document.getElementById("roadSide").checked;
    const yes = document.getElementById("yes").checked;
   
    
   
    if (tollTag) {
        extraPerDay += 3.95 * numberOfDaysField;
    }

    if (gps) {
        extraPerDay += 2.95 * numberOfDaysField;
    }

    if (roadSide) {
        extraPerDay += 2.95 * numberOfDaysField;
    }
   
    let total = subTotal + extraPerDay;
    
   
    if (yes) {
        total += subTotal * 0.3;
    }
    
    const rentalPrice = document.getElementById("rentalPrice");
    rentalPrice.value = Math.round(total*100)/100;
   


}



