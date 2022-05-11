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

// console.log(data);
// console.log(data[0].start);
for (var i in data) {
    var height=data[i].duration;
    console.log(height);
    // height=120;
    for (var key in data[i]) {
           
//         var temp = data[i][key];
//         // console.log(temp);
//         console.log(data[i][key]);
//         if (data[i][key] == 0) {

//             var tag1 = document.createElement("div");
//             tag1.setAttribute('id', 'bgcolor');
//             var text1 = document.createTextNode("Exercise");
//             tag1.appendChild(text1);
//             var element1 = document.getElementById("new");
//             element1.appendChild(tag1);
//         }

//         if (data[i][key] == 25) {

//             var tag1 = document.createElement("div");
//             tag1.setAttribute('id', 'bgcolor');
//             tag1.setAttribute("class", "margin-bottom")
//             var text1 = document.createTextNode("Plan day");
//             tag1.appendChild(text1);
//             var element1 = document.getElementById("new");
//             element1.appendChild(tag1);
//         }

        if(data[i].start==0)
        {
            document.getElementById("time-1").innerHTML = "8:00";
            let text1= document.getElementById("text-1");
            text1.innerHTML = data[i].title;
            text1.style.height=height+"px";
            text1.classList.add("bgcolor");
        }
        if(data[i].start==30)
        {
            var height1=data[i++].duration;
            // console.log(height1);
            document.getElementById("time-2").innerHTML = "8:30";
            let text2= document.getElementById("text-2");
            text2.innerHTML = "Plan the day";
            // text2.innerHTML = data[i++].title;
            text2.style.height=height1+"px";
            text2.classList.add("bgcolor");
        }
        if(data[i].start==25)
        {
            var height2=data[i++].duration;
            console.log(height2+"start30");
            // document.getElementById("time-3").innerHTML = "9:00";
            let text3= document.getElementById("text-3");
            text3.innerHTML = "Travel to work";
            text3.style.height=height2+"px";
            text3.classList.add("bgcolor");
        }
        if(data[i].start==30)
        {
            var height3=data[i++].duration;
            console.log(height3+"start30");
            document.getElementById("time-3").innerHTML = "9:00";
            let text4= document.getElementById("text-4");
            text4.innerHTML = "Review Yesterday's commits";
            text4.style.height=height3+"px";
            text4.classList.add("bgcolor");
        }
        if(data[i].start==60)
        {
            var height4=data[i++].duration;
            console.log(height4+"duration");
            document.getElementById("time-4").innerHTML = "9:30";
            let text5= document.getElementById("text-5");
            text5.innerHTML = "Code review";
            text5.style.height=height4+"px";
            text5.classList.add("bgcolor");
        }
        document.getElementById("time-5").innerHTML = "10:00";
        document.getElementById("time-6").innerHTML = "10:30";
        if(data[i].start==100)
        {
            var height5=data[i++].duration;
            console.log(height5+"duration");
            document.getElementById("time-3").innerHTML = "9:00";
            let text5= document.getElementById("text-5");
            text5.innerHTML = "Code review";
            text5.style.height=height4+"px";
            text5.classList.add("bgcolor");
        }
     

    }
}

