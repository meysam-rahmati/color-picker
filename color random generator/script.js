let redRange = document.querySelector(".r-range");
let greenRange = document.querySelector(".g-range");
let blueRange = document.querySelector(".b-range");
let randomBtn = document.querySelector(".random-btn");
let show = document.querySelector(".show-rgb");
let body = document.querySelector("body");

redRange.addEventListener("input", function () {
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    show.innerHTML = redRange.value + "," + greenRange.value + "," + blueRange.value;
})

greenRange.addEventListener("input", function () {
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    show.innerHTML = redRange.value + "," + greenRange.value + "," + blueRange.value;
})


blueRange.addEventListener("input", function () {
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    show.innerHTML = redRange.value + "," + greenRange.value + "," + blueRange.value;
})

randomBtn.addEventListener("click", function () {
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3 = Math.floor(Math.random() * 255);
    redRange.value = randomNumber1;
    greenRange.value = randomNumber2;
    blueRange.value = randomNumber3;
    body.style.backgroundColor = "rgb(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 + ")";
    show.innerHTML = redRange.value + "," + greenRange.value + "," + blueRange.value;

})