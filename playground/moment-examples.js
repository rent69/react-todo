var moment = require('moment');

console.log(moment().format());

/* Unix time (also known as POSIX time or epoch time)
  is a system for describing instants in time, defined
  as the number of seconds that have elapsed
  since 00:00:00 Coordinated Universal Time (UTC),
  Thursday, 1 January 1970, not counting leap seconds. */
// eg: Thursday, 1 January 1970 @ 12:00am -> 0
//    Thursday, 1 January 1970 @ 12:01am -> 60
//    Wednesday, 31 December, 1969 @ 11:59 -> -60

var now = moment();
console.log ('Current timestamp', now.unix());

var timestamp = 1494285662;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment', currentMoment.format('MMM D, YYYY @ h:mm a'));

// January 3rd, 2017 @ 12:13 AM
console.log('currentMoment', currentMoment.format('MMM Do, YYYY @ h:mm A'));
