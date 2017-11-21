 chrome.webNavigation.onCompleted.addListener(function(e) {
	 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {event: "onCompleted"}, function(response) {
		});
	});

}, {url: [{hostSuffix: 'facebook.com'}]});
