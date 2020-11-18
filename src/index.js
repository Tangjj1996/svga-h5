import SVGA from 'svgaplayerweb';

const root = document.getElementById('qqCanvasWebSvga');

root.style.width = '200px';
root.style.height = '200px';

const player = new SVGA.Player('#qqCanvasWebSvga');
const parser = new SVGA.Parser('#qqCanvasWebSvga');

player.loops = 1;

parser.load('assets/test.svga', function (videoItem) {
  player.setVideoItem(videoItem);
  player.startAnimation();
});

player.onFinished(() => {
  console.log('finished::');
});
player.onFrame((frame) => {
  console.log('frame::' + frame);
});
player.onPercentage((percentage) => {
  console.log('percentage::' + percentage);
});
