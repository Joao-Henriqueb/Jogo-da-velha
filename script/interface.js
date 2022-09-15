document.addEventListener("DOMContentLoaded",()=>{
    let squares=document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.addEventListener("click",handleClick)
    })
})

let ptShield=document.querySelector(".ptShield")
let ptSword=document.querySelector(".ptSword")
let reset=document.querySelector(".reset")

function handleClick(event){
    let square=event.target
    let position=square.id
   
    if(handleMove(position)){
        if(win==="shield"){
            ptosShield++
        }
        else{
            ptosSword++    
        }
        ptShield.innerHTML=ptosShield
        ptSword.innerHTML=ptosSword
        setTimeout(()=>{
            alert(win+" venceu")
        },50)
    }
    updateSquares( position)
}


function updateSquares(){
    let squares=document.querySelectorAll(".square")
    squares.forEach((square)=>{
        let position=square.id
        let sybomls=bord[position]
        if(sybomls!=""){
            square.innerHTML=`<div class=${sybomls}></div>`
            
        }
        
    })

}

reset.addEventListener("click",()=>{
    gameOver= false
    playerTime=0
    bord=["","","","","","","","",""];
    let squares=document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.innerHTML=`<div class=${""}></div>`
    })


})


/*
if(win==="shield"){
            ptShield++
            ptShield.innerHTML=ptosShield
        }
        else{
            ptosSword++
            ptSword;innerHTML=ptosSword
    
        }
*/
