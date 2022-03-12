window.scrollTo(0,0);
window.addEventListener('load',function(){
    window.scrollTo(0,0);
})
function levels(){
    document.getElementById('startButton-div').innerHTML='';
    document.getElementById('startButton-div').innerHTML='<button class="startButtons" id="easyBTn">Easy</button> <button class="startButtons" id="mediumBTn">Medium</button> <button class="startButtons" id="hardBtn">Hard</button>';
}
function areUSure(){
    let answer=confirm('are you sure you want to skip the tutorial ?');
    if(answer==null)
    document.getElementById('tutorialButton').click();
    else
    levels();

}
for(let i=0;i<63;i++){
    var miniButton=document.createElement('button');
    miniButton.classList.add('gridItem');
    document.getElementById('fieldGrid').appendChild(miniButton);
    miniButton.setAttribute('id',i);
    if(miniButton.id%7==0){
        document.getElementById(i).innerHTML='<i class="fa-solid fa-bomb"></i>';
        document.getElementById(i).style.color="black";
    }
    
}
document.getElementById('43').innerHTML="i";
document.getElementById('44').innerHTML="n";
document.getElementById('45').innerHTML="e";
document.getElementById('46').innerHTML="s";
document.getElementById('19').innerHTML="S";
document.getElementById('26').innerHTML="w";
document.getElementById('33').innerHTML="e";
document.getElementById('40').innerHTML="e";
document.getElementById('47').innerHTML="p";
document.getElementById('54').innerHTML="e";
document.getElementById('61').innerHTML="r";
for(let k=8;k<25;k=k+8){
    document.getElementById(k).style.color="black";
    document.getElementById(k).innerHTML='<i class="fa-solid fa-bomb"></i>';    
}
for(let k=6;k<63;k=k+7){
    document.getElementById(k).style.color="black";
    document.getElementById(k).innerHTML='<i class="fa-solid fa-bomb"></i>';    
}
for(let k=6;k<19;k=k+6){
    document.getElementById(k).style.color="black";
    document.getElementById(k).innerHTML='<i class="fa-solid fa-bomb"></i>';    
}

for(let j=0;j<63;j++){
    let randomButton= Math.floor(Math.random() *70);
    let randomButtons=[];
    randomButtons.push(parseInt(randomButton));
}
window.addEventListener('click',function(){
    document.getElementById('logo').classList.add('animation1');
    window.scrollTo({
        top:0,
        right:0,
        behavior:'smooth'
    });
    document.getElementsByClassName('startButtons').width='100%';
    document.getElementById('startText').innerHTML='';
    document.getElementById('startButton-div').innerHTML='<button class="startButtons" id="playButton" onclick="areUSure()">Play</button> <button class="startButtons" id="tutorialButton"> Tutorial</button>  ';

})
