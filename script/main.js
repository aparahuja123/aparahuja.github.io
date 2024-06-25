
function updateTimer() {
    const startDate = new Date('2023-01-01T00:00:00'); // Replace with your start date and time
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    document.getElementById('timer').innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
