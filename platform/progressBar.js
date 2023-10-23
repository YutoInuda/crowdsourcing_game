// ProgressBar
function loadProgress() {
    let progress = localStorage.getItem('progress');
    if (progress) {
        var progressElement = document.getElementById('progress');
        progressElement.style.width = progress + '%';
        progressElement.textContent = progress + '%';
        document.getElementById('progress-status').textContent = `発展まであと${100-progress}pt`;
    }
}

function updateProgress() {
    let progressElement = document.getElementById('progress');
    let progressStatusElement = document.getElementById('progress-status');
    let width = parseInt(progressElement.style.width || '0');
    let targetWidth = width + 25;

    let interval = setInterval(function () {
        if (width < targetWidth) {
            width += 1;
            progressElement.style.width = width + '%';
            progressElement.textContent = width + '%';
            localStorage.setItem('progress', width); // Save the progress to localStorage
            progressStatusElement.textContent = `発展まであと${100-width}pt`;

            if (width >= 100) {
                clearInterval(interval);
                setTimeout(function () {
                    width = 0;
                    progressElement.style.width = width + '%';
                    progressElement.textContent = width + '%';
                    localStorage.setItem('progress', width); // Reset the progress in localStorage
                    progressStatusElement.textContent = `発展まであと100pt`;
                }, 100);
            }
        } else {
            clearInterval(interval);
        }
    }, 100);
}

loadProgress(); // Load the progress when the page loads

document.getElementById('clickButton1').addEventListener('click', updateProgress);
document.getElementById('clickButton2').addEventListener('click', updateProgress);
document.getElementById('clickButton3').addEventListener('click', updateProgress);
document.getElementById('clickButton4').addEventListener('click', updateProgress);
document.getElementById('clickButton5').addEventListener('click', updateProgress);
document.getElementById('clickButton6').addEventListener('click', updateProgress);
document.getElementById('clickButton7').addEventListener('click', updateProgress);
document.getElementById('clickButton8').addEventListener('click', updateProgress);
document.getElementById('clickButton9').addEventListener('click', updateProgress);
document.getElementById('clickButton10').addEventListener('click', updateProgress);
document.getElementById('clickButton11').addEventListener('click', updateProgress);
document.getElementById('clickButton12').addEventListener('click', updateProgress);
document.getElementById('clickButton13').addEventListener('click', updateProgress);
document.getElementById('clickButton14').addEventListener('click', updateProgress);
document.getElementById('clickButton15').addEventListener('click', updateProgress);
document.getElementById('clickButton16').addEventListener('click', updateProgress);
document.getElementById('clickButton17').addEventListener('click', updateProgress);
document.getElementById('clickButton18').addEventListener('click', updateProgress);


