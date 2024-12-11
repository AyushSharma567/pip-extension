(function () {
    // Check if overlay already exists
    if (document.getElementById("pipControlsOverlay")) return;
  
    // Create floating overlay
    const overlay = document.createElement("div");
    overlay.id = "pipControlsOverlay";
    overlay.style.position = "fixed";
    overlay.style.bottom = "10px";
    overlay.style.right = "10px";
    overlay.style.zIndex = "10000";
    overlay.style.background = "rgba(0, 0, 0, 0.7)";
    overlay.style.padding = "10px";
    overlay.style.borderRadius = "10px";
    overlay.style.color = "white";
    overlay.style.fontSize = "16px";
    overlay.style.display = "flex";
    overlay.style.gap = "10px";
  
    // Create buttons
    const createButton = (text, command) => {
      const button = document.createElement("button");
      button.innerText = text;
      button.style.padding = "10px";
      button.style.background = "#ff0000";
      button.style.border = "none";
      button.style.color = "white";
      button.style.borderRadius = "5px";
      button.style.cursor = "pointer";
      button.onclick = () => {
        const video = document.querySelector("video");
        if (!video) return;
        if (command === "forward") video.currentTime += 300;
        else if (command === "backward") video.currentTime -= 300;
      };
      return button;
    };
  
    // Add buttons to overlay
    overlay.appendChild(createButton("-5 Min", "backward"));
    overlay.appendChild(createButton("+5 Min", "forward"));
  
    // Add overlay to the document
    document.body.appendChild(overlay);
  })();
  