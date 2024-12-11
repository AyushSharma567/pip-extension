// Helper to send commands to the content script
const sendCommand = (command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (cmd) => {
          const video = document.querySelector("video");
          if (!video) return alert("No video found on this page!");

          switch (cmd) {
            case "pip":
              if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
              } else {
                video.requestPictureInPicture();
              }
              break;
            case "playPause":
              video.paused ? video.play() : video.pause();
              break;
            case "forward":
              video.currentTime += 5; // 5 seconds 
              break;
            case "backward":
              video.currentTime -= 5; // 5 seconds
              break;
            default:
              break;
          }
        },
        args: [command],
      });
    }
  });
};

// Button click listeners
document.getElementById("pipButton").addEventListener("click", () => sendCommand("pip"));
document.getElementById("playPauseButton").addEventListener("click", () => sendCommand("playPause"));
document.getElementById("forwardButton").addEventListener("click", () => sendCommand("forward"));
document.getElementById("backwardButton").addEventListener("click", () => sendCommand("backward"));
