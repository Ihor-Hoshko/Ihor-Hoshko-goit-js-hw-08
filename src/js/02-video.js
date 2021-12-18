import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const storageKey = 'videoplayer - current - time';

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

const onPlay = function ({ seconds }) {
  localStorage.setItem(storageKey, seconds);
};

const currentTime = localStorage.getItem(storageKey);

player
  .setCurrentTime(currentTime)
  .then(function (value) {
    value = currentTime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));
