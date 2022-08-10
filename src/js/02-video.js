import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const CURRENT_TIME = 'videoplayer-current-time';
const savedTime = localStorage.getItem(CURRENT_TIME);

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds))
    console.log('timer work');
}, 1000));

if (savedTime) {
    player.setCurrentTime(JSON.parse(savedTime));
}