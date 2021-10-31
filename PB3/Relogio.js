function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds(); 
  

  var time = format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);

  document.getElementById("Clock").innerHTML = time;
  document.getElementById("Clock").textContent = time;


  setTimeout(showTime, 1000);
}

showTime();