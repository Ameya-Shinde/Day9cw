const root = document.getElementById("root");
document.body.style.backgroundColor = "whitesmoke";
function color(){
    const textColor = document.getElementById("tColor").value;
    root.style.color = textColor;
}

function bgCol(){
    const bgc = document.getElementById("bgc").value;
    root.style.backgroundColor = bgc;
}
function pad(){
    const pad = document.getElementById("pad").value;
    root.style.padding = pad;
}
function fSize(){
    const fSize = document.getElementById("fSize").value;
    root.style.fontSize = fSize;
}
function fWeight(){
    const fWeight = document.getElementById("fWeight").value;
    root.style.fontWeight = fWeight;
}


