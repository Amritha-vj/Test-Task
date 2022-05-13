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


// for (var j in data) {
//     var hour = Math.floor((fstart + j * 60) / 60);
//     // console.log(hour+"hr");
//     var min = (fstart + j * 60) % 60;
//     // console.log(min+"min");
//     var title1=data[j++].title;
//     $(".width-border").append(`
//     <div class="head flex width-80">
//         <div class="small-font opacity">${hour+":"+min}</div>
//         <div class="small-font excercise bgcolor width-90 border-left">${title1}</div>
//     </div>
    
//     `)
//     var x=data[j+1].start+data[j+1].duration;
//     console.log(x+"x=");
//     var y=data[j+2].start;
//     console.log(data[j+2].start+"y=");
//     if(x<y){
//         console.log("x is amaller than y");
//     }
   
// }
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

for(i=0;i<s;i++)
{
    var c=0;
    // var x=data[i+1].start+data[i+1].duration;
    // var y=data[i].start;
    diff=data[i+1].start-(data[i].start+data[i].duration);
    // console.log(diff +"difference");
    if(diff<0)
    {
        c++;
        console.log("sucess");
        $(".body").append(`
        <div class="head flex">
          <div class="small-font excercise  border-bottom bgcolor border-left style="height:${data[i].duration}px; style="width:38%";top: ${data[i].start}px";>${data[i].title} </div>
          <div class="small-font excercise  border-bottom bgcolor border-left style="height:${data[i++].duration}px; style="width:40%"; top: ${data[i++].start}px";>${data[i++].title} </div>
          
          </div>  
    `)
        
    }
    else{
        console.log("fail");
        $(".body").append(`
        <div class="head flex ">
          <div class="small-font excercise bgcolor border-left" style="height:${data[i].duration}px";top: ${data[i].start}px";>${data[i].title}</div>
        </div>   
    `)
    }
    // $(".body").append(`
    //     <div class="head flex width-80">
    //       <div class="small-font opacity">${array[i]}</div>
    //       <div class="small-font excercise bgcolor width-90 border-left">${data[i].title}</div>
    //     </div>
        
    // `)
    
}
  
 

