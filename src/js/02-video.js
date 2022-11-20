import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay=(data)=> {
  // Data — это объект, содержащий свойства, специфичные для этого события  
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(localStorage.getItem('videoplayer-current-time'));
};
player.on(
    'timeupdate',
    throttle(onPlay, 1000),
);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // Время было меньше 0 или больше, чем продолжительность видео
            break;

        default:
            // Произошла какая-то другая ошибка
            break;
    }
});
