let save2Html = document.getElementById("save2Html");

save2Html.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: saveCurrentPageAsHtml,
  });
});

function saveCurrentPageAsHtml() {
  // TODO: Get some help from 'https://github.com/fool2fish/snapshot-as-html' (MIT license)
}
