
let background = document.getElementById("background");
let hide = document.getElementById("hide");
let text1 = document.querySelector(".intro_text1");
let text2 = document.querySelector(".intro_text2");
let kozellogo = document.getElementById("kozel_logo");
let tymongif = document.getElementById("tymongif");
let procentygif = document.getElementById("procentygif");
let krangif = document.getElementById("krangif");
let currentTime = new Date();
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let przycisk = document.getElementById("buttonKoz");
hours.innerHTML = currentTime.getHours();
minutes.innerHTML = currentTime.getMinutes();

function playSound(){
    let audio = new Audio("piwotymona.mp3");
    przycisk.style.display = "none";
    audio.play();
}
setInterval(function()
{
    text1.style.display = "none";
    text2.style.display = "none";
}, 100*50);
setInterval(function()
{
    background.style.display = "none"; 
    hide.style.display = "none";
}, 100*58);
setInterval(function()
{
    kozellogo.style.display = "block";
}, 100*53);
setInterval(function()
{
    tymongif.style.display = "block";
    procentygif.style.display= "block";
    krangif.style.display= "block";
},100*65);
