let search = document.querySelector('#search');

let interval = null;

search.addEventListener('input',()=>{
    if(interval){
        clearTimeout(interval);
    }
    interval = setTimeout(()=>{
        searching();
        interval = null;
    },500);
});


function searching(){
    console.log(search.value);
};
