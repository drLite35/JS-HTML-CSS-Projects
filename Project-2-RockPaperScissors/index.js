const player = document.querySelector("#playerText");
const comp = document.querySelector("#compText");
const result = document.querySelector("#result");
const butt = document.querySelectorAll(".butt");

let play;
let pn;
let cn;
let computer;
let res;


butt.forEach((button) => {button.addEventListener("click" , () =>{
        play = button.textContent;
        pn = num(play);
        computer = comptchoice();
        cn = num(computer);
        player.textContent = `Player : ${play}`;
        comp.textContent = `Computer : ${computer}`;
        res = winner(pn , cn);
        result.textContent = `Result : ${res}`;
})
});

function comptchoice(){
    let rand = Math.floor(Math.random()*3)+1;
    let compute;
    switch(rand){
        case 1:
            compute = "ROCK";
            break;
        case 2:
            compute = "PAPER";
            break;
        case 3:
            compute = "SCISSORS";
            break;
    }
    return compute;
}



function num(text){
    let numb;
    if(text=="ROCK")numb=1;
    else if(text=="PAPER")numb=2;
    else numb=3;
    return numb;
}


function winner(num1 , num2){
    let rec;
    if(num1==1){
        if(num2==1)rec="DRAW";
        else if(num2==2)rec="Computer is Winner";
        else rec="Player is Winner";
    }
    if(num1==2){
        if(num2==2)rec="DRAW";
        else if(num2==3)rec="Computer is Winner";
        else rec="Player is Winner";
    }
    if(num1==3){
        if(num2==3)rec="DRAW";
        else if(num2==1)rec="Computer is Winner";
        else rec="Player is Winner";
    }
    return rec;
}

