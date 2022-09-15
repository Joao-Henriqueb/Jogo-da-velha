let bord=["","","","","","","","",""];
let playerTime=0;
let sybomls=["o","x"];
let gameOver= false
let winStates=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
]
let ptosShield=0
let ptosSword=0
let win=""

function handleMove(position){
    if(gameOver){
        return
    }
    if (bord[position]==""){
        bord[position]=sybomls[playerTime]
        gameOver=isWin()
        if(gameOver==false){
            playerTime=(playerTime==0)?1:0;
            if(playerTime==0){
                win="shield"
            }
            else{
                win="sword"
            }
        }
    }
    return gameOver
}
function isWin(){

    for(let i=0;i<winStates.length;i++){
        let seq=winStates[i]

        let pos1=seq[0]
        let pos2=seq[1]
        let pos3=seq[2]
        if(bord[pos1]==bord[pos2]&& 
            bord[pos1]==bord[pos3]&&
            bord[pos1]!=""){
            return true
        }
        
    
    }
    return false;
}