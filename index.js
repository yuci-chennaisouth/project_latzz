document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll('.scroll-animate');
  
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-in-view');
            }
        });
    });
  
    elements.forEach(el => {
        observer.observe(el);
    });
});

var background_audio=document.getElementById('background_audio');
window.onload = function() {
  background_audio.play();
};

//poem text
let count = 1;
    let intervalId; // To store the interval ID

    function visibility_hidder() {
      // Reset count and hide all spans initially
      count = 1;
      for (let i = 1; i <= 6; i++) {
        document.getElementById(`text_appear_${i}`).style.visibility = 'hidden';
      }

      // Start displaying the poem with intervals
      intervalId = setInterval(poem_displayer, 1750); // Call poem_displayer every 1.75 seconds

      // Stop the interval after 10.5 seconds
      setTimeout(() => {clearInterval(intervalId);background_audio.play();}, 11500);
    }

    function poem_displayer() {
      // Display the current span
      if (count <= 6) {
        document.getElementById(`text_appear_${count}`).style.visibility = 'visible';
        count++;
      }
    }

    // Get the audio element and add an event listener to play event
    var audio_content = document.getElementById('myaudio');
    audio_content.addEventListener('play', () => {
      background_audio.pause();
      visibility_hidder(); // Trigger poem display when the audio plays
      
    });

