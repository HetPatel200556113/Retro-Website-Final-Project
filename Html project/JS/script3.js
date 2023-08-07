// Define a function called includeHTML
function includeHTML() {
  // Create a new instance of XMLHttpRequest
  const xhttp = new XMLHttpRequest();

  // Set a callback function to be executed whenever the readyState of the XMLHttpRequest changes
  xhttp.onreadystatechange = function() {
      // Check if the readyState is 4 (completed) and the status is 200 (OK)
      if (this.readyState == 4 && this.status == 200) {
          // Set the content of an HTML element with the id 'addHeader' to the received response text
          document.getElementById('addHeader').innerHTML = this.responseText;
      }
  };

  // Open an asynchronous GET request to 'header.html'
  xhttp.open('GET', 'header.html', true);

  // Send the GET request
  xhttp.send();
}

// Call the includeHTML function to initiate the process of including the HTML content
includeHTML();
