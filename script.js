function clean0(timeto0) {
    if (timeto0 < 10) {
        var timeto0 = "0" + timeto0;
    } else {
        var timeto0 = timeto0;
    }
    return timeto0;
}
function showCountdown() {
    const countDownDate = new Date("2022-06-23T19:00").getTime();
    document.querySelector(".time-content").classList.add("timer-ready");

    counter(countDownDate, undefined);
    const x = setInterval(function () {
        counter(countDownDate, x);
    }, 1000);
}

function counter(countDownDate, x) {
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var days = clean0(days);
    var hours = clean0(hours);
    var minutes = clean0(minutes);
    var seconds = clean0(seconds);

    // Output the result in an element with id="demo"
    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}

showCountdown();
