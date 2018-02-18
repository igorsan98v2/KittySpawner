/*just few var for usability */

var pixelDelayLim = 15;//mouse move will work only after 15px move
var highDelay = screen.height/20;//higher move that you will need to do for spawn img
var lowDelay = screen.height/30;

function main(pixelDelay,pixelDelayLim,highDelay,lowDelay) {
    var kittys = ["https://i.pinimg.com/736x/97/15/77/971577f3041c4223e41677bf5872a0da--grumpy-kitty-kitty-cats.jpg"
    ,"https://pbs.twimg.com/profile_images/1310046966/cat_059.jpg"
    ,"https://i.pinimg.com/736x/22/60/7c/22607c0cabd4cf35da3847a6e3feb79b.jpg"
    ,"https://78.media.tumblr.com/avatar_279fd5c29dce_128.pnj"
    ,"https://i.pinimg.com/736x/e5/52/13/e55213446d52e8a76236c00ec4296d2a--smile-adorable-animals.jpg"
    ,"https://i.pinimg.com/736x/0b/13/c6/0b13c605f211866453d8ab763394d7a0--all-eyes-paint-my-photo.jpg"
    ,"https://data.whicdn.com/images/15774607/superthumb.jpg"
    ,"http://images2.fanpop.com/image/photos/9900000/kittys-cute-kittens-9937960-400-426.jpg"
    ,"https://i.pinimg.com/736x/d0/46/39/d046393a3545bcaaf85759a9e27f0644--baby-kitty-kitty-cats.jpg"
    ,"https://i.pinimg.com/236x/ae/2f/15/ae2f15c80522acbb16c58f270cdecb73--big-eyes-big-blue-eyes.jpg"
    ];
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var sens = {lowDelay:lowDelay,highDelay:highDelay,pixelDelayLim:pixelDelayLim};
    var spawnImage = new ImageSpawn(kittys,canvas,ctx,sens);
    document.onmousemove = function(){
        spawnImage.update();  
    }
     /*clear canvas like in example when you resize window */
    window.onresize = function () {
    
         spawnImage.resize();
    }
}

main(pixelDelayLim,highDelay,lowDelay);
