
        // ローディング画面
        window.onload = function(){
            setTimeout(() =>{
                const loader =document.querySelector(".loader");
                loader.classList.add("loaded");

                const content = document.querySelector(".content");
                content.style.visibility = "visible";
            }, 1300)
            loadCounter();
        }


// PointSystem

document.addEventListener('visibilitychange', function() {
    const lastClicked = parseInt(localStorage.getItem('lastClicked'), 10);
    const now = new Date().getTime();
// ここの秒数を変更する
    if (!document.hidden && localStorage.getItem('clicked') && now - lastClicked >= 15000) {
        incrementCounter();
        progressBar.update();
        localStorage.removeItem('clicked'); // Remove the clicked event after triggering the increment
    }
});
        
        function loadCounter() {
            const counterElement = document.getElementById('counter');
            const citySizeElement = document.getElementById('city-size');
            let currentCount = parseInt(localStorage.getItem('counter'), 10) || 0;
            
            counterElement.innerText = currentCount;
            updateCitySize(currentCount, citySizeElement);
        }
        
        document.querySelectorAll('.increment').forEach(function(incrementButton) {
            incrementButton.addEventListener('click', function(event) {
                localStorage.setItem('clicked', true); // Record the click event in localStorage
                localStorage.setItem('lastClicked', new Date().getTime()); // Record the time of the click
            });
        });

        // レベルアップ画像の表示
        function showLevelImage(count) {
            const level = Math.floor(count / 100); // 百の位を取得
            const imageUrl = `../img/Lv${level} Meta.png`; // 画像URLを作成

            setTimeout(() => {
                // 画像要素を作成
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                imageElement.style.position = 'fixed';
                imageElement.style.top = '50%';
                imageElement.style.left = '50%';
                imageElement.style.transform = 'translate(-50%, -50%)';
                imageElement.style.zIndex = '1000'; // 他の要素より前に表示
                imageElement.style.width = '650px'; // 画像の幅を指定（必要に応じて変更）
                imageElement.style.height = 'auto';
        
                // 画像を画面に追加
                document.body.appendChild(imageElement);
        
                // 次にクリックされたときに画像を削除
                const removeImageOnClick = () => {
                    document.body.removeChild(imageElement);
                    document.removeEventListener('click', removeImageOnClick); // イベントリスナーを削除
                };
        
                // クリックイベントリスナーを追加
                document.addEventListener('click', removeImageOnClick);
            }, 1500); // 1.5秒後に実行
        }

        
        function incrementCounter() {
            const counterElement = document.getElementById('counter');
            const citySizeElement = document.getElementById('city-size');
            let currentCount = parseInt(counterElement.innerText, 10);
            let targetCount = currentCount + 25;
        
            let intervalId = setInterval(() => {
                if (currentCount < targetCount) {
                    currentCount++;
                    counterElement.innerText = currentCount ;
                    localStorage.setItem('counter', currentCount);
                    updateCitySize(currentCount, citySizeElement);
                    // 100の倍数の場合に画像を表示
                    if (currentCount % 100 === 0) {
                    showLevelImage(currentCount);
                    }
                } else {
                    clearInterval(intervalId);
                }
            }, 90);
        }

        function updateBackgroundImage(count) {
            const bodyElement = document.body;
        
            if (count >= 0 && count < 100) {
                bodyElement.style.backgroundImage = "url(../img/city0.png)";
            } else if (count >= 100 && count < 200) {
                bodyElement.style.backgroundImage = "url(../img/city1.png)";
            } else if (count >= 200 && count < 300) {
                bodyElement.style.backgroundImage = "url(../img/city2.png)";
            }else if (count >= 300 && count < 400) {
                bodyElement.style.backgroundImage = "url(../img/city3.png)";
            } else if (count >= 400 && count < 500) {
                bodyElement.style.backgroundImage = "url(../img/city4.png)";
            }else if (count >= 500 && count < 600) {
                bodyElement.style.backgroundImage = "url(../img/city5.png)";
            } else if (count >= 600 && count < 700) {
                bodyElement.style.backgroundImage = "url(../img/city6.png)";
            }else if (count >= 700 && count < 800) {
                bodyElement.style.backgroundImage = "url(../img/city7.png)";
            } else if (count >= 800 && count < 900) {
                bodyElement.style.backgroundImage = "url(../img/city8.png)";
            }else if (count >= 900 && count < 1000) {
                bodyElement.style.backgroundImage = "url(../img/city9.png)";
            } else if (count >= 1000 && count < 1100) {
                bodyElement.style.backgroundImage = "url(../img/city10.png)";
            }else if (count >= 1100 && count < 1200) {
                bodyElement.style.backgroundImage = "url(../img/city11.png)";
            } else if (count >= 1200 && count < 1300) {
                bodyElement.style.backgroundImage = "url(../img/city12.png)";
            }else if (count >= 1300 && count < 1400) {
                bodyElement.style.backgroundImage = "url(../img/city13.png)";
            } else if (count >= 1400 && count < 1500) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }else if (count >= 1500 && count < 1600) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }else if (count >= 1600 && count < 1700) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }else if (count >= 1700 && count < 1800) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }else if (count >= 1800 && count < 1900) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }else if (count >= 1900 && count < 2000) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }else if (count >= 2000 && count < 2100) {
                bodyElement.style.backgroundImage = "url(../img/city14.png)";
            }
        }
    
        
        function updateCitySize(count, citySizeElement) {
            if (count >= 0 && count < 100) {
                citySizeElement.innerText = 'Lv.0 ゲーム社会';
            } else if (count >= 100 && count < 200) {
                citySizeElement.innerText = 'Lv.1 ゲーム社会';
            } else if (count >= 200 && count < 300) {
                citySizeElement.innerText = 'Lv.2 ゲーム社会';
            }else if (count >= 300 && count < 400) {
                citySizeElement.innerText = 'Lv.3 ゲーム社会';
            } else if (count >= 400 && count < 500) {
                citySizeElement.innerText = 'Lv.4 ゲーム社会';
            }else if (count >= 500 && count < 600) {
                citySizeElement.innerText = 'Lv.5 ゲーム社会';
            } else if (count >= 600 && count < 700) {
                citySizeElement.innerText = 'Lv.6 ゲーム社会';
            }else if (count >= 700 && count < 800) {
                citySizeElement.innerText = 'Lv.7 ゲーム社会';
            } else if (count >= 800 && count < 900) {
                citySizeElement.innerText = 'Lv.8 ゲーム社会';
            }else if (count >= 900 && count < 1000) {
                citySizeElement.innerText = 'Lv.9 ゲーム社会';
            } else if (count >= 1000 && count < 1100) {
                citySizeElement.innerText = 'Lv.10 ゲーム社会';
            }else if (count >= 1100 && count < 1200) {
                citySizeElement.innerText = 'Lv.11 ゲーム社会';
            } else if (count >= 1200 && count < 1300) {
                citySizeElement.innerText = 'Lv.12 ゲーム社会';
            }else if (count >= 1300 && count < 1400) {
                citySizeElement.innerText = 'Lv.13 ゲーム社会';
            } else if (count >= 1400 && count < 1500) {
                citySizeElement.innerText = 'Lv.14 ゲーム社会';
            }else if (count >= 1500 && count < 1600) {
                citySizeElement.innerText = 'Lv.15 ゲーム社会';
            }else if (count >= 1600 && count < 1700) {
                citySizeElement.innerText = 'Lv.16 ゲーム社会';
            } else if (count >= 1700 && count < 1800) {
                citySizeElement.innerText = 'Lv.17 ゲーム社会';
            }else if (count >= 1800 && count < 1900) {
                citySizeElement.innerText = 'Lv.18 ゲーム社会';
            } else if (count >= 1900 && count < 2000) {
                citySizeElement.innerText = 'Lv.19 ゲーム社会';
            }else if (count >= 2000 && count < 2100) {
                citySizeElement.innerText = 'Lv.20 ゲーム社会';
            }
            updateBackgroundImage(count);
        }
        
        
        
// ProgressBar
function manageProgress() {
    const progressElement = document.getElementById('progress');
    const progressStatusElement = document.getElementById('progress-status');

    return {
        load: function() {
            const progress = localStorage.getItem('progress');
            if (progress) {
                this.updateUI(progress);
            }
        },
        
        updateUI: function(progress) {
            progressElement.style.width = progress + '%';
            progressElement.textContent = progress + '%';
            progressStatusElement.textContent = `発展まであと${100 - progress}pt`;
        },

        update: function() {
            let width = parseInt(progressElement.style.width || '0');
            const targetWidth = width + 25;

            const interval = setInterval(() => {
                if (width < targetWidth) {
                    width += 1;
                    this.updateUI(width);
                    localStorage.setItem('progress', width); // Save the progress to localStorage

                    if (width >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            this.updateUI(0);
                            localStorage.setItem('progress', 0); // Reset the progress in localStorage
                        }, 100);
                    }
                } else {
                    clearInterval(interval);
                }
            }, 100);
        }
    };
}

const progressBar = manageProgress();
progressBar.load(); // Load the progress when the page loads















        