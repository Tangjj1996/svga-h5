// import SVGA from 'svgaplayerweb';

Promise.resolve('11').then(res => {
  const a = Object.assign({}, {
    name: res,
    id: [...[1, 2, 3, 5, 6], 0, 4]
  })

  console.log(a)
})