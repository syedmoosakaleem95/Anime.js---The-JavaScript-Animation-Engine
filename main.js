// anime({
//   targets: 'div.circle.darkred',
//   translateY: [
//     { value: 100, duration: 500 },
//     { value: 0, duration: 300 }
//   ],
//    rotate: {
//     value: '1turn',
//     duration: 300,
//     easing: 'easeInOutSine'
//   }
// });


// anime({
//   targets: 'div.circle.orange',
//   translateY: [
//     { value: 100, duration: 500 },
//     { value: 0, duration: 300 }
//   ],
//   rotate: {
//     value: '1turn',
//     duration: 300,
//     easing: 'easeInOutSine'
//   },
//   delay: 1000
// });


// anime({
//   targets: 'div.circle.blue',
//   translateY: [
//     { value: 100, duration: 500 },
//     { value: 0, duration: 300 }
//   ],
//   rotate: {
//     value: '1turn',
//     duration: 300,
//     easing: 'easeInOutSine'
//   },
//   delay: 2000
// });

anime({
  targets: '.circle',
  translateY: [
    { value: 100, duration: 500 },
    { value: 0, duration: 300 }
  ],
   rotate: {
    value: '1turn',
    duration: 300,
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l){ return i * 1000},
});