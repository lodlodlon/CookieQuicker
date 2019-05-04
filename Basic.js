Game.Win('Third-party'); // Give you the Third Party achievement

var myMod = {}; // Create our mod's class

myMod.init = function() { //Our initialization method

myMod.enabled = false; //This will allow us to control when we want to make our mod work.

//Add your variable and function declarations here

Game.customChecks = [//Add the event listener
function clickbcookie() {
Game.ClickCookie();//Click the cookie every check
}
]

myMod.enable = function() {//enable function
myMod.enabled = true;
}
}

myMod.init();//init the mod
myMod.enable();//enable the mod