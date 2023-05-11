// estimate-read-time.js
// created by Leon Roy
// https://stakra.io

// Function to estimate the read time in minutes
function estimateReadTime(words) {
  // Average reading speed in words per minute
  var wordsPerMinute = 183;

  // Calculate the read time
  var minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}

// Find the HTML element with attribute 'estimate-read-time="true"'
var element = document.querySelector('[estimate-read-time="true"]');

// Get the data attribute value for the read time placeholder
var placeholderId = element.getAttribute('data-read-time-placeholder');

// Find the element with the read time placeholder data attribute
var placeholder = document.querySelector('[data-read-time-placeholder="' + placeholderId + '"]');

// Get the text content of the element
var text = element.textContent.trim();

// Count the number of words
var words = text.split(/\s+/).length;

// Estimate the read time
var minutes = estimateReadTime(words);

// Display the estimated read time in the placeholder element
placeholder.textContent = minutes;
