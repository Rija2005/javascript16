//DOME;DOCUMENT OBJECT MODE
// console.log(document);
// console.log(document.body);
// console.log(document.body.childNodes[1]);
// //getelementid
// let head = document.getElementById("heading");
// head.style.color="blue";
// head.style.backgroundColor="black";
// head.style.fontFamily="areial";
// head.style.fontSize="56px"
// console.log(head);

// let para1= document.getElementsByClassName("para");
// para1[0].style.color="red";
// para1[0].style.backgroundColor="black"
// para1[0].style.fontFamily=" MonoLisa ";
// para1[0].style.fontSize="30px";
// para1[1].innerHTML="Dom Mainupluation"//inner html can change anything in html file by target them.




// let collection=document.getElementsByTagName("li");
// document.getElementById("demo").innerHTML=collection[0].innerHTML
// document.getElementById("demo").innerHTML=collection[1].innerHTML



// function changeColor(newColor){
//     const btn=document.getElementById("para")
//     btn.style.color=newColor
//     btn.style.fontSize="56px";
//     btn.style.fontStyle="italic";
//     btn.style.backgroundColor="black";
// }    
// //addEventListener;;use to call (on events)
let button = document.getElementById("btn");
// button.addEventListener("click",()=>{
//     document.querySelector(".container").innerHTML = "<b> yay you were clicked </b>  enjoy your click"
// })

// //context menu mean right click..   
// button.addEventListener("contextmenu",()=>{
//     document.querySelector(".container").innerHTML = "<b> yay you were clicked </b>  enjoy your click"
// })


// button.addEventListener("mousedown",()=>{
//     document.querySelector(".container").innerHTML = "<b> yay you were clicked </b>  enjoy your click"
// })


// button.addEventListener("mouseleave",()=>{
//     document.querySelector(".container").innerHTML = "<b> yay you were clicked </b>  enjoy your click"
// })




button.addEventListener("keydown",(e)=>{
    document.querySelector(".container").innerHTML = "<b> yay you were clicked </b>  enjoy your click"
    console.log(e);
})

function myFunction(){
    let y = document.getElementById("fname")
    y.value= y.value.toUpperCase();
}


function myFunction(){
    let y = document.getElementById("lname")
    y.value= y.value.toUpperCase();
}
function myFunction1(){
    alert("you pressed a key inside the input field")
}

function myFunction2(){
    document.getElementById("phone").innerHTML = "you pressed a key inside the input field"
    document.getElementById("phone").style.color = 'pink'
}