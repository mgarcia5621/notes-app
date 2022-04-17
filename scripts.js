const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = document.querySelector("header i"),
titletag = document.querySelector("input"),
descTag = document.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June",
                "August", "September", "October", "November", "December"];

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
    console.log('')
});  

addBtn.addEventListener("click", e => {
    e.preventDefault()
    let noteTitle = titletag.value,
    noteDesc = descTag.value;

    if(noteTitle || noteDesc) {
        // getting month, day year from the current date
        let dateObj = new Date(),
        month = monthsDateObj.getMonth(),
        day = dateObj.getDay(),
        year = dateObj.getFullYear();
        console.log('month, day, year');
    }

});  