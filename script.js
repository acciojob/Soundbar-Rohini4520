//your JS code here. If required.
// Array of sound file names (make sure they match the actual filenames in the "sounds" directory)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];

// Reference to the buttons container
const buttonsDiv = document.getElementById("buttons");

// Function to stop all currently playing sounds
function stopAllSounds() {
    document.querySelectorAll("audio").forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // Reset to the start
    });
}

// Add a button for each sound
sounds.forEach((sound) => {
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = sound.split(".")[0]; // Display sound name without the file extension

    // Attach event listener to play the sound
    button.addEventListener("click", () => {
        stopAllSounds(); // Stop other sounds before playing a new one
        const audio = new Audio(`./sounds/${sound}`);
        audio.play();
    });

    buttonsDiv.appendChild(button);
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", stopAllSounds);
