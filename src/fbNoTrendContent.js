// Id of the div containing the trending topics, gateway to the cancerous comments. Yuck.
const fbTrendingDivId = "pagelet_trending_tags_and_topics";

// Remove an element if found
function removeElementById(id) {
    let element = document.getElementById(id);
    if(element){
      element.remove();
    }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
   removeElementById(fbTrendingDivId);
  });
