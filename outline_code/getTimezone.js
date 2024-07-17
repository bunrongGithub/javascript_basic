// Function to get current date and time in a specific time zone
function getCurrentDateTimeInTimeZone(timeZone) {
    const now = new Date();
    const options = { timeZone, hour12: false, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

// Example usage
const thailandDateTime = getCurrentDateTimeInTimeZone('Asia/Bangkok');
console.log(thailandDateTime);
