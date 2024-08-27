// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save the dark mode setting to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load dark mode preference from localStorage
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Add event listener for dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Apply the saved dark mode preference on page load
loadDarkModePreference();

// Functionality for "Enter" key in the search bar
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        document.getElementById('search-button').click(); // Trigger the search button click
    }
});

// Example search button click handler (Replace with actual search functionality)
document.getElementById('search-button').addEventListener('click', function() {
    let query = document.getElementById('search-input').value;
    alert('Search for: ' + query); // Replace this with your search functionality
});
