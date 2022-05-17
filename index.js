let noteArr = new Array();

// funcs
function createNoteElement(noteText) {
    noteArr.push(noteText);
    let noteElement = document.createElement("div");
    noteElement.className = "note";
    let noteElementText = document.createElement("span");
    noteElementText.innerHTML = "- " + noteText;
    noteElement.appendChild(noteElementText);
    return noteElement;
}


function saveNotes() {
    let arrJSON = JSON.stringify(noteArr);
    localStorage.setItem("value", arrJSON);
}


function loadNotes() {
    let txt = localStorage.getItem("value");
    let obj = JSON.parse(txt);

    if (obj.length != 0) {
        for (let i = 0; i < obj.length; i++) {
            let newNoteElement = createNoteElement(obj[i]);
            $("div.notes-list").append(newNoteElement);
        }
    }
}


function clearNotes() {
    localStorage.clear();
    noteArr = [];
    obj = [];
    let divNode = document.getElementById("notes-list");
    divNode.innerHTML = "";
}
