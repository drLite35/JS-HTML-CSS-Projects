const timedisplay = document.querySelector("#timedis");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");


let starttime = 0;
let elapsetime =0;
let paused = true;
let intervalID;
let hrs=0;
let mins = 0;
let sec=0;


start.addEventListener("click" , () => {
    if(paused){
        paused=false;
        starttime= Date.now() - elapsetime;
        intervalID = setInterval(updateTime, 1000);
    }
});
pause.addEventListener("click" , () => {
    if(!paused){
        paused = true;
        elapsetime = Date.now() - starttime;
        clearInterval(intervalID);
    }

});
reset.addEventListener("click" , () => {
    paused = true;
    starttime = 0;
    elapsetime =0;
    clearInterval(intervalID);
    hrs=0;
    mins = 0;
    sec=0;
    timedisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsetime = Date.now() - starttime;

    sec = Math.floor((elapsetime/1000)%60);
    mins = Math.floor((elapsetime/(1000*60))%60);
    hrs = Math.floor((elapsetime/(1000*60*60))%60);
    sec=pad(sec);
    mins = pad(mins);
    hrs = pad(hrs);

    timedisplay.textContent = `${hrs}:${mins}:${sec}`
    
   

    function pad(unit){
        if(("0" + unit).length>2){
            return unit;
        }
        else return "0" + unit;
    }


}
