document.addEventListener('DOMContentLoaded', function () {
  const navContainer = document.getElementById('nav-container');
  
  // Load the navigation bar dynamically
  fetch('nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load nav.html');
      }
      return response.text();
    })
    .then(data => {
      navContainer.innerHTML = data;

      // Attach the toggle functionality after the nav is loaded
      const menuToggle = document.querySelector('.menu-toggle');
      menuToggle.addEventListener('click', function () {
        document.body.classList.toggle('menu-active');
      });
    })
    .catch(error => console.error('Error loading nav:', error));
});
