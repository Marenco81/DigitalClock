const clock = () => {
    let secDots = document.getElementById("secDots");
    let minDots = document.getElementById("minDots");
    let hrDots = document.getElementById("hrDots");

    var date = new Date();
    var hours = date.getHours() % 12; // convert to 12-hour format

    var amPm = date.getHours() >- 12 ? "PM" : "AM";
    hours = hours === 0 ? 12 : hours; // handle midnight case (0 hours)

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

secDots.innerHTML = '<h2>' + seconds + '</h2>';
minDots.innerHTML = '<h2>' + minutes + '</h2>';
hrDots.innerHTML = '<h2>' + hours + '</h2>';

}

setInterval(clock, 1000);