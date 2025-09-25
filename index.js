const clock = () => {
    let secDots = document.getElementById("secDots");
    let minDots = document.getElementById("minDots");
    let hrDots = document.getElementById("hrDots");
    let dates = document.getElementById("dates");

    var date = new Date();
    var hours = date.getHours() % 12; // convert to 12-hour format

    var amPm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours === 0 ? 12 : hours; // handle midnight case (0 hours)

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var day = date.toDateString();


    var secondsDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6; // 360/60 = 6 degrees per second;
        if( i === seconds ){
            secondsDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>'
        }
        else{
            secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>'
        }
    }

    var minutesDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6; // 360/60 = 6 degrees per minute;
        if( i === minutes ){
            minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>'
        }
        else{
            minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>'
        }
    }

    var hoursDots = '';
    for (var i = 1; i < 13; i++) {
        var rotation = i * 30; // 360/12 = 30 degrees per hour;
        if( i === hours ){
            hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>'
        }
        else{
            hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>'
        }
    }

secDots.innerHTML = secondsDots + '<h2>' + zero(seconds) + '<br><span>seconds</span></h2>';
minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br><span>minutes</span></h2>';
hrDots.innerHTML = hoursDots + '<b>' + amPm + '</b>' + '<h2>' + zero(hours) + '<br><span>hours</span></h2>';
dates.innerHTML = '<h3>' + day + '</h3>' // todo, agregar fecha completa

}

// add zero in single digit numbers

const zero = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


setInterval(clock, 1000);