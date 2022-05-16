var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
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
},  {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
    
},{
    start: 360,
    duration: 30,
    title: "Skype call"
}];
data.push({start:data[data.length-1].start+20,duration:0,title:""})
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
for(i=0;i<array.length;i++)
{   
    if(i%2==1)
    {
        $(".time").append(`
        <div class="head flex">
            <div class="small-font opacity height border-bottom">${array[i]}</div>   
        </div>
        `)

    }
    else{
        $(".time").append(`
        <div class="head flex">
            <div class="small-font opacity height">${array[i]}</div>   
        </div>
        `)
    }
}
var y = [];
for(let i=0;i<s;i++)
{
  
    if(data[i].start==0)
    {
        y[i]=0;
        y[i+1]=data[i+1].start-(data[i].start+data[i].duration);

    }
    else
    {
        y[i]=0;
        y[i]=data[i].start-(data[i-1].start+data[i-1].duration);
        y[i+1]=data[i+1].start-(data[i].start+data[i].duration);
    }
    console.log(y +"difference"+i);

    if(y[i]<0)
    {
        
        $(".body").append(
            `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i].start}px;margin-left:50%;
            z-index:1;height:${data[i].duration}px;">${data[i].title}</div>`
        )
    }
    else if(y[i]>=0 && y[i+1]<0)
    {
        $(".body").append(
            `<div class="bgcolor small-font position-absolute w-50" style="top:${data[i].start}px;
            z-index:1;height:${data[i].duration}px;">${data[i].title}</div>`
        )
    }
    else{
          $(".body").append(`
             <div class="small-font position-absolute w-100 bgcolor border-bottom" style="top:${data[i].start}px;height:${data[i].duration}px;">${data[i].title}</div>  
          `)
    }   
}

  
 

