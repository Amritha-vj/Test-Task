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
var s=data.length;
var fstart= 60*8;
for(var i=0;i<s;i++)
{
    var hour = Math.floor((fstart + i * 60) / 60);
    console.log(hour+"hr");
    var min = (fstart + i * 60) % 60;
    console.log(min+"min");
    var title1=data[i].title;
    $(".width-border").append(`
    <div class="head flex width-80">
        <div class="small-font opacity">${hour+":"+min}</div>
        <div class="small-font excercise bgcolor width-90 border-left">${title1}</div>
    </div>
    `)
}
