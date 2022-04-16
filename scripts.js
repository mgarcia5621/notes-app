const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = document.querySelector("header i"),
addBtn = popupBox.querySelector("button");

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});  

addBtn.addEventListener("click", e => {
    console.log("Button clicked");
});  