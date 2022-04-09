let li = document.querySelector("#nav").querySelectorAll("li a")
let h1 = document.querySelector(".write.text")
h1.appendChild(document.createTextNode("Taste The Creativity"))

li.forEach((ele) => {
    ele.onclick = function (){
        if(ele.classList.contains("active")){
            ele.classList.remove("active")
        }else {
            li.forEach((ele) => {
                ele.classList.remove("active")
            })
            ele.classList.add("active")
        }
    }
})
h1.addEventListener("animationend",()=>{
    console.log('Animation ended');
   animatee()
})

function animatee(){
    
    h1.animate([
        {width: "400px"},
        {width: "0"}
    ],{
        duration:3000,
        iterations:1
    })
}
