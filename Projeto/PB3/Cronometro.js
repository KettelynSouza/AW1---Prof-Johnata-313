var h = 0;
var m = 0;
var s = 0;

var format;
var t = 1000;
var cron;

function start(){
  cron = setInterval(() => { timer(); }, t);

}

function stop(){
  clearInterval(cron);
  h = 0;
  m = 0;
  s = 0;

}

function reset(){

  clearInterval(cron);
  h = 0;
  m = 0;
  s = 0;
 
  document.getElementById('cont').innerHTML = '00:00:00';
}

function timer(){

  s++;

  if(s == 60){
    s = 0;
    m++;

    if(m == 60){
      m = 0;
      h++;
    }
  
  }

  format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  document.getElementById('cont').innerHTML = format;
}