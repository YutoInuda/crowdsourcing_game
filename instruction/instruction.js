const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
]

// function createSquare(){
//     const container = document.querySelector('.container');
//     const square = document.createElement('span');

//     let size = Math.random() * 80;

//     square.style.width = 90 + size + 'px';
//     square.style.height = 90 + size + 'px';

//     square.style.top = Math.random() * innerHeight + 'px';
//     square.style.left = Math.random() * innerWidth + 'px';

//     const bg = colors[Math.floor(Math.random() * colors.length)];
//     square.style.background = bg;

//     container.appendChild(square);

//     setTimeout(() =>{
//         square.remove()
//     }, 5000)
// }

// setInterval(createSquare, 1400);


//１文字１文字表示 
const typeTarget = document.querySelectorAll('.typeing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && entry.target.classList.contains('active') == false) {
            let typeContent = entry.target.textContent;
            let typeSprit = typeContent.split('');
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.textContent = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                entry.target.textContent += typeSprit[typeLength];
                typeLength++;
            }, typeSpeed);

        }
    });
}

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});