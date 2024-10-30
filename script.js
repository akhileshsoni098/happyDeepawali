document.addEventListener("DOMContentLoaded", function() {
    const fireworksContainer = document.getElementById('fireworks-container');
    const bigRocket = document.getElementById('bigRocket');
    const message = document.getElementById('message');
  
    function createFireworks() {
      for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.left = `${Math.random() * 100}vw`;
        fireworksContainer.appendChild(firework);
        
        // Remove firework after 1 second
        setTimeout(() => {
          firework.remove();
        }, 1000);
      }
    }
  
    function rocketBlast() {
      bigRocket.style.display = 'block';
      bigRocket.style.animation = 'rocketMove 2s ease-in-out forwards';
  
      setTimeout(() => {
        bigRocket.style.display = 'none';
        message.style.display = 'block';
        message.style.opacity = '1';
      }, 2000);
    }
  
    function resetAndRestart() {
      setTimeout(() => {
        message.style.opacity = '0';
        fireworksContainer.innerHTML = ''; // Remove fireworks
        setTimeout(startAnimation, 3000);
      }, 5000);
    }
  
    function startAnimation() {
      createFireworks();
      setTimeout(rocketBlast, 3000);
      setTimeout(resetAndRestart, 12000);
    }
  
    startAnimation();
  });
  