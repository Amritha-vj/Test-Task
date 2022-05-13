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
var time=getTimeArray();
for(i=0;i<time.length;i++)
{
    
    $(".time").append(`<div style="height:30px;color:#b4b7b9;">${time[i]}</div>`);
  
}
function getTimeArray()
{
    var x = 30;
    var times = [];
    var tt = 60*8;
    for (var i=0;tt<19*60; i++) {
    var hh = Math.floor(tt/60); 
    var mm = (tt%60);
    times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);
    if(times[i]=="0:00")
    {
       times[i]="12:00";
    } 
    else if(times[i]=="0:30")
    {
       times[i]="12:30";
    }
    else{} 
    tt = tt + x;
    }
    return times;
   
}
var count = 1;
for (var i = 0; i < data.length; i++) 
{
    var tempValue = 0;
    if(data[i].start!=0)
    {
        tempValue =data[i].start-(data[i-1].start+ data[i-1].duration);
    }
    if(tempValue < 0)
    {
        count++;
    }
    $(".body").append(`
    <div class="bgcolor" style="height:${data[i].duration}px;margin-top:${tempValue}px;margin-left:${(count == 1 )? 0 : 100/count}%">
    ${data[i].title}
    </div>`)
    
    if(count > 1)
    {    
        count-- ;
    }
    else
    {
        tempdata =0;
    }
}