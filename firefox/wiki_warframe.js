chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      let oldUrl = new URL(details.url);
      let newUrl = "https://wiki.warframe.com/w/" + oldUrl.pathname.split("/").pop();
      
      return { redirectUrl: newUrl };
    },
    { urls: ["*://warframe.fandom.com/wiki/*"] },
    ["blocking"]
  );
  