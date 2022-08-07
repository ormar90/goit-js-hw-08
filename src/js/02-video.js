import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds))
    console.log('timer work');
}, 1000));

if (localStorage.getItem(CURRENT_TIME)) {
    player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)));
}