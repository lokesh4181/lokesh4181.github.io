document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.getElementById('progress');
    let progress = 0;

    function updateProgress() {
        if (progress <= 100) {
            progressElement.textContent = `${progress}%`;
            progress++;
            setTimeout(updateProgress, 100); // Update every 100ms
        }
    }

    updateProgress();
});