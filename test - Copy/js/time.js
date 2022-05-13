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
}];
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
var array=getTimeArray();
console.log(array);
var s=data.length;
console.log(s+"length");
for(i=0;i<array.length;i++)
{
    $(".time").append(`
    <div class="head flex">
        <div class="small-font opacity height ">${array[i]}</div>   
    </div>
    `)
}
for(var i=0;i<=data.length;i++)
{
    var diff=0;
    var temp = [];
    diff =data[i+1].start-(data[i].start+ data[i].duration);
    // console.log(diff+"difference");
    temp[i]=diff;
    console.log(temp[i]+"temp");
    if(temp[i]<0)
    {
        console.log(temp[i]+"value if");
        $(".body").append(`
           
                <div class="head small-font excercise bgcolor border-left " style="height:${data[i].duration}px;margin-top:${temp[i]}px";
              >${data[i].title}</div>
           
        `)
        console.log("yes");
    }
    
    else{
        console.log(temp[i]+"value else");
        $(".body").append(`
          
                <div class=" head small-font excercise bgcolor border-left"  style="height:${data[i].duration}px;margin-top:${temp[i]}px";>${data[i].title}</div>
             
        `)
        console.log("no");
    }
    
}
