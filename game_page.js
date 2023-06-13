var nome1=localStorage.getItem("nome1")
var nome2=localStorage.getItem("nome2")

var score1=0
var score2=0


document.getElementById("player1Name").innerHTML=nome1+":"
document.getElementById("player2Name").innerHTML=nome2+":"
document.getElementById("player1Score").innerHTML=score1
document.getElementById("player2Score").innerHTML=score2


document.getElementById("playerQuestion").innerHTML="turno de pergunta-"+nome1
document.getElementById("playerAnswer").innerHTML="turno de resposta-"+nome2
          
function send(){
    getword=document.getElementById("word").value ;
    word=getword.toLowerCase()

    charAt1=word.charAt(1)
    lengthdiv1=Math.floor(word.length/2)
    charAt2=word.charAt(lengthdiv1)

    lengthMinus1=word.length-1
    charAt3=word.charAt(lengthMinus1)

    rCharAt1=word.replace(charAt1,"_")
    rCharAt2=rCharAt1.replace(charAt2,"_")
    rCharAt3=rCharAt2.replace(charAt3,"_")


    question_word = "<h4 id='wordDisplay'> P. "+rCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    linha = question_word + inputBox + checkButton ;
    document.getElementById("output").innerHTML = linha;
    document.getElementById("word").value = "";

}

var questionTurn="player1";
var respTurn="player2"
function check(){
    getResp=document.getElementById("inputCheckBox").value;
    resp=getResp.toLowerCase();
    if(word==resp){
        if(respTurn=="player1"){
            score1=score1+1
            document.getElementById("player1Score").innerHTML=score1
        }
        else{
            score2=score2+1;
            document.getElementById("player2Score").innerHTML=score
        }
    }
    if(questionTurn=="player1"){
     questionTurn="player2"
     document.getElementById("playerQuestion").innerHTML="turno de pergunta-"+nome2
    }
    else{
        questionTurn="player1"
        document.getElementById("playerQuestion").innerHTML="turno de pergunta-"+nome1
    }
    if (respTurn="player2") {
        respTurn="player1"
        document.getElementById("playerAnswer").innerHTML="turno de resposta-"+nome1
    }
    else{
        respTurn="player1"
        document.getElementById("playerAnswer").innerHTML="turno de resposta-"+nome1
    }
    document.getElementById("output").innerHTML=""
}