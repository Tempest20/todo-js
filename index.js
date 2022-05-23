let noteArr = new Array();

// funcs
const createNoteElement = (noteText) => {
    noteArr.push(noteText);
    let noteElement = document.createElement("div");
    noteElement.className = "note";
    let noteElementText = document.createElement("span");
    noteElementText.innerHTML = "- " + noteText;
    noteElement.appendChild(noteElementText);
    return noteElement;
}


const saveNotes = () => {
    let arrJSON = JSON.stringify(noteArr);
    localStorage.setItem("value", arrJSON);
}


const loadNotes = ()  => {
    let txt = localStorage.getItem("value");
    let obj = JSON.parse(txt);

    if (obj.length != 0) {
        for (let i = 0; i < obj.length; i++) {
            let newNoteElement = createNoteElement(obj[i]);
            $("div.notes-list").append(newNoteElement);
        }
    }
}

const clearNotes = ()  => {
    localStorage.clear();
    noteArr = [];
    obj = [];
    let divNode = document.getElementById("notes-list");
    divNode.innerHTML = "";
}
