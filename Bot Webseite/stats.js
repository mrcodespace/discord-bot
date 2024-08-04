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

    const serverCount = 9999;
    const userCount = 1242212;
    const uptime = 542;
    const commands = 2241222;

    animateNumber('serverCount', serverCount, 2000);
    animateNumber('userCount', userCount, 3000);
    animateNumber('uptime', uptime, 2500);
    animateNumber('commands', commands, 4000);
});
