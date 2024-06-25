const averageHeartRate = 80;

function updateTimer() {
    // Set the start date in IST
    const startDateIST = new Date('2023-05-21T00:00:00+05:30');
    const now = new Date();

    // Convert the current time to IST (UTC+5:30)
    const nowIST = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));

    const diff = nowIST - startDateIST;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    const totalMinutes = days * 24 * 60 + hours * 60 + minutes;
    const totalHeartbeats = totalMinutes * averageHeartRate;

    document.getElementById('timer').innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    document.getElementById('heartbeatCount').innerText = totalHeartbeats.toLocaleString();
}

setInterval(updateTimer, 1000);
