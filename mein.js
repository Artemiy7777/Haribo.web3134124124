let menu = document.querySelector(".fixed-menu");

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let activeBtn = document.querySelector('.active');
   
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
   }
});
window.onscroll=function(){
    let h=documentElement.clientHeight;
};
let h = document.documentElement.clientHeight;
if (window.scrolly >= h*4){
    classLink='.comments-link';
}
else if(window.scrolly>= h*3){
    classLink='.works-link';
}
else if(window.scrolly>= h){
    classLink='.about-link';
}
document.querySelector(".mobile-button").addEventListener("click",
function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide");
});
menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link') ){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
 
        let mobile = document.querySelector('.mobile-menu');
        if (!mobile.classList.contains('hide')){
            mobile.classList.add('hide');
        }
 
    }
 });
 .off-scroll{
    overflow:hidden;
 }
 let menu = document.querySelector(".fixed-menu");
 menu.addEventListener("click", function(event){
    ...
    let body = document.querySelector("body");
    let mobilemenu = document.querySelector(".mobile-menu");
    if(!boby.classList.contains("off-scroll");
)
else{
    boby.classList.remove("off-scroll");
}
}()