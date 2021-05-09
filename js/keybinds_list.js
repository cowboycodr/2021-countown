var keybinds = {
    "1" : "Fortnite Default Dance Music",
    "2" : "Ayy lets go - DaBaby",
    "3" : "Yea Yea - DaBaby",
    "4" :  "Windows Error",
    "5" :  "Alia Intro",
    "6" : "Home Depot Music",
    "7" : "Red Robin... YUM!",
    "8" : "SHEESH",
    "9" : "To be continued...",
    "0" : "Fortnite Death Sound",
    "Ctrl" : "Just don't",
    "~" : "Pause all music",
    "Tab" : "Reset duration of all music"
}

var element = document.getElementById("keybinds-list");

for (let key in keybinds) {
    var tag = document.createElement("p")
    var btag = document.createElement("b");
    var text = document.createTextNode(key +  " : " + keybinds[key].toString());
    btag.appendChild(text);
    tag.appendChild(btag)
    element.appendChild(tag);
}