function pauseAll() {
    var minecraftAudio = document.getElementById("minecraft-audio");
    var fortniteAudio = document.getElementById("fortnite-audio");
    var letsgoAudio = document.getElementById("lets-go-audio");
    var yeayeaAudio = document.getElementById("yea-yea-audio");
    var windowserrorAudio = document.getElementById("windows-error-audio");
    var aliaintroAudio = document.getElementById("alia-intro-audio");

    minecraftAudio.pause();
    fortniteAudio.pause();
    letsgoAudio.pause();
    yeayeaAudio.pause();
    windowserrorAudio.pause();
    aliaintroAudio.pause();
}

function playAll() {
    var minecraftAudio = document.getElementById("minecraft-audio");
    var fortniteAudio = document.getElementById("fortnite-audio");
    var letsgoAudio = document.getElementById("lets-go-audio");
    var yeayeaAudio = document.getElementById("yea-yea-audio");
    var windowserrorAudio = document.getElementById("windows-error-audio");
    var aliaintroAudio = document.getElementById("alia-intro-audio");

    minecraftAudio.play();
    fortniteAudio.play();
    letsgoAudio.play();
    yeayeaAudio.play();
    windowserrorAudio.play();
    aliaintroAudio.play();
}

function clickBody() {
    var minecraftAudio = document.getElementById("minecraft-audio");

    if (!minecraftAudio.paused) {
        minecraftAudio.pause();
    } else {
        minecraftAudio.play();
    }
}

document.onkeydown = function(e) {
    var key = e.key;

    console.log(key)

    if (key == 1) {
        var fortniteAudio = document.getElementById("fortnite-audio");

        pauseAll();
        fortniteAudio.play();
    } else if (key == 2) {
        var letsgoAudio = document.getElementById("lets-go-audio");

        pauseAll();
        letsgoAudio.play();
    } else if (key == 3) {
        var yeayeaAudio = document.getElementById("yea-yea-audio");

        pauseAll();
        yeayeaAudio.play();
    } else if (key == 4) {
        var windowserrorAudio = document.getElementById("windows-error-audio");

        pauseAll();
        windowserrorAudio.play();
    } else if (key == 5) {
        var aliaintroAudio = document.getElementById("alia-intro-audio");

        pauseAll();
        aliaintroAudio.play();
    } else if (key == "`") {
        pauseAll();
    } else if (key == "Control") {
        playAll();
    }


    if (key == " ") {
        var canvasFeature = 
            "location=no,toolbar=no,menubar=no,scrollbar=yes,resizable=yes,width="+screen.availWidth+",height="+screen.availHeight;

        var canvas = window.open(
            "https://smsd.instructure.com",
            "_blank",
            canvasFeature
        );

        console.log(canvasFeature);
    } else if (key == "Escape") {
        var popupFeature = 
        "location=no,toolbar=no,menubar=no,scrollbar=yes,resizable=yes,width="+screen.availWidth+",height="+screen.availHeight;

        var popupCountdown = window.open(
            "https://cowboycodr.github.io",
            "blank_",
            popupFeature
        )

        close();
    }
} 