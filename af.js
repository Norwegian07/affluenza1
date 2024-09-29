
function openNav(){
    document.getElementById("nav-container").style.height ="400px";
    document.getElementById("line1").style.width = "0px";
    document.getElementById("line1").style.transition = "0.5s";
    document.getElementById("line2").style.width = "0px";
    document.getElementById("line2").style.transition = "0.5s"; 
    document.getElementById("line3").style.width = "0px";
    document.getElementById("line3").style.transition = "0.5s";
}

function closeNav(){
    document.getElementById("nav-container").style.height = "0px"
    document.getElementById("line1").style.width = "55px";
    document.getElementById("line1").style.transition = "0.5s";
    document.getElementById("line2").style.width = "45px";
    document.getElementById("line2").style.transition = "0.5s"; 
    document.getElementById("line3").style.width = "55px";
    document.getElementById("line3").style.transition = "0.5s";
}