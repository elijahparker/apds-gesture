// example for the apds gesture sensor
var GestureLib = require('../');
var G_THRESHOLD = 20,
    G_SENSITIVITY = 50;

var gesture = GestureLib.use('/dev/i2c-2', {
    'threshold': G_THRESHOLD,
    'sensitivity': G_SENSITIVITY
});

gesture.debug = true;

gesture.on('ready', function() {
    console.log("found a gesture sensor");
    gesture.setup(function() {
        setInterval(function() {
            gesture.readGesture();
        }, 200);
    });
});

gesture.on('error', function(err) {
    console.log("Error: ", err);
});

gesture.on('movement', function(dir) {
    console.log("Sensed movement", dir);
});