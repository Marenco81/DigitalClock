const clock = () => {
    let secDots = document.getElementById("secDots");
    let minDots = document.getElementById("minDots");
    let hrDots = document.getElementById("hrDots");

    var date = new Date();
    var hours = date.getHours() % 12; // convert to 12-hour format

    var amPm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours === 0 ? 12 : hours; // handle midnight case (0 hours)

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

secDots.innerHTML = '<h2>' + zero(seconds) + '<br><span>seconds</span></h2>';
minDots.innerHTML = '<h2>' + zero(minutes) + '<br><span>minutes</span></h2>';
hrDots.innerHTML = '<b>' + amPm + '</b>' + '<h2>' + zero(hours) + '</h2>';

}

// add zero in single digit numbers

const zero = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


setInterval(clock, 1000);