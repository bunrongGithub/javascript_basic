// Input string
const dateString = "2024-07-10T17:00:00.000Z";

// Create a new Date object from the ISO 8601 string
const dateObject = new Date(dateString);

// Extract the date part
const year = dateObject.getUTCFullYear();
const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(dateObject.getUTCDate()).padStart(2, '0');

// Form the date string in YYYY-MM-DD format
const formattedDate = `${year}-${month}-${day}`;

// Output the formatted date
console.log(formattedDate);