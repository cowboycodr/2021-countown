function clickBody() {
    var audio = document.getElementById("audio");
    if (audio.duration > 0 && !audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
}