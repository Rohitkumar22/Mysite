const main =document.querySelector('main');
const btn1=document.querySelector('.clickable');
const fotter=document.getElementById('ft');
const extra= document.querySelector('#extra');
var val=false;
btn1.addEventListener('click',change);

var d = document.documentElement;
var offset = d.scrollTop + window.innerHeight;
var height = d.offsetHeight;

function change()
{
if (!val)
{

main.style.display='none';
btn1.innerHTML='Go back';
if (screen.width>600)
   { fotter.style.top=89+'vh';
   }
   else{

    
    fotter.style.top=170+'vh';  
   }
extra.classList.add('show');

val=true;
}
else{
    if (screen.width>600)
   { fotter.style.top=360+'vh';
   }
   else{

    fotter.style.top=sz+'px';
   }
    
    main.style.display='initial';
    extra.classList.remove('show');
    btn1.innerHTML='Click for extra curicular';
    val=false;
}

}
