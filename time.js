var countDownDate = new Date("May 27, 2021, 15:45:00").getTime();

var x = setInterval(updateTime, 500)

function updateTime() {
    var now = new Date().getTime();

    var timeBetween = countDownDate - now;

    var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);
  
    var output = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.title = "Countdown | " + output;
    
    if (timeBetween <= 0) {
        clearInterval(x);

        var letsgoAudio = document.getElementById("lets-go-audio");
        document.getElementById("timer").innerHTML = "FREEDOM";
        
        letsgoAudio.play();
    }
}
