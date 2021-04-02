window.onload= function(){
  
    //declearing
    let seconds=00;
    let tens = 00;
    let appendSeconds = document.getElementById('seconds');
    let appendTens = document.getElementById('tens');
    let buttonStart = document.getElementById('time-start');
    let buttonStop = document.getElementById('time-stop');
    let buttonReset = document.getElementById('time-reset');
    let interval;

    // onclick function
    buttonStart.onclick= function(){
        clearInterval(interval);
        interval= setInterval(startTimer,10);
    }

buttonStop.onclick= function(){
    clearInterval(interval);
}


buttonReset.onclick= function(){
    clearInterval(interval);
    tens=00;
    seconds=00;
    appendSeconds.innerHTML=seconds;
    appendTens.innerHTML=tens;
}
   //logic
  function startTimer(){
      tens++;
      if(tens<=9){
          appendTens.innerHTML="0"+tens;
      }
      if(tens >9){
          appendTens.innerHTML=tens;
      }
      if(tens >99){
          confirm.log("seconds");
          seconds++;
          appendSeconds.innerHTML= "0"+ 0;
      }
      if(seconds >9){
          appendSeconds.innerHTML=seconds;
      }
  }


}