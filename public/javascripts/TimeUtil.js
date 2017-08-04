var timezonedb = require('timezonedb-node')('K7SSDAINZJXE');

function getEdmontonTime() {
    return timezonedb.getTimeZoneData({
        zone: 'America/Edmonton'
    }, function (error, data) {
        if (!error) {
            return data;
        } else {
            return error;
        }
    });
}

module.exports = getEdmontonTime;