// every square in the mine field is called button


window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})//prevent google menu from appearing when right clicking
var buttons=[];// buttons is an array that contains all the buttons
var count=0; // how many mines nearby
var finalCount=[];// array that hols the total of counts on each button
var i=0; // var that iterates over every button
var totalMines=10; // total number of mines
var expMines=[]; // expMines is an array with explosive mines
var emptyCount=[];// contains safe buttons 
var lastColumn=[];// buttons from last row
var firstColumn=[];// buttons from first column
var flagcount=0;// how many flags u put down
var score=totalMines-flagcount;
var totalButtons=48; // total number of buttons
var flaggedMine=0 // flagged mines 
var expAudio=document.getElementById('expAudio');
var flagAudio=document.getElementById('flagAudio');
var flagRemoved=document.getElementById('flagRemoved');
var winAudio=document.getElementById('winAudio');
var totalHints=3;
var hintCount=0;
var bg1='radial-gradient(circle, yellow, orange)';
var bg2='radial-gradient(circle, lightblue, deepskyblue)';
var bg3='radial-gradient(circle, lightcoral, tomato)';
var bg4='radial-gradient(circle, palegreen, yellowgreen)';
var backgroundImages=[bg1,bg2,bg3,bg4];
function bg(){
    var randomNum=Math.floor(Math.random()*backgroundImages.length);
    document.querySelector('body').style.backgroundImage=backgroundImages[randomNum];
}
setInterval(bg,5000);

