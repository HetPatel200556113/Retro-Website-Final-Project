     // Get the "Send" button element
     const sendButton = document.getElementById("button");

     // Add an event listener to the "Send" button
     sendButton.addEventListener("click", function (event) {
         event.preventDefault(); // Prevent form submission (to keep the alert visible)

         // Display an alert when the "Send" button is clicked
         alert("Message sent successfully!");
     });

