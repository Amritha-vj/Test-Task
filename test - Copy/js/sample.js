var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 30,
    duration: 30,
    title: "Travel to work"
}, {
    start: 25,
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

}];
data.push({
    start: data[data.length - 1].start + 40,
    duration: 0,
    title: ""
})

function getTimeArray() {
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 60 * 8; // start time

    //loop to increment the time and push results in array
    for (var i = 0; tt < 19 * 60; i++) {
        var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        var mm = (tt % 60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }
    return times;
}
var array = getTimeArray();
var s = data.length;
for (i = 0; i < array.length; i++) {
    if (array[i] == "00:00") {
        array[i] = "12:00";
    } else if (array[i] == "00:30") {
        array[i] = "12:30";
    } else {}
    if (i % 2 == 0) {
        $(".time").append(`
        <div class="head flex">
            <div class=" border1 small-font2 opacity height ">${array[i]}</div>   
        </div>
        `)

    } else {
        $(".time").append(`
        <div class="head flex">
            <div class="small-font opacity height">${array[i]}</div>   
        </div>
        `)
    }
}
var y = [];


for (let i = 0; i < s - 1; i++) {

    if (i == 0) {
        y[i] = 0;
        y[i + 1] = data[i + 1].start - (data[i].start + data[i].duration);
    } else {
        y[i] = data[i].start - (data[i - 1].start + data[i - 1].duration);
        y[i + 1] = data[i + 1].start - (data[i].start + data[i].duration);

    }
    console.log(y[i] + "element");


    if (y[i] < 0) {
        if ((y[i] < 0 && y[i + 1] < 0)) {
            if (data[i].duration < data[i + 1].duration) {
                $(".body").append(
                    `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i+1].start}px;
                z-index:1;height:${data[i+1].duration}px;">${data[i+1].title}</div>`
                )
                $(".body").append(
                    `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i].start}px;
                z-index:1;height:${data[i].duration}px;margin-left:50%;">${data[i].title}</div>`
                )
            } else {
                $(".body").append(
                    `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i+1].start}px;
                z-index:1;height:${data[i+1].duration}px;margin-left:50%;">${data[i+1].title}</div>`
                )
                $(".body").append(
                    `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i].start}px;
                z-index:1;height:${data[i].duration}px;">${data[i].title}</div>`
                )
            }
        }
    } else if (y[i] > 0 && y[i + 1] < 0) {
        if (data[i].duration < data[i + 1].duration) {
            $(".body").append(
                `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i+1].start}px;
                z-index:1;height:${data[i+1].duration}px;">${data[i+1].title}</div>`
            )
            $(".body").append(
                `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i].start}px;
                z-index:1;height:${data[i].duration}px;margin-left:50%;">${data[i].title}</div>`
            )
        } else {
            $(".body").append(
                `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i+1].start}px;
            z-index:1;height:${data[i+1].duration}px;margin-left:50%;">${data[i+1].title}</div>`
            )
            $(".body").append(
                `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i].start}px;
            z-index:1;height:${data[i].duration}px;">${data[i].title}</div>`
            )
        }
    } else {
        $(".body").append(`
        <div class="small-font position-absolute w-100 bgcolor" style="top:${data[i].start}px;height:${data[i].duration}px;">${data[i].title}</div>  
     `)
    }


}