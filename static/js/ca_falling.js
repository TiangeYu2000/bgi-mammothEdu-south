// Create the acid elements and make them fall within the intro section
function createFallingAcid() {
    const acid = document.createElement('div');
    acid.classList.add('caffeic-acid');

    // Get the intro section and its dimensions
    const introSection = document.querySelector('.intro');
    const introRect = introSection.getBoundingClientRect();

    // Randomize the position within the intro section only
    const randomX = Math.random() * introRect.width;
    acid.style.left = `${introRect.left + randomX}px`; // Fall within intro section

    document.getElementById('falling-acids-container').appendChild(acid);

    // Add click event to collect acid
    acid.addEventListener('click', function () {
        collectAcid(this);
    });

    // Remove acid after it falls off the screen
    setTimeout(() => {
        acid.remove();
    }, 5000); // Adjust to match animation duration
}

// Function to move clicked acid to the word "light" (inside intro__title)
function collectAcid(acid) {
    const target = document.getElementById('light-word'); // Target the span around the word "light"
    const targetRect = target.getBoundingClientRect(); // Get the position of the word "light"

    // Get the acid's current position (relative to viewport)
    const acidRect = acid.getBoundingClientRect();

    // Calculate the center of the word "light"
    const targetX = targetRect.left + targetRect.width / 2 - acidRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2 - acidRect.height / 2;

    // Adjust for scroll position
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Move the acid towards the center of the word "light"
    acid.style.transition = 'all 1s ease';
    acid.style.left = `${targetX + scrollX}px`; // Add scroll offsets
    acid.style.top = `${targetY + scrollY}px`;

    // Optional: Fade out acid as it gets collected
    acid.style.opacity = '0';

    // Remove acid after it reaches the target
    setTimeout(() => {
        acid.remove();
    }, 1000); // Match transition time
}

// Generate acids at random intervals only within the intro section
setInterval(createFallingAcid, 2000); // Create a new acid every 2 seconds
