let li = document.querySelector("#nav").querySelectorAll("li a")
let h1 = document.querySelector(".write.text")
let featur = document.querySelector(".features")
// if(window.scroll){
//     scrollWindow()
//     enabled = true ;
 
//  }else if(enabled == false){

//  }
let enabled = true;

function disable() {
// if scroll happens, set it to the previous value
window.onscroll = function (){
        return false;   
}

}
function enable() {
window.onscroll = function(){
    scrollWindow()
}
};
li.forEach((ele) => {
    ele.onclick = function (){
        function firstFunction(_callback){
            // do some asynchronous work
            // and when the asynchronous stuff is complete
            _callback();  
            scrollWindow();
  
            console.log("second func")

       
        }
        
        function secondFunction(){
            // call first function and pass in a callback function which
            // first function runs when it has completed
            firstFunction(function() {
                console.log("first func")      
                    disable() ;                
            });    
        }
        secondFunction()
 
        // if(enabled = false){
        //     disable()
        // }
        if(ele.classList.contains("active")){
            return true;
        }else {
            li.forEach((ele) => {
                ele.classList.remove("active")
            })
            ele.classList.add("active")
        }
    }
})
function check(){
    if(enabled == true){
       enable()
    }else {
        disable()
    }
}
check()
//After The Animation Iteration ENDS The Animation End Event Starts
h1.addEventListener("animationend",AnimationStart ,true)

//After The Animation End Event  ENDS, The Animation Iteration Starts With The Repeat Func
h1.addEventListener("animationiteration",repeat,false)

// h1.addEventListener("animationiteration",() =>  {
//     repeat()

// },true)


// Func Start For Animate [Not Working]
function start(){
    
    h1.animate([
        {width: "400px"},
        {width: "0"}
    ],{
        duration:3000,
        iterations:1
    })
}


function repeat( ){
    h1.style.animationName = "none";
    //Set The Iteration Count To 1 To Disable The AI FUNC And, While AE On 
    h1.style.animationIterationCount = 1;

    requestAnimationFrame(() => {
        h1.style.animationName = "character";

        
    })

}

function AnimationStart(){
    if(h1.style.animationName === "character"){
        console.log("true")
        function repeat(){
            h1.style.animationName = "none";
            //Set The Iteration Count 2 To Make The AI Func On
            h1.style.animationIterationCount = 2;
            h1.innerHTML = "Taste The Graphics"

            requestAnimationFrame(() => {
                h1.style.animationName = "characters";
            })    
            }
            repeat()
        
        }
        
    }
function scrollWindow(){
        
window.onscroll = function (){
    if(window.scrollY >= featur.offsetTop - 200 ){
      appear()
      featur.style.opacity = 1;

    }
    // let height = generate(1,676)
    // console.log(height)
    if(window.scrollY <= 576){
        // console.log(true)
        
        removeAllactive()

        li[0].classList.add("active")


    }else if (window.scrollY <= 1288){
        removeAllactive()

        // This Function To Demonstrate The Height Value Of The Section
        // console.log(featur.scrollHeight)

        li[1].classList.add("active")

    }else if (window.scrollY <= 2134){
        removeAllactive()
        // This Function To Demonstrate The Height Value Of The Section
        // console.log(featur.scrollHeight)

        li[2].classList.add("active")

    }else if (window.scrollY <= 2976 ){
        removeAllactive()
        // This Function To Demonstrate The Height Value Of The Section
        // console.log(featur.scrollHeight)

        li[3].classList.add("active")

    }else if (window.scrollY <= 4141){
        removeAllactive()
        // This Function To Demonstrate The Height Value Of The Section
        // console.log(featur.scrollHeight)

        li[4].classList.add("active")

    }else if (window.scrollY <= 5360){
        removeAllactive()
        // This Function To Demonstrate The Height Value Of The Section
        // console.log(featur.scrollHeight)

        li[5].classList.add("active")

    }
    
}
}

function appear(){
    featur.style.animationName = "none"

    requestAnimationFrame(() => {
        featur.style.animationName = "apper"
    })
}

function removeAllactive(){
    li.forEach((ele) => {
        ele.classList.remove("active")
    })
}

window.onload = function (){
    window.scrollTo(0,0)
}

    // let count = 5 

// for(let index = 0 ; index < count.length; index++ ){
//     h1.addEventListener("animationiteration",()=>{
//         console.log(`animation`);
//        animatee()
//     })
//     // h1.addEventListener("animationend",()=>{
//     //     animate1()
    
//     // })
// }

