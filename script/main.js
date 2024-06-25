const averageHeartRate = 80; // Average heart rate in beats per minute

function updateTimer() {
    // Start date in IST
    const startDateIST = new Date('2023-05-21T00:00:00+05:30');
    const now = new Date();

    // Calculate the time difference in milliseconds
    const diff = now - startDateIST;

    // Calculate total seconds, minutes, hours, and days
    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);

    // Calculate total heartbeats
    const totalHeartbeats = Math.floor(totalSeconds * averageHeartRate / 60);

    // Update the HTML content
    const timerElement = document.getElementById('timer');
    const isMobile = window.innerWidth <= 600;
    if (isMobile) {
        timerElement.innerHTML = `${days} days ${hours} hours<br>${minutes} minutes ${seconds} seconds`;
    } else {
        timerElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
    document.getElementById('heartbeatCount').innerText = totalHeartbeats.toLocaleString();
}

// Initial call to update the timer and heartbeat count
updateTimer();

// Update the timer and heartbeat count every second
setInterval(updateTimer, 1000);
