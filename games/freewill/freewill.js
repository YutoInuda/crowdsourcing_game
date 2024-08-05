function togglePannel(){
    let container = document.querySelector('.container');
    container.classList.toggle('active');
}

window.onload = function(){
    setTimeout(() =>{
        const loader =document.querySelector(".loader");
        loader.classList.add("loaded");

        const content = document.querySelector(".content");
        content.style.visibility = "visible";
    }, 500)
    loadCounter();
}