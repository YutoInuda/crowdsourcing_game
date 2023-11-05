function togglePannel(){
    let container = document.querySelector('.container');
    container.classList.toggle('active');
}

document.querySelectorAll('.increment').forEach(function(incrementButton) {
    incrementButton.addEventListener('click', function(event) {
        localStorage.setItem('ok', true); // Record the click event in localStorage as a string
    });
});
