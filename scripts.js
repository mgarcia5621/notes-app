const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = document.querySelector("header i"),
titletag = document.querySelector("input"),
descTag = document.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June",
                "August", "September", "October", "November", "December"];
const notes =  JSON.parse(localStorage.getItem("notes") || "[]")
addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
    titletag.value = "";
    descTag.value = "";
        
}); 


function showNotes() {
    document.classList.remove(".note").forEach(note => note.remove());
    notes.forEach((note) => {
        let ulTag = `<li class="note">
<div class="details">
    <p>${note.title}</p>
    <span>${note.description}</span>
</div>
<div class="bottom-content">
    <span>${note.date}</span>
    <div class="settings">
        <i onClick= "showMenu(this)" class="fa fa-ellipsis-h"></i>
        <ul class="menu">
            <ul><i class="pen" class="fa fa-pen">Edit</i></ul>
            <ul><i class="trash-can" class="fa fa-trash">Delete</i></ul>
        </ul>
        </div>
    </div>
        </ul>`;
        addBox.insertAdjacentElement("afterend", ulTag);
    })
}
showNotes(); 

function showMenu(elem) {
    elem.parentElement.classList.add("show");
}

addBtn.addEventListener("click", e => {
    e.preventDefault()
    let noteTitle = titletag.value,
    noteDesc = descTag.value;

    if(noteTitle || noteDesc) {
        // getting month, day year from the current date
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDay(),
        year = dateObj.getFullYear();

        let noteInfo = {
            title: noteTitle, 
            description: noteDesc,
            date: `${month} ${day}, ${year}`
        }
        const notes =  [];
        notes.push(noteInfo); // adding new to notes
        //
        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();
        showNotes()
    }

});  