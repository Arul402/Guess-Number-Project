var number=document.getElementById("num")
    var result=document.getElementById("resultt")
    var score=document.getElementById("scoree")
    var randomcheck=Math.floor(Math.random()*10)+1
    var box=document.getElementById("bd")
    console.log(randomcheck)
    var Score=10
    function check(){
      var res=Number(number.value)
      if(res!=""){
        if(randomcheck==res){
            result.textContent="Right !!!"
            box.style.backgroundColor="green"
            result.setAttribute("class","res")
            if(Score<=0){
                alert("You Won..."+"\nScore : 0")
            }else{
            alert("You Won..."+"\nScore : "+Score)
            }

            
        }else{
            Score--
            result.textContent="Wrong"
            box.style.backgroundColor="red"
            result.setAttribute("class","res")
            if(Score<=0){
                score.textContent="Score : 0"
            }else{
            score.textContent="Score : "+Score
            }
        }
    }else{
        alert("Enter the Number")
    }
    }