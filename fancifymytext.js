function bigger(){
    document.getElementById("TextPlace").style.fontSize = "2em";
}

function radioStyle(){
    
    if(document.getElementById("fancy").checked){
        document.getElementById("TextPlace").style.fontWeight="bold";
        document.getElementById("TextPlace").style.color="blue"
        document.getElementById("TextPlace").style.textDecoration="underline"
    }else if(document.getElementById("boring").checked){
        document.getElementById("TextPlace").style.fontWeight="normal";
        document.getElementById("TextPlace").style.color="black"
        document.getElementById("TextPlace").style.textDecoration="none"
    }
}

function upperMoo(){
    const para = document.getElementById("TextPlace").value.toUpperCase();
    sentences = para.split(".");
    
    str = sentences.join("-Moo.");
    document.getElementById("TextPlace").value = str;
    
}