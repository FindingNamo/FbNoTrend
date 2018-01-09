// Id of the div containing the trending topics, gateway to the cancerous comments. Yuck.
const fbTrendingDivId = "pagelet_trending_tags_and_topics";

// Creates a CSS style to hide an element by id
function hideElementById(id) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `#${id} { display: none !important }`;
    document.getElementsByTagName("head")[0].appendChild(style);
}

// Remove an element if found
function removeElementById(id) {
    const element = document.getElementById(id);
    if(element){
      element.remove();
    }
}

setTimeout(() => {
    hideElementById(fbTrendingDivId);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if(request.event === "onCompleted"){
        removeElementById(fbTrendingDivId);
      }
  });
