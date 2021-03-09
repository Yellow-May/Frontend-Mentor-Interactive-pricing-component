"use strict";
const slider = document.getElementById("slider");
const spanAmount = document.getElementById("amount");
function sliderEvent() {
    if (spanAmount)
        spanAmount.innerText = this.value + "K";
}
slider === null || slider === void 0 ? void 0 : slider.addEventListener("change", sliderEvent);
