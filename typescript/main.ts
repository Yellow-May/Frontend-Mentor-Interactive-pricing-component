const slider = document.getElementById("slider");
const spanAmount = document.getElementById("amount");

function sliderEvent(this: any) {
	if (spanAmount) spanAmount.innerText = this.value + "K";
}

slider?.addEventListener("change", sliderEvent);
