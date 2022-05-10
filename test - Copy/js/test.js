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
// for(var i=0;i<10;i++)
// {
    
//     var tag = document.createElement("div");
//     tag.setAttribute("id","opacity");
//     var text = document.createTextNode("8:00");
//     tag.appendChild(text);
//     var element = document.getElementById("new");
//     element.appendChild(tag);


//     var tag1 = document.createElement("div");
//     tag1.setAttribute('id','bgcolor');
//     var text1 = document.createTextNode("Exercise");
//     tag1.appendChild(text1);
//     var element1 = document.getElementById("opacity");
//     element1.appendChild(tag1);
// }


for(var i in data)
{
    
    for(var key in data[i])
    {  
        var temp=data[i][key];
        // console.log(temp);
        console.log(data[i][key]);
        if(data[i][key]==0)
        {
           
                var tag1 = document.createElement("div");
                tag1.setAttribute('id','bgcolor');
                var text1 = document.createTextNode("Exercise");
                tag1.appendChild(text1);
                var element1 = document.getElementById("new");
                element1.appendChild(tag1);
                
            
           
        }
        
        if(data[i][key]==25)
        {
           
                var tag1 = document.createElement("div");
                tag1.setAttribute('id','bgcolor');
                tag1.setAttribute("class","margin-bottom")
                var text1 = document.createTextNode("Plan day");
                tag1.appendChild(text1);
                var element1 = document.getElementById("new");
                element1.appendChild(tag1);
                
            
           
        }


        // if(data[key][subkey]==25)
        // {
        //     document.getElementById("sub2-container1").innerHTML = "8:30";
        //     let content= document.getElementById("sub2-container2");
        //     content.innerHTML = "Excercise";
        //     content.classList.add("bg-color");
        // }
        // if(data[key][subkey]==30)
        // {
        //     document.getElementById("sub3-container1").innerHTML = "8:30";
        //     let content= document.getElementById("sub3-container2");
        //     content.innerHTML = "Excercise";
        //     content.classList.add("bg-color");
        // }


    }
}