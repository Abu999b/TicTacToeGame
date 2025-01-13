let boxes=document.querySelectorAll(".box");

let resetBtn=document.querySelector("#reset-btn");

let resetBtn1=document.querySelector("#reset-btn1");

let msg=document.querySelector(".msg");

let b=0;

resetBtn.addEventListener("click",()=>{
    turn0=true;
    for(let box of boxes){
            box.innerText="";
            box.disabled=false;
        }
     resetBtn1.style.display="none";
     msg.innerText="";
     msg.style.display="none";
});

resetBtn1.addEventListener("click",()=>{
    turn0=true;
    for(let box of boxes){
            box.innerText="";
            box.disabled=false;
        }
     resetBtn1.style.display="none";
     msg.innerText="";
     msg.style.display="none";
});
let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    ];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{

b++;


    if(turn0==true){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
        });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let o=0;
let x=0;

const checkWinner=()=>{


    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                let p=0;
                if(pos1=="O"){
                o++;
                p=o;
                }
                else{
                x++;
                p=x;
                }
                msg.style.display="block";
                msg.innerText="Winner is "+pos1+" with points "+p;
                resetBtn1.style.display="inline";
                disableBoxes();
            }
            else{
                if(b==9){
                    msg.style.display="block";
                    msg.innerText="It was Draw";

                }
            }
        }
    }
}


