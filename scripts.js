const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = document.querySelector("header i"),
titletag = document.querySelector("input"),
descTag = document.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});  

addBtn.addEventListener("click", e => {
    e.preventDefault()
    let noteTitle = titleTag.value,
    noteDesc = descTag.value;
    console.log(noteTitle, noteDesc);
});  