document.getElementById('score').value="Mines Left : "+score; // print total flags left in input
function newGame(){ // reset all arrays for a new game
    document.getElementById('mineField').innerHTML=''; // remove all buttons from minefield
    buttons=[];
    expMines=[];
    emptyCount=[];
    finalCount=[];
    count=0;
    flagcount=0;
    hintCount=0;
    document.getElementById('score').value=totalMines-flagcount; // print total flags left in input

}
function start(){
        newGame();
        for(let i=0;i<totalButtons;i++){
            let square = document.createElement('button'); // create buttons
            document.getElementById('mineField').appendChild(square); // make buttons in mine fields
            square.setAttribute('class','mineButtons'); // add class to buttons
            square.setAttribute('id',i); // add id to buttons with name  i
            buttons.push(square.id); // add buttons id to array names buttons
    }
    for(let i=0;i<totalMines;i++){
        while(expMines.length<totalMines){
        let expMine= Math.floor(Math.random() * buttons.length);
        expMines.push(expMine);
        let toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);
        let duplicateElements = toFindDuplicates(expMines);
        expMines.splice(expMines.indexOf(duplicateElements),duplicateElements.length);
        console.log(duplicateElements);
        duplicateElements=[];
        }
        // random number add it to array named expMines 
    }
    
    console.log(expMines);
    console.log('expMines');
    
    for(let t=7;t<totalButtons;t=t+8){
        var button=document.getElementById(t).id;
        lastColumn.push(parseInt(button));
    }
    console.log(lastColumn);
    console.log('lastColumn');
    for(let y=0;y<totalButtons;y=y+8){
        var button=document.getElementById(y).id;
        firstColumn.push(parseInt(button));
    }
    console.log(firstColumn);
    console.log('firstColumn');
    for(i=0;i<totalButtons;i++){
        count=0;
        let button =document.getElementById(i);  
            if(expMines.includes(parseInt(button.id))){
                count=10;
                // button.innerHTML="B";
            }
            else{
                if(firstColumn.includes(parseInt(button.id))){
                    // if button from first row dont detect mine from last column last row
                    // check buttons nearby for mines and not check mines      
                if( expMines.includes(parseInt(button.id)-8))
                    count++
                if( expMines.includes(parseInt(button.id)-7))
                    count++
                if(expMines.includes(parseInt(button.id)+1))
                    count++  
                if( expMines.includes(parseInt(button.id)+8))
                    count++
                if( expMines.includes(parseInt(button.id)+9))
                    count++
                    
                }
                else if(lastColumn.includes(parseInt(button.id))){
                    if( expMines.includes(parseInt(button.id)-8))
                        count++
                    if( expMines.includes(parseInt(button.id)-9))
                        count++ 
                    if( expMines.includes(parseInt(button.id)+8))
                        count++
                    if( expMines.includes(parseInt(button.id)+7))
                        count++
                    if(expMines.includes(parseInt(button.id)-1))
                    count++         
                }
                else{
                    if( expMines.includes(parseInt(button.id)-8))
                    count++
                    if( expMines.includes(parseInt(button.id)-7))
                    count++
                    if( expMines.includes(parseInt(button.id)-9))
                    count++
                    if(expMines.includes(parseInt(button.id)+1))
                        count++  
                    if( expMines.includes(parseInt(button.id)+8))
                        count++
                    if( expMines.includes(parseInt(button.id)+7))
                        count++
                    if( expMines.includes(parseInt(button.id)+9))
                        count++
                    if( expMines.includes(parseInt(button.id)-1))
                            count++
                        
                    }
                }    
        finalCount.push(count);
        }
    console.log(finalCount);
    console.log('finalCount');
    for(let k=0 ;k<finalCount.length;k++){
        let count0=finalCount[k];
            if(count0==0){
                emptyCount.push(k);
                //buttons with no mines nearby put in array called emptycount
            }
        }
        console.log(emptyCount);
        console.log('emptyCount');
        window.onload=buttons.forEach(function (mybutton) {
            var button =document.getElementById(mybutton); 
            document.getElementById(mybutton).addEventListener("click", function  ()
            // button is a variable containing each square respectively  
            // add event listener mouse click to every button
        {
            if(expMines.includes(parseInt(mybutton))){
                // if(button.innerHTML!="")
                // return;
                button.innerHTML= '<i class="fa-solid fa-bomb"></i>';
                button.classList.add('pressedButtons');
                // when clicking a mine add class of pressed button and mine icon
                console.log(button.innerText)
                document.getElementsByClassName('mineButtons').innerHTML=''; // clear all buttons text
                expAudio.play();
                setTimeout(function(){
                    buttons.forEach(function(mybutton){
                    var button =document.getElementById(mybutton);
                    button.classList.remove('pressedButtons');
                    button.innerHTML='';
                    //after clicking a mine alert you lost and remove added classes and inner text
                    })
                    alert("You lost!"); 
                    start();
                }, 500);
            }
            else{
                
                if(finalCount[mybutton]>0 && finalCount[mybutton]<10){
                    
                    button.innerHTML=finalCount[mybutton];
                    button.classList.add('pressedButtons');
                    if(button.classList.contains('flagged'))
                    button.classList.remove('flagged'); 
                    button.style.backgroundColor= 'background-Color:rgb(138, 132, 132)';              
                     // if button close to mines put number of mines nearby
                    
                }
                else if(finalCount[mybutton]==0){
                    button.innerHTML='';
                    if(button.classList.contains('flagged'))
                    button.classList.remove('flagged'); 
                    // if button not close to mines put empty space
                    button.classList.add('pressedButtons');
                    revealEmpty();
                    function revealEmpty(){
                        if(firstColumn.includes(parseInt(button.id))){

                            if(parseInt(button.id)+1<totalButtons){
                                document.getElementById(parseInt(button.id )+1).click();
                            }
                            if(parseInt(button.id)+9<totalButtons){
                                document.getElementById(parseInt(button.id )+9).click();
                            }
                            if(parseInt(button.id)+8<totalButtons){
                                document.getElementById(parseInt(button.id) +8).click();
                            }
                            if(parseInt(button.id)-8>0){
                                document.getElementById(parseInt(button.id )-8).click();
                            }
                            if(parseInt(button.id)-7>0){
                                document.getElementById(parseInt(button.id) -7).click();
                            }
                        }
                        else if(lastColumn.includes(parseInt(button.id))){

                            if(parseInt(button.id)-9>0){
                                document.getElementById(parseInt(button.id) -9).click();
                            }
                            if(parseInt(button.id)+8<totalButtons){
                                document.getElementById(parseInt(button.id) +8).click();
                            }
                            if(parseInt(button.id)-8>0){
                                document.getElementById(parseInt(button.id )-8).click();
                            }
                            if(parseInt(button.id)+7<totalButtons){
                                document.getElementById(parseInt(button.id) +7).click();
                            }
                            if(parseInt(button.id)-1<totalButtons){
                                document.getElementById(parseInt(button.id )-1).click();
                            }
                        }
                        else{
                            
                            if(parseInt(button.id)+1<totalButtons){
                                document.getElementById(parseInt(button.id )+1).click();
                            }
                            if(parseInt(button.id)-1>0){
                                document.getElementById(parseInt(button.id) -1).click();
                            }
                            if(parseInt(button.id)+9<totalButtons){
                                document.getElementById(parseInt(button.id )+9).click();
                            }
                            if(parseInt(button.id)-9>0){
                                document.getElementById(parseInt(button.id) -9).click();
                            }
                            if(parseInt(button.id)+8<totalButtons){
                                document.getElementById(parseInt(button.id) +8).click();
                            }
                            if(parseInt(button.id)-9>0){
                                document.getElementById(parseInt(button.id )-8).click();
                            }
                            if(parseInt(button.id)+7<totalButtons){
                                document.getElementById(parseInt(button.id) +7).click();
                            }
                            if(parseInt(button.id)-7>0){
                                document.getElementById(parseInt(button.id) -7).click();
                            }
                        }
                            return; 
                        }
                        
                    }
            }
        })
    }, false);
    buttons.forEach(function(mybutton){
        flagcount=0
        var button=document.getElementById(mybutton);
        button.addEventListener('auxclick',function(){
        if(flagcount==totalMines){
            return;
               //if you reached max limit of flags skip this function
        }
            if(button.classList.contains('flagged')){
                    button.onauxclick=function(){
                    button.innerHTML='';
                    button.classList.remove('flagged');
                    flagcount--
                    flagRemoved.play();
                    //if button clicked already has a flag remove flag
                }
            }
            else{
                button.innerHTML='<i class="fa-solid fa-flag"></i>';
                button.classList.add('flagged');
                flagcount++;
                flagAudio.play();
                //if button clicked doesnt have flag add flag and flag class
            }
        if(expMines.includes(parseInt(button.id))){
            flaggedMine++
        }
        console.log(flaggedMine);
        if(flaggedMine===totalMines){
            alert('you win!');
            winAudio.play();
            start();
        }

            document.getElementById('score').value=totalMines-flagcount; // print total flags left in input
        });
        
    })
    document.getElementById('hint').innerHTML=totalHints-hintCount;
    document.getElementById('hint').addEventListener('click',function(){
        if(hintCount===totalHints){
            return;
        }
        else{
            let hintMine= Math.floor(Math.random() * totalMines);
            document.getElementById(parseInt(expMines[hintMine])).innerHTML='<i class="fa-solid fa-bomb"></i>';
            hintCount++
        }
        


    })
};



start();