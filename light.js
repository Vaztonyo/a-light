var Light = function(id, color) {
    var blinkInterval;

    var elem = document.getElementById(id);
    elem.classList.add('light-background');


    var lightElem = document.createElement('div');
    lightElem.classList.add('light');
    lightElem.classList.add(color);
    elem.appendChild(lightElem);




    this.blink = function() {
        blinkInterval = setInterval(function() {
            greenLight.on();
            setTimeout(function() {
                greenLight.off();
            }, 300);

            orangeLight.on();
            setTimeout(function() {
                orangeLight.off();
            }, 300);

            redLight.on();
            setTimeout(function() {
                redLight.off();
            }, 300);

        }, 500);

    };

    this.on = function() {
        lightElem.classList.add('on');
        status = 'on';
    };

    this.off = function() {
        lightElem.classList.remove('on');
        status = 'off';
    };
};

var greenLight = new Light('greenLight', 'green');
var orangeLight = new Light('orangeLight', 'orange');
var redLight = new Light('redLight', 'red');


var onBtn = document.querySelector('.onBtn');
var offBtn = document.querySelector('.offBtn');
var blinkBtn = document.querySelector('.blinkBtn');


var numberOfClicks = 0;


onBtn.addEventListener('click', function() {
    greenLight.on();
    orangeLight.on();
    redLight.on();
});

blinkBtn.addEventListener('click', function() {

    // blinking the green light
    greenLight.blink();
    orangeLight.blink();
    redLight.blink();

});


offBtn.addEventListener('click', function() {
    greenLight.off();
    orangeLight.off();
    redLight.off()
});
