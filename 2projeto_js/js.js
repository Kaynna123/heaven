window.onload = function () {
    const clouds = document.querySelectorAll('.clouds');
  
    clouds.forEach(clouds => {
      animateCloud(clouds);
    });
  };
  
  function animateCloud(clouds) {
    const screenWidth = window.innerWidth;
    const start = -100; // Starting point for the cloud off-screen
    const end = screenWidth + 100; // Ending point for the cloud off-screen
  
    let position = start;
  
    const animate = () => {
      position += 0.90; // Adjust the speed of the cloud
      clouds.style.left = position + '100px';
  
      if (position > end) {
        position = start;
      }
  
      requestAnimationFrame(animate);
    };
  
    animate();
  }
  