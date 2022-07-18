function alert(){
    alert("External Alert.");
}
function confirm(){
    if(confirm("Are you sure..??")){
        alert("YESSS");
    }
    else{
        alert("NOOOO");
    }
}
function prompt(){
    var fName=prompt("Enter Firstname Here..");
    alert(fName);
}
