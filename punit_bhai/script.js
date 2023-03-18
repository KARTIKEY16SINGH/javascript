'use-strict';
// Define the URL of the published Google Sheet
const sheetUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vREmax90yEFnRl4x5FH0bxES2IutaL-VA3-eAxlvdL14AFH_5gdGJ5EtFhM1fpbmBHNKyVaQERoBKYi/pubhtml?gid=0&single=true';

// Define the column indices for the username and password columns
const usernameColumn = 1;
const passwordColumn = 2;

// Define the function to authenticate the user
function authenticate(username, password) {
  // Get the username and password from the form
  // const username = document.getElementById("username").value;
  // const password = document.getElementById("password").value;

  // Fetch the data from the published Google Sheet
  fetch(sheetUrl)
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(data => {
      // Parse the data as HTML and extract the table rows
      const table = new DOMParser()
        .parseFromString(data, 'text/html')
        .querySelector('table');
      const rows = table.querySelectorAll('tr');

      // Loop through the rows and check if the username and password match
      for (let i = 1; i < rows.length; i++) {
        // Start at index 1 to skip header row
        const cells = rows[i].querySelectorAll('td');
        if (
          cells[usernameColumn - 1].textContent === username &&
          cells[passwordColumn - 1].textContent === password
        ) {
          // Grant access to the user
          // delete window.alert;
          window.alert('Authentication successful!');
          window.location.href = `new_index.html?${username}`;
          return;
        }
      }

      // Deny access to the user
      // delete window.alert;
      window.alert('Invalid username or password.');
    })
    .catch(error => console.error(error));
}

document.getElementById('submit').addEventListener('click', function () {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  authenticate(username, password);
});
