const menu=document.querySelector('.menu');
const menulogo=document.querySelector('.menu-logo');
const menunav=document.querySelector('.menu-nav');
const navitem=document.querySelectorAll('.nav-item');
const btn= document.querySelector('.menu-btn');
let val=false;
btn.addEventListener("click",changeclass);
function changeclass()
{
if(!val)
{
    btn.classList.add("Close");
    menu.classList.add("show");
    menulogo.classList.add("show");
    menunav.classList.add("show");
    navitem.forEach(item=>{
        item.classList.add("show");
    });
    val=true;
}
else{
    btn.classList.remove("Close");
    menu.classList.remove("show");
    menulogo.classList.remove("show");
    menunav.classList.remove("show");
    navitem.forEach(item=>{
        item.classList.remove("show");
    });  
    val=false;
}
}