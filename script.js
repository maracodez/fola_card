//to send mail
function sendEmail() {
    window.location.href = "mailto:nyechiscouture@example.com";
}

const loader = document.getElementById('loader');

// Create stars starting from the center circle
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random size between 15px and 30px
    const size = 15 + Math.random() * 20;
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // Random explosion direction
    const angle = Math.random() * (2 * Math.PI);
    const distance = 180 + Math.random() * 200;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    star.style.setProperty('--x', `${x}px`);
    star.style.setProperty('--y', `${y}px`);

    // Random delay for staggered effect
    star.style.animationDelay = (Math.random() * 2) + 's';

    // Position in center
    star.style.left = centerX - size / 2 + 'px';
    star.style.top = centerY - size / 2 + 'px';

    loader.appendChild(star);
}

// Hide loader after animation
setTimeout(() => {
    loader.style.display = 'none';
    document.getElementById('main').style.display = 'flex';
}, 3000);



  function updateUTCTime() {
    const utcTimeElement = document.querySelector(".utc-time");

    function refreshTime() {
        const now = new Date();
        utcTimeElement.textContent = "UTC Time: " + now.toUTCString();
    }

    // Update immediately when the page loads
    refreshTime();

    // Set an interval to update the time every second
    setInterval(refreshTime, 1000);
}

// Call the function when the page loads
updateUTCTime();
