var audio  = {
    1 : new Audio("resources/audio/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"),
    2 : new Audio("resources/audio/vibez-lets-go.mp3"),
    3 : new Audio("resources/audio/70ebc1e0-8184-4039-bdbd-94758297a835.mp3"),
    4 : new Audio("resources/audio/erro.mp3"),
    5 : new Audio("resources/audio/ali-as-meme-intro-original-download.mp3"),
    6 : new Audio("resources/audio/home-depot-theme2.mp3"),
    7 : new Audio("resources/audio/red-robin-yum-from-youtube.mp3"),
    8 : new Audio("resources/audio/original-sheesh.mp3"),
    9 : new Audio("resources/audio/to-be-continued.mp3"),
    0 : new Audio("resources/audio/fortnite-death-sound.mp3"),
};

digits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
]

document.addEventListener("keydown", function(e) {
    var key = e.key;

    if (key in digits) {

        currentAudio = audio[key];

        if (currentAudio.paused) {
            currentAudio.play();
        } else {
            currentAudio.pause();
        }
    }
});