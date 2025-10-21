// Update current time in milliseconds
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTimeMs');
    if (currentTimeElement) {
        const currentTime = Date.now();
        currentTimeElement.textContent = currentTime;
    }
}

// Initialize time display
updateCurrentTime();

// Update time every second to show live milliseconds
setInterval(updateCurrentTime, 1000);
