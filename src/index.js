import SVGA from 'svgaplayerweb';

const player = new SVGA.Player('#qqCanvas');
const parser = new SVGA.Parser('#qqCanvas');

parser.load('asset/test.svga', function (videoItem) {
  player.setVideoItem(videoItem);
  player.startAnimation();
});
