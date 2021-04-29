function pauseAll() {
    var minecraftAudio = document.getElementById("minecraft-audio");
    var fortniteAudio = document.getElementById("fortnite-audio");
    var letsgoAudio = document.getElementById("lets-go-audio");
    var yeayeaAudio = document.getElementById("yea-yea-audio");
    var windowserrorAudio = document.getElementById("windows-error-audio");
    var aliaintroAudio = document.getElementById("alia-intro-audio");
    var homedepotAudio = document.getElementById("home-depot-audio");
    var redrobinAudio = document.getElementById("red-robin-audio");

    minecraftAudio.pause();
    fortniteAudio.pause();
    letsgoAudio.pause();
    yeayeaAudio.pause();
    windowserrorAudio.pause();
    aliaintroAudio.pause();
    homedepotAudio.pause();
    redrobinAudio.pause();
}

function playAll() {
    var minecraftAudio = document.getElementById("minecraft-audio");
    var fortniteAudio = document.getElementById("fortnite-audio");
    var letsgoAudio = document.getElementById("lets-go-audio");
    var yeayeaAudio = document.getElementById("yea-yea-audio");
    var windowserrorAudio = document.getElementById("windows-error-audio");
    var aliaintroAudio = document.getElementById("alia-intro-audio");
    var homedepotAudio = document.getElementById("home-depot-audio");
    var redrobinAudio = document.getElementById("red-robin-audio");

    minecraftAudio.play();
    fortniteAudio.play();
    letsgoAudio.play();
    yeayeaAudio.play();
    windowserrorAudio.play();
    aliaintroAudio.play();
    homedepotAudio.play();
    redrobinAudio.play();
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
    } else if (key == 6) {
        var homedepotAudio = document.getElementById("home-depot-audio");

        pauseAll();
        homedepotAudio.play();
    } else if (key == 7) {
        var redrobinAudio = document.getElementById("red-robin-audio");

        pauseAll();
        redrobinAudio.play();
    } else if (key == "`") {
        pauseAll();
    } else if (key == "Control") {
        playAll();
    }

    if (key == " ") {
        pauseAll();
        
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
        );

        close();
    } else if (key == "b") {
        var bigideasFeature =
            "location=no,toolbar=no,menubar=no,scrollbar=yes,resizable=yes,width="+screen.availWidth+",height="+screen.availHeight;
        
        var bigideas = window.open(
            "https://www.bigideasmath.com/MRL/public/app/#/student/dashboard",
            "blank_",
            bigideasFeature
        );
    } else if (key == "g") {
        var bigideas = window.open(
            "https://www.youtube.com/channel/UCCjJKcnCwtDbBteSHvBorNA",
            "blank_"
        );
    } else if (key == "d") {
        var googledocs = window.open(
            "https://docs.google.com/document/u/0/",
            "blank_"
        );
    } else if (key == "w") {
        var wikipedia = window.open(
            "https://www.wikipedia.org/",
            "blank_"
        );
    } else if (key == "-") {
        var doncheadle = window.open(
            "https://live.staticflickr.com/5134/5547774022_f17b71f805_b.jpg",
            "blank_"
        );
    } else if (key == "s") {
        var snakegame = window.open(
            "https://www.google.com/search?q=snake&rlz=1C5CHFA_enUS862US869&oq=snake&aqs=chrome.0.69i59j0i433j46i433j46i131i433j0i271l2.655j0j7&sourceid=chrome&ie=UTF-8&safe=active&surl=1&tbs=li:1",
            "blank_"
        );
    }
} 
