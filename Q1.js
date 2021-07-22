function replaceWord(){

    var a=document.getElementById("i_text").value
    if(a==""){
        alert("Please fill all the fields");
        document.myForm.text.focus();
        return false;
    }
    var b=document.getElementById("i_word").value
    if(b==""){
        alert("Please fill all the fields");
        document.myForm.word.focus();
        return false;
    }
    
    var c=document.getElementById("i_replace").value
    if(c==""){
        alert("Please fill all the fields");
        document.myForm.replace.focus();
        return false;
    }
    if((a.includes(b)==false)){
        alert("The word isn't in the text!!!\n Give the word that belongs to text");
        return false;
    }
    let result = a.replaceAll(b, c);
    alert(result);
    
    return true;
}