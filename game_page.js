player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");
player_1score= 0;
player_2score=0;
document.getElementById("player1_name").innerHTML=player_1_name+":";
document.getElementById("player2_name").innerHTML=player_2_name+":";
document.getElementById("player1_score").innerHTML=player_1score;
document.getElementById("player2_score").innerHTML=player_2score;
document.getElementById("player_question").innerHTML="Question Turn-"+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player_2_name;

function send(){
    getWord=document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);
    
    charat1=word.charAt(1);
    lengthdivide2=Math.floor(word.length/2);
    charat2=word.charAt(lengthdivide2);
    lengthminus1=word.length-1;
    charat3=word.charAt(lengthminus1);
    remove1=word.replace(charat1,"_");
    remove2=remove1.replace(charat2,"_");
    remove3=remove2.replace(charat3,"_");
    questionword="<h4 id='word_display'>Q."+remove3+"</h4>";
    inputbox="<br> Answer:<input type='text' id='inputbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player_1";
answer_turn="player_2";

function check(){
    get_answer=document.getElementById("inputbox").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case="+answer);
    if(answer==word){
      if(answer_turn=="player_1"){
        player_1score=player_1score+1;
        document.getElementById("player1_score").innerHTML=player_1score;
    }
else{
    player_2score=player_2score+1;
        document.getElementById("player2_score").innerHTML=player_2score;
}
}
if(question_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="Question turn-"+player_2_name;
}
else {
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question turn-"+player_1_name;
}
if(answer_turn=="player_1"){
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player_2_name;
}
else {
    answer_turn="player_1";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player_1_name;
}
document.getElementById("output").innerHTML="";
}