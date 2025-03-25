//your JS code here. If required.
<script>
  window.sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

  function playSound(sound) {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    audio.id = sound;
    document.body.appendChild(audio);
  }

  function stopSounds() {
    window.sounds.forEach(sound => {
      const audio = document.getElementById(sound);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.remove();
      }
    });
  }

  window.playSound = playSound;
  window.stopSounds = stopSounds;
