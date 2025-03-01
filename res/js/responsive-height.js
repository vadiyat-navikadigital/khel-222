
function adjustHeight() {
    // Get the full window height
    const windowHeight = window.innerHeight;

    // Get the height of the viewport minus the visible area (i.e., browser's UI bars)
    const content = document.getElementById('main-1');

    // Set the height of the content div dynamically
    content.style.height = windowHeight + 'px';
}

// Adjust height on page load
window.addEventListener('load', adjustHeight);

// Adjust height on window resize (for responsive adjustment)
window.addEventListener('resize', adjustHeight);