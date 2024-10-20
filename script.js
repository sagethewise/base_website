document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

//This JavaScript code adds an event listener to each anchor (<a>) element whose href starts with #. When a menu item is clicked, it prevents the default behavior (navigating to a different page), finds the target section by its id, and smoothly scrolls to that section.

//Make sure to create the styles.css and script.js files and customize the styles and behavior to fit your specific design and content needs.
//Is this conversation helpful so far?
