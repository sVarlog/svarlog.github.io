let area = document.querySelector('#area');
let gameResult = document.querySelector('#gameResult');
let gameModal = gameResult.querySelector('.wrap');
let scoreWrap = document.querySelector('.score');
let pauseButton = document.querySelector('#pause');
let menuButton = document.querySelector('#menu');
let menuWrap = document.querySelector('.showMenu');
let pauseWrap = document.querySelector('#pauseWrap');
let restartBtn = gameResult.querySelector('button.newGame');
let parametersWrap = document.querySelector('#parameters');
let settingsWrap = document.querySelector('.settings');
let cancelBtn = document.querySelector('button[data-cancel]');
let startBtn = document.querySelector('button[data-start]');
let resumeButton = document.querySelector('button[data-resume');
let settingBtn = document.querySelectorAll('button[data-settings]');
let columns = 40;
let rows = 20;
let posX = 1;
let posY = 1;

localStorage.setItem('default', '150');

let settings = new Map([
    ['difficulty', localStorage.getItem('difficulty')],
    ['default', localStorage.getItem('default')]
]);

settingBtn.forEach(function(el){
    el.addEventListener('click', function () {
        settingsWrap.classList.add('active');
    });
});

settingsWrap.querySelectorAll('button[data-hard]').forEach(function(el){
    el.addEventListener('click', function(){
        localStorage.setItem('difficulty', el.dataset.hard);
        let saveText = document.createElement('span');
        saveText.classList.add('textShow');
        saveText.innerHTML = 'Настройки сохранены';
        document.body.append(saveText);
        settingsWrap.classList.remove('active');
        setTimeout(function(){
            saveText.remove();
            location.reload();
        }, 750);
    })
})

window.onload = choise;
function choise() {
    startBtn.addEventListener('click', function(){
        parametersWrap.style.opacity = '0';
        parametersWrap.style.zIndex = '-2';
        if(settings.get('difficulty') !== null){
            startGame(settings.get('difficulty'));    
        } else{
            startGame(settings.get('default'));
        }
    });
}
// cancel settings
cancelBtn.addEventListener('click', function () {
    settingsWrap.classList.remove('active')
})

