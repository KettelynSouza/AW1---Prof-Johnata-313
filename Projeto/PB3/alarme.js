
var display = document.getElementById('display');

var minutes = document.getElementById('minutes');

var seconds = document.getElementById('seconds');

var start = document.getElementById('start');

var stop = document.getElementById('stop');


var minutesCurrent;
var secondsCurrent;
var x;

var interval;

for(x = 0; x<=60; x++){
    minutes.innerHTML+='<option value='+x+'>'+x+'</option>';
}

for(x = 0; x<=60; x++){
    seconds.innerHTML+='<option value='+x+'>'+x+'</option>';
}

start.addEventListener('click',function(){
    minutesCurrent = minutes.value
    secondsCurrent = seconds.value
    display.childNodes[1].innerHTML = minutesCurrent+":"+secondsCurrent;



    interval = setInterval(function(){
        secondsCurrent--;

        if(secondsCurrent<=0){
            if(minutesCurrent>0){
                minutesCurrent--
               secondsCurrent=59;

            }else{
                alert("Acabou o Tempo!")
                document.getElementById('sound').play();
                clearInterval(interval)
            }
        }

        display.childNodes[1].innerHTML = minutesCurrent+": "+secondsCurrent
    }, 1000)
})


stop.addEventListener('click',function(){
    clearInterval(interval)
})

