const monthEl = document.getElementById("month")
const dateEl =document.getElementById("date")
const hourEl= document.getElementById("hour")
const minuteEl=document.getElementById("minutes")
const secondEl=document.getElementById("seconds")
const ampmEl= document.getElementById("ampm")
function updateClock(){
    let mon = new Date().getMonth();
    let d= new Date().getMonth();
    let h = new Date().getHours()
    let m = new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm = "AM"

    if(h> 12 ){
        h= h-12
        ampm="PM"
    }
    h = h <10 ? "0" +h : h
    m = m <10 ? "0" +m : m
    s = s <10 ? "0" +s : s
    d = d <10 ? "0" +d : d
    monthEl.innerText=mon;
    hourEl.innerText=h;
    dateEl.innerText=d;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{
        updateClock()
        

    },1000)
} 
updateClock()
