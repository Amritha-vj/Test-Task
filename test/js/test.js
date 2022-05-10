var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];
//console.log(data);
console.log(typeof(data));
// var x = 5; //minutes interval
// var times = []; // time array
// var tt = 0; // start time
// var ap = ['AM', 'PM']; // AM-PM

//loop to increment the time and push results in array
// for (var i=0;tt<24*60; i++) {
//   var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
//   var mm = (tt%60); // getting minutes of the hour in 0-55 format
//   times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
//   tt = tt + x;
// }

// console.log(times);

// 
// var arr = [], i, j,arr1= []
// for(i=0; i<24; i++) {
//   for(j=0; j<4; j++) {
//     arr.push(i + ":" + (j===0 ? "00" : 15*j) );
//   }
// }
// arr1.push(arr);
// var d = new Date(),
// h = d.getHours(),
// m = 15 * Math.floor(d.getMinutes()/15),
// stamp = h + ":" + (m === 0 ? "00" : m);
// var pos = arr.indexOf(stamp),
// timelist = arr.slice(pos).concat(arr.slice(0,pos));
// console.log(arr[5]);
// console.log(arr);
// console.log(arr1);
// console.log(typeof(arr));
// console.log(h);


var times = []
  , periods = ['AM', 'PM']
  , hours = [8, 9, 10, 11,12,1,2,3,4,5,6]
  , prop = null
  , hour = null
  , min = null; 

for (prop in periods) {
  for (hour in hours) {
    for (min = 0; min < 60; min += 5) {
      times.push(('0' + hours[hour]).slice(-2) + ':' + ('0' + min).slice(-2) + " " + periods[prop]);
    }
  }
}
console.log(times[3]);