
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
    const segments = document.querySelectorAll('.countdown-segment');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const timeUnits = [days, hours, minutes, seconds];
        
        segments.forEach((segment, index) => {
            const front = segment.querySelector('.front');
            const back = segment.querySelector('.back');
            const currentValue = parseInt(front.textContent, 10);
            const newValue = timeUnits[index];
            
            if (currentValue !== newValue) {
                back.textContent = newValue < 10 ? `0${newValue}` : newValue;
                segment.querySelector('.countdown-card').classList.add('flip');
                
                setTimeout(() => {
                    front.textContent = back.textContent;
                    segment.querySelector('.countdown-card').classList.remove('flip');
                }, 500);
            }
        });
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            segments.forEach(segment => {
                segment.querySelector('.front').textContent = "00";
            });
        }
    }
    
    const countdownInterval = setInterval(updateCountdown, 1000);
});
