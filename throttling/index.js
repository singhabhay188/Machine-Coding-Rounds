let container = document.querySelector('#container');

let interval = null;

container.addEventListener('scroll',()=>{
    if(interval){
        clearTimeout(interval);
    }
    interval = setTimeout(scroller,500);
});


function scroller(){
    console.log('scrolled');
};
