// Select all navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section ID from href (without the #)
        const targetId = this.getAttribute('href').substring(1);

        // Hide all main sections
        hideAllSections();

        // Show the correct section based on clicked link
        if (targetId === 'home') {
            document.getElementById('about').style.display = 'block';
        } else if (targetId === 'featured') {
            document.getElementById('featured').style.display = 'block';
        } else if (targetId === 'contact') {
            document.getElementById('contact').style.display = 'block';
        }
    });
});

// Function to hide all key sections
function hideAllSections() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('featured').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

// Show "About Us" by default when page loads
window.addEventListener('DOMContentLoaded', () => {
    hideAllSections();
    document.getElementById('about').style.display = 'block';
});
