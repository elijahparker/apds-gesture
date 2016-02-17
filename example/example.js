// example for the apds gesture sensor
var GestureLib = require('../');
var G_THRESHOLD = 20,
    G_SENSITIVITY_UD = 0.50,
    G_SENSITIVITY_LR = 0.20;

var gesture = GestureLib.use('/dev/i2c-2', {
    'threshold': G_THRESHOLD,
    'sensitivity_ud': G_SENSITIVITY_UD,
    'sensitivity_lr': G_SENSITIVITY_LR
});

gesture.debug = true;

gesture.on('ready', function() {
    console.log("found a gesture sensor");
    gesture.setup(function() {
        setInterval(function() {
            gesture.readGesture();
        }, 300);
    });
});

gesture.on('error', function(err) {
    console.log("Error: ", err);
});

gesture.on('movement', function(dir) {
    console.log("Sensed movement", dir);
});