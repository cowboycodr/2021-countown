function clickBody() {
    var audio = document.getElementById("audio");
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
}
