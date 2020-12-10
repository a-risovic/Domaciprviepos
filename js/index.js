
var date = new Date(2020, 12, 31);
var now = new Date();
var diff = (date.getTime()/1000) - (now.getTime()/1000);


var clock = $('.counter').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: true
});