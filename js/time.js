
// change date
var d = new Date(new Date().getTime() + 1000 * 10 * 120 * 2000); 

// default example
simplyCountdown('.simply-countdown-one', {
year: d.getFullYear(),
month: d.getMonth() + 1,
day: d.getDate()
});

//jQuery example
$('#simply-countdown-losange').simplyCountdown({
year: d.getFullYear(),
month: d.getMonth() + 1,
day: d.getDate(),
enableUtc: false
});
