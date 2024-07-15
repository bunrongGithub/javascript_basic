function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2));        // Output: 3
  console.log(sum(1, 2, 3));     // Output: 6
  console.log(sum(1, 2, 3, 4));  // Output: 10
  
  function logMessage(level, ...messages) {
    console[level](...messages)
  }
  
  logMessage('log', 'This is a log message.');               // Logs: This is a log message.
  logMessage('warn', 'Warning!', 'Check your settings.');    // Logs: Warning! Check your settings.
  logMessage('error', 'An error occurred.', 'File not found.');  // Logs: An error occurred. File not found.
  

  function max(...numbers) {
    return Math.max(...numbers);
  }
  
  console.log(max(1, 2, 3));        // Output: 3
  console.log(max(10, 3, 25, 6));   // Output: 25
  