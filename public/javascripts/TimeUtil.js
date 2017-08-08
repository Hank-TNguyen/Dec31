const xhr = new XMLHttpRequest();
const timeEdmontonUrl = "https://api.timezonedb.com/v2/get-time-zone?key=K7SSDAINZJXE&format=json&by=zone&zone=America/Edmonton";

export function sendGETRequest(url, async = true) {
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if ( xhr.status >= 200 && xhr.status < 300 ) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => reject(xhr.statusText);
        xhr.open("GET", url, async);
        xhr.send(null);
    });
}

export function getEdmontonTime() {
    return sendGETRequest(timeEdmontonUrl);
}