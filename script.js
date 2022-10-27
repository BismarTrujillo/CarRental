"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnOnClick;
}
function calculateBtnOnClick() {
    const numberOfDaysField = document.getElementById("numberOfDaysField");
    let extraPerDay = 0;
    let total = 0;

    let gps = document.getElementById("gps").checked;
    let tollTag = document.getElementById("tollTag").checked;
    let roadSide = document.getElementById("roadside").checked;
    let yes = document.getElementById("yes").checked;
   
    
   
    if (tollTag) {
        extraPerDay += 3.95 * numberOfDaysField;
    }

    if (gps) {
        extraPerDay += 2.95 * numberOfDaysField;
    }

    if (roadSide) {
        extraPerDay += 2.95 * numberOfDaysField;
    }
    let subTotal = numberOfDaysField * 29.99 + extraPerDay;
    
   
    if (yes) {
        total += subTotal * 0.3;
    }
    const rentalPrice = document.getElementById("rentalPrice");
    rentalPrice.value = numberOfDaysField * 29.99;
   


}



