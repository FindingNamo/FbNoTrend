const fbTrendingDivId = "pagelet_trending_tags_and_topics";

function removeElementById(id) {
    let element = document.getElementById(fbTrendingDivId);
    if(element){
      element.remove();
    }
  }

function doWork() {
  removeElementById(fbTrendingDivId);
}

doWork();