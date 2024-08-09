// Handle form submission and authentication logic here
// Replace this with your actual AI authentication logic
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform authentication logic
    // If successful, redirect to main app or handle successful login
    // If unsuccessful, display error message
});
const heading = document.getElementById('dynamicHeading');

// Simple text animation
function animateHeading() {
  heading.textContent = 'Dynamic Portfolio';
  setTimeout(() => {
    heading.textContent = 'Welcome to My Portfolio';
  }, 2000);
}

animateHeading(); // Call the function to start the animation

// Adding a hover effect to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'red';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#333';
  });
});
