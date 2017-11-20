// Id of the div containing the trending topics, gateway to the cancerous comments. Yuck.
const fbTrendingDivId = "pagelet_trending_tags_and_topics";

// Remove an element if found
function removeElementById(id) {
    let element = document.getElementById(fbTrendingDivId);
    if(element){
      element.remove();
    }
  }

// Entry point
function doWork() {
  removeElementById(fbTrendingDivId);
}

// Call entry point
doWork();