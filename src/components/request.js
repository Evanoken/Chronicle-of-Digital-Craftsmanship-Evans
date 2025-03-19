fetch('https://app.outlier.ai/internal/experts/worker-skills')
  .then(response => response.json()) // Parses the response as JSON
  .then(data => console.log(data))   // Logs the data to the console
  .catch(error => console.error('Error:', error)); // Handles any errors