// Initialize count
let count = 0;
let x = 20
// Select the button and count display
const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('count');

// Add event listener to the button
button.addEventListener('click', function() {
    // Increment count if it's less than x
    if (count < x) {
    count++;
    countDisplay.textContent = count; }
    else {alert("Maximum limit reached");
    }
});