function startGame(diff){
    let playTime = 0;
    let playTimer = setInterval(function(){
        playTime += 1;
    }, 1000);
    let score = 0;
    area.style.opacity = '1';
    // create cells
    for (let i = 0; i < columns * rows; i++) {
        let cell = document.createElement('span');
        cell.classList.add('cell');
        if (posX > columns) {
            posX = 1;
            posY += 1;
        }
        cell.setAttribute('posX', posX);
        cell.setAttribute('posY', posY);
        cell.style.width = `${(area.offsetWidth / columns)}px`;
        cell.style.height = `${(area.offsetHeight / rows)}px`;
        area.append(cell);
        posX += 1;
    }

    // create snake
    function generatSnake() {
        let posX = Math.round(Math.random() * (columns - 3) + 3);
        let posY = Math.round(Math.random() * (rows - 1) + 1);
        return [posX, posY];
    }
    let coordinates = generatSnake();
    let snakeBody = [
        document.querySelector(`.cell[posx="${coordinates[0]}"][posy="${coordinates[1]}"]`),
        document.querySelector(`.cell[posx="${coordinates[0] - 1}"][posy="${coordinates[1]}"]`),
        document.querySelector(`.cell[posx="${coordinates[0] - 2}"][posy="${coordinates[1]}"]`),
    ]
    for (let i = 0; i < snakeBody.length; i++) {
        if (i == 0) {
            i++;
        }
        snakeBody[i].classList.add('snake');
    }
    snakeBody[0].classList.add('head');

    // snake move
    let direction = 'right';
    function move() {
        let target = document.querySelector('.cell.target');
        let snakeCoordinates = [snakeBody[0].getAttribute('posx'), snakeBody[0].getAttribute('posy')];
        let snakeHeadCoordinates = [snakeBody[0].getAttribute('posx'), snakeBody[0].getAttribute('posy')];
        let targetPosition = [target.getAttribute('posx'), target.getAttribute('posy')];
        if (snakeHeadCoordinates[0] == targetPosition[0] && snakeHeadCoordinates[1] == targetPosition[1]) {
            let num = document.createElement('span');
            num.classList.add('point');
            num.innerHTML = '+' + (100/diff).toFixed(2);
            num.style.left = `${+target.offsetLeft + (document.querySelector('.cell').offsetWidth)}px`;
            num.style.top = `${+target.offsetTop + (document.querySelector('.cell').offsetHeight)}px`;
            document.body.prepend(num);
            document.querySelector('.point').classList.add('active');
            console.log(document.querySelector('.point'))
            setTimeout(function(){
                num.remove();
            }, 1000);
            target.classList.remove('target');
            score += 100/diff;
            snakeBody.push(snakeBody[snakeBody.length - 1]);
            scoreWrap.querySelector('input').value = score.toFixed(2);
            createTarget();
        }
        snakeBody[0].classList.remove('head');
        snakeBody[snakeBody.length - 1].classList.remove('snake');
        snakeBody.pop();

        // direction
        if (direction == 'right') {
            if (snakeCoordinates[0] < columns) {
                snakeBody.unshift(document.querySelector(`[posx="${+snakeCoordinates[0] + 1}"][posy="${+snakeCoordinates[1]}"]`));
            } else {
                snakeBody.unshift(document.querySelector(`[posx="1"][posy="${+snakeCoordinates[1]}"]`));
            }
        } else if (direction == 'left') {
            if (snakeCoordinates[0] > 1) {
                snakeBody.unshift(document.querySelector(`[posx="${+snakeCoordinates[0] - 1}"][posy="${+snakeCoordinates[1]}"]`));
            } else {
                snakeBody.unshift(document.querySelector(`[posx="${columns}"][posy="${+snakeCoordinates[1]}"]`));
            }
        } else if (direction == 'up') {
            if (snakeCoordinates[1] > 1) {
                snakeBody.unshift(document.querySelector(`[posx="${+snakeCoordinates[0]}"][posy="${+snakeCoordinates[1] - 1}"]`));
            } else {
                snakeBody.unshift(document.querySelector(`[posx="${+snakeCoordinates[0]}"][posy="${rows}"]`));
            }
        } else if (direction == 'down') {
            if (snakeCoordinates[1] < rows) {
                snakeBody.unshift(document.querySelector(`[posx="${+snakeCoordinates[0]}"][posy="${+snakeCoordinates[1] + 1}"]`));
            } else {
                snakeBody.unshift(document.querySelector(`[posx="${+snakeCoordinates[0]}"][posy="1"]`));
            }
        }

        snakeBody[0].classList.add('head');
        for (let i = 0; i < snakeBody.length; i++) {
            if (i == 0) {
                i++;
            }
            snakeBody[i].classList.add('snake');
        }
        // end game
        if (snakeBody[0].classList.contains('snake')) {
            clearInterval(start);
            clearInterval(playTimer);
            gameResult.style = 'transition: .5s';
            gameResult.classList.add('active');
            gameResult.querySelector('.score input').placeholder = score.toFixed(2);
            gameResult.querySelector('.time input').placeholder = playTime;
            // restart game
            restartBtn.addEventListener('click', function () {
                location.reload();
            });
        }
    }

    // create target
    function createTarget() {
        function generateTargetCoordinates() {
            posX = Math.round(Math.random() * (columns - 1) + 1);
            posY = Math.round(Math.random() * (rows - 1) + 1);
            return [posX, posY];
        }
        let targetCord = generateTargetCoordinates();
        for (let i = 0; i < snakeBody.length; i++) {
            if (targetCord[0] == snakeBody[i].getAttribute('posx') && targetCord[1] == snakeBody[i].getAttribute('posy')) {
                targetCord = generateTargetCoordinates();
            }
        }
        let target = document.querySelector(`.cell[posx="${+targetCord[0]}"][posy="${+targetCord[1]}"]`);
        target.classList.add('target');
    }
    createTarget();

    // key 
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 37 || e.keyCode == 65 && direction != 'right') {
            direction = 'left';
        }
        if (e.keyCode == 32) {
            e.preventDefault();
            return false;
        }
        if (e.keyCode == 38 || e.keyCode == 87 && direction != 'down') {
            direction = 'up';
        }
        if (e.keyCode == 39 || e.keyCode == 68 && direction != 'left') {
            direction = 'right';
        }
        if (e.keyCode == 40 || e.keyCode == 83 && direction != 'up') {
            direction = 'down';
        }
    });

    // pause
    pauseButton.addEventListener('click', function () {
        clearInterval(start);
        clearInterval(playTimer);
        pauseWrap.classList.add('active');
    });

    // open menu
    menuButton.addEventListener('click', function () {
        clearInterval(start);
        clearInterval(playTimer);
        menuWrap.classList.add('active');
    });

    // resume game
    pauseWrap.addEventListener('click', function () {
        start = setInterval(move, diff);
        playTimer = setInterval(function(){
            playTime += 1;
            console.log(playTime);
        }, 1000);
        pauseWrap.classList.remove('active');
    });
    resumeButton.addEventListener('click', function(){
        menuWrap.classList.remove('active');
        start = setInterval(move, diff);
        playTimer = setInterval(function () {
            playTime += 1;
            console.log(playTime);
        }, 1000);
    });   

    // start game
    let start = setInterval(move, diff);
}