const navList = document.querySelector('.navList');
const bar = document.querySelector('.bar');
const links = document.querySelector('.links');
const icons = document.querySelector('.icons')

window.addEventListener("resize", (event) => {
    if(event.target.innerWidth <= 600){
        navList.className = 'navListSmall';
        bar.style.display = 'block';
        icons.style.display = 'none'
    }else{
        navList.className = 'navListBig';
        bar.style.display = 'none';
        icons.style.display = 'block'
    }  
}) 

bar.addEventListener('click',(e) => {
    if(e.target.classList.contains('bar')){
        links.classList.toggle('links')
    }
})

