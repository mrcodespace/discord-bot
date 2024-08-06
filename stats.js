document.addEventListener('DOMContentLoaded', function () {
    function animateNumber(id, endValue, duration) {
        const element = document.getElementById(id);
        let startValue = 0;
        const startTime = Date.now();
        
        function update() {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            element.textContent = Math.floor(progress * endValue).toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        update();
    }

    const serverCount = 86;
    const userCount = 3100;
    const uptime = 120;
    const commands = 172890;

    animateNumber('serverCount', serverCount, 2000);
    animateNumber('userCount', userCount, 3000);
    animateNumber('uptime', uptime, 2500);
    animateNumber('commands', commands, 4000);
});
