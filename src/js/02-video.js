import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STOREGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STOREGE_KEY, data.seconds);
  }, 1000)
);
const localItem=localStorage.getItem(STOREGE_KEY)
if ( localItem ) {
    player     
    .setCurrentTime(localItem)
    .then(function (second) {
     
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      console.log(error)
    });
}
