// example for the apds gesture sensor
var GestureLib = require('../');
var G_THRESHOLD = 20,
    G_SENSITIVITY = 0.65 //0.5
;

var gesture = new GestureLib.use('/dev/i2c-2', {
    'threshold': G_THRESHOLD,
    'sensitivity': G_SENSITIVITY
});

gesture.debug = true;

gesture.on('ready', function() {
    console.log("found a gesture sensor");
    gesture.setup(function() {
        var read = (function(g) {
            return g.readGesture;
        })(gesture);
        setInterval(read, 200);
    });
});

gesture.on('error', function(err) {
    console.log("Error: ", err);
});

gesture.on('movement', function(dir) {
    console.log("Sensed movement", dir);
});