//your JS code here. If required.
const sound=['applause' , 'boo', 'gasp','tada','victory','wrong','stop'];
 function playSound(sound) {
      stopSounds();
      const audio = new Audio(`./sounds/${sound}.mp3`);
      audio.play();
      audio.id = sound;
      document.body.appendChild(audio);
    }

    function stopSounds() {
      sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          audio.remove();
        }
      });
    }


