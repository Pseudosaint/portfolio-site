function getText(){
    // this gets the textarea's content
    let text = document.getElementById("textthing").value;
    let fileName = document.getElementById("nameThing").value;
    // saveToBlob saves the thing as a Blob, specifically it turns it into plaintext
    let saveToBlob = new Blob([text],{type:"text/plain"})

    let downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download file"

    downloadLink.href = window.URL.createObjectURL(saveToBlob);

    downloadLink.click();

};

function resetText(){
    let text = document.getElementById("textthing").value = "";
};