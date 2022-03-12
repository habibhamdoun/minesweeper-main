    document.addEventListener('click',play);
    function play(event){
        var btn=event.target;
        if(btn.id==='nextBtn3'){
            document.getElementById('bigPanel').style.backgroundImage='radial-gradient(circle, lightblue, deepskyblue)';
        document.getElementById('bigPanel').style.justifyContent='center';
        document.getElementById('bigPanel').style.flexDirection='column';
        document.getElementById('bigPanel').style.alignItems='center';
        document.getElementById('bigPanel').innerHTML='<button id="backBtn1">Back...</button> <div class="levelBtns" id="easyBtn"><a href="../Easy/indexEasy.html">easy</a></div> <div class="levelBtns" id="mediumBtn"><a href="../functionality/indexMedium.html">medium</a></div> <div class="levelBtns" id="hardBtn"><a href="../hard/indexHard.html">hard</a></div>';
        }
        else if(btn.id==='backBtn'||btn.id==='backBtn1'){
                document.getElementById('bigPanel').style.backgroundImage='radial-gradient(circle, yellow, orange)';
            document.getElementById('bigPanel').style.justifyContent='center';
            document.getElementById('bigPanel').style.flexDirection='column';
            document.getElementById('bigPanel').style.alignItems='center';
            document.getElementById('bigPanel').innerHTML='<div id="title">MinesSweeper... </div> <button class="startBtns" id="playBtn">Play</button> <button class="startBtns" id="tutorialBtn">Tutorial</button></div>';
            }
        else if(btn.id==='playBtn'){
            var confirmation=confirm('Are you sure you know how to play?');
            if(confirmation!=false){
                document.getElementById('bigPanel').style.backgroundImage='radial-gradient(circle, lightblue, deepskyblue)';
                document.getElementById('bigPanel').style.justifyContent='center';
                document.getElementById('bigPanel').style.flexDirection='column';
                document.getElementById('bigPanel').style.alignItems='center';
                document.getElementById('bigPanel').innerHTML='<button id="backBtn1">Back...</button> <button class="levelBtns" id="easyBtn"><a href="../Easy/indexEasy.html">easy</a></button> <button class="levelBtns" id="mediumBtn"><a href="../functionality/indexMedium.html">medium</a></button> <button class="levelBtns" id="hardBtn"><a href="../hard/indexHard.html">hard</a></button>';
                }
                else{
                    document.getElementById('tutorialBtn').click();
                }
            
            }
        else if(btn.id==='tutorialBtn'){
                document.getElementById('bigPanel').innerHTML='<button id="backBtn">Back...</button> <h5 id="panelText">Clicking on buttons will reveal the number of nearby mines.Just as shown!</h5> <button id="nextBtn1" class="bottomRight">Next...</button> <h5 id="panelText2">Clicking on Mines = losing the game:/</h5>';
                document.getElementById('bigPanel').style.backgroundImage='radial-gradient(circle, lightblue, deepskyblue)';
                document.getElementById('bigPanel').style.flexDirection='column';
                document.getElementById('panelText').style.justifyContent='space-between';
                var miniField =document.createElement('div');
                miniField.classList.add('miniField');
                document.getElementById('bigPanel').appendChild(miniField);
                miniField.innerHTML='<button class="testBtns" >1</button><button class="testBtns">1</button><button  class="testBtns">1</button><button  class="testBtns">1</button><button  class="testBtns"><i class="fa-solid fa-bomb"></i></button><button  class="testBtns">1</button><button  class="testBtns">1</button><button  class="testBtns">1</button><button class="testBtns">1</button>';
                document.getElementById('nextBtn1').addEventListener('click',function(){
                document.getElementById('bigPanel').innerHTML='<button id="backBtn">Back...</button> <h5 id="panelText">Right Clicking on a button can flag it meaning it"s a potential MINE!</h5> <button id="nextBtn2" class="bottomRight">Next</button> <h5 id="panelText3">flagging all mines = winning the game :)</h5>';
                document.getElementById('bigPanel').style.backgroundImage='radial-gradient(circle, palegreen, yellowgreen)';
                document.getElementById('bigPanel').style.flexDirection='column';
                document.getElementById('panelText').style.justifyContent='space-between';
                var miniField =document.createElement('div');
                miniField.classList.add('miniField');
                document.getElementById('bigPanel').appendChild(miniField);
                miniField.innerHTML='<button class="testBtns" >1</button><button class="testBtns">1</button><button  class="testBtns">1</button><button  class="testBtns">1</button><button  class="testBtns"><i class="fa-solid fa-flag" style="color: red;"></i></button><button  class="testBtns">1</button><button  class="testBtns">1</button><button  class="testBtns">1</button><button class="testBtns">1</button>';
                document.getElementById('nextBtn2').addEventListener('click',function(){
                    var miniField =document.createElement('div');
                    document.getElementById('bigPanel').innerHTML='<button id="backBtn">Back...</button> <h5 id="panelText">If there"s no mines nearby that block counts as empty:</h5> <button id="nextBtn3" class="bottomRight">Play</button> <h5 id="panelText4">Tip:if a button is empty all buttons nearby are safe to click on ;)</h5>';
                    document.getElementById('bigPanel').style.backgroundImage='radial-gradient(circle, lightcoral, tomato)';
                    document.getElementById('bigPanel').style.flexDirection='column';
                    document.getElementById('panelText').style.justifyContent='space-between';
                    document.getElementById('panelText').style.alignItems='flex-start';
                    miniField.classList.add('miniField3');
                    document.getElementById('bigPanel').appendChild(miniField);
                    miniField.innerHTML='<button class="testBtns"></button><button class="testBtns">1</button><button class="testBtns">1</button><button class="testBtns"></button><button class="testBtns">1</button><button class="testBtns"><i class="fa-solid fa-bomb"></i></button><button    class="testBtns"></button><button class="testBtns">1</button><button class="testBtns">1</button>';
                });
            });
        }
        else if(btn.id==='easyBtn'){
            window.open('../Easy/indexEasy.html')
        }
        else if(btn.id==='mediumBtn'){
            window.open('../functionality/indexMedium.html')
        }
        else if(btn.id==='hardBtn'){
            window.open('../hard/indexHard.html')
        }
    }
