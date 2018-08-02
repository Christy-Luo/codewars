/**
 * Human readable duration format 格式化秒数
 * formatDuration(62)    // returns "1 minute and 2 seconds"
 * formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
 * @param {*} seconds 
 */

function formatDuration(seconds) {
    var time = {
            year: 31536000,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        },
        res = [];
    if (seconds === 0) return 'now';
    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}

function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    let years = ~~(seconds / (60 * 60 * 24 * 365));
    let days = ~~(seconds / (60 * 60 * 24)) % 365;
    let hours = ~~(seconds / (60 * 60)) % 24;
    let minutes = ~~(seconds / 60) % 60;
    seconds = seconds % 60;
    let duration = [years, days, hours, minutes, seconds];
    let name = ['year', 'day', 'hour', 'minute', 'second'];
    let res = duration.map((value, index) => {
        if (value === 0) return '';
        return `${value} ${name[index]}${value>1?'s':''}`;
    }).filter(val => val !== '');
    // 把最后一位替换
    return res.join(', ').replace(/,([^,]*)$/, " and$1");
}