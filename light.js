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
            }, 100);

            orangeLight.on();
            setTimeout(function() {
                orangeLight.off();
            }, 100);

            redLight.on();
            setTimeout(function() {
                redLight.off();
            }, 100);

        }, 300);

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
// var offBtn = document.querySelector('.offBtn');
var blinkBtn = document.querySelector('.blinkBtn');


var numberOfClicks = 0;

function go(){
  greenLight.on();
}

function stop(){
  redLight.on();
}

function caution(){
  orangeLight.on();
}

function goOff(){
  greenLight.off();
}

function stopoff(){
  redLight.off();
}

function cautionOff(){
  orangeLight.off();
}

onBtn.addEventListener('click', function() {
var counter = 0;
  setInterval(function(){
  counter++;
  if (counter < 5){
    go();
    stopoff();
    cautionOff();
  }
  else if (counter < 10 && counter > 5){
    caution();
    goOff();
    stopoff();
  }
  else if(counter >= 10 && counter <16){
    goOff();
    stop();
    cautionOff();
  }
  if (counter === 16){
    goOff();
    stopoff();
    cautionOff();
  }
}, 800);
});

blinkBtn.addEventListener('click', function() {

    // blinking the green light
    greenLight.blink();
    orangeLight.blink();
    redLight.blink();

});


// offBtn.addEventListener('click', function() {
//   goOff();
//   stopoff();
//   cautionOff();
// });
