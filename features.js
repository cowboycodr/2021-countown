document.onkeydown = function(e) {
    var key = e.key;

    console.log(key);

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
            "null",
            popupFeature
        )

        close();
    }
}