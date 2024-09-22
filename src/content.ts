console.log("Content script loaded");

function getVideoInfo() {
  const video = document.querySelector("video");
  if (!video) return null;

  return {
    duration: video.duration,
    title: document.title,
  };
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getVideoInfo") {
    sendResponse(getVideoInfo());
  }
});
