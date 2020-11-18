import SVGA from 'svgaplayerweb';

const root = document.getElementById('qqCanvasWebSvga');

root.style.width = '353px';
root.style.height = '156.67px';

const player = new SVGA.Player('#qqCanvasWebSvga');
const parser = new SVGA.Parser('#qqCanvasWebSvga');

player.loops = 1
player.clearsAfterStop = false

parser.load('assets/test.svga', function (videoItem) {
  player.setVideoItem(videoItem);
  player.startAnimation();
});

player.onFinished(() => {
  console.log('finished::');
});
player.onFrame((frame) => {
  
});
player.onPercentage((percentage) => {
  if (percentage > 0.8) {
    player.stepToFrame(10, true)
  }
});
