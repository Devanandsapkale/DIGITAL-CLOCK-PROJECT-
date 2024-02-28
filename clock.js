
let hrs = document.getElementById("h1");
let min = document.getElementById("m1");
let sec = document.getElementById("s1");

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML =(currentTime.getHours()<10?"0":"")+currentTime.getHours();
min.innerHTML =(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
sec.innerHTML =(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

},1000);


