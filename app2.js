let us=0;
let cs=0;

const compgen=() =>{
    const moves=["rock" , "paper" , "scissor"];
    const computer=Math.floor(Math.random() *3);
    console.log(computer)
    return moves[computer];
}
const msg=document.querySelector("#msg");
const draw=() => {
    msg.innerHTML="DRAW";
    msg.style.backgroundColor="green";
}

const gamne= (user) =>{
    const comp=compgen();

    if(user === comp)
    draw();
    else{
        if((user==="scissor" && comp==="paper")||(user==="rock" && comp==="scissor")||(user=="paper" && comp==="rock")){
            us++;
            msg.innerHTML=`You Won ${user} beats ${comp}`;
            const sc=document.querySelector("#user-score");
            sc.innerHTML=us;
            msg.style.backgroundColor="blue";
        }
        else {
            cs++;
            msg.innerHTML=`You Lost!! ${comp} beats ${user}.`;
            const sc=document.querySelector("#comp-score");
            sc.innerHTML=cs;
            msg.style.backgroundColor="red";
        }
        }
    }


const choices=document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const evt=choice.getAttribute("id")
        console.log(evt, "was clicked.")
        gamne(evt)
    })
})

let c=0;
const btn=document.querySelector("#btn");
const changecss=()=>{
    if(c%2==0){
    document.querySelector("#css").setAttribute("href","style3.css")
    btn.innerHTML="D";
    }
    else{
    document.querySelector("#css").setAttribute("href","style2.css")
    btn.innerHTML="L";
    }
    c++;
}

btn.addEventListener("click",()=> {
    changecss()
})

