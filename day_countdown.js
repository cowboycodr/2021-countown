function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
}

var x = setInterval(function() {
    var start = new Date;
    start.setHours(15, 45, 0); // 11pm
  
    var now = new Date;
    if (now > start) { // too late, go to tomorrow
    start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    document.getElementById("day-countdown").innerHTML =
    hh + "h " + mm + "m " + ss + "s ";
}, 200);