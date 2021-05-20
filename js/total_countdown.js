var end = new Date("May 27, 2021 13:45:00").getTime();



function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
}

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = end - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    output = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    document.getElementById("total-countdown").innerHTML = output

    if (distance < 0) {
        clearInterval(x)
        document.getElementById("total-countdown").innerHTML = "SCHOOL's OUT!";
    }
}, 1000);
