new Typed("#typing",{

strings:[
"Web Developer",
"Graphic Designer",
"Frontend Developer",
"UI/UX Enthusiast",
"IT Support"
],

typeSpeed:70,
backSpeed:40,
backDelay:1500,
loop:true

});
AOS.init({
    duration:1000,
    once:true
});
window.addEventListener("scroll",()=>{

let scroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scroll/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}