export function splide() {
  new Splide('.splide', {
    type      : 'fade',
    rewind    : true,
    autoplay  : true,
    interval  : 3000,
    perPage   : 1,
    arrows    : false,
    pagination: true, 
    speed     : 1000,
  }).mount();
}
