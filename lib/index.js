(function () {
  'use strict';

  // import SVGA from 'svgaplayerweb';
  Promise.resolve('11').then(function (res) {
    var a = Object.assign({}, {
      name: res,
      id: [1, 2, 3, 5, 6].concat([0, 4])
    });
    console.log(a);
  });

}());
