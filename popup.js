let save2Html = document.getElementById("save2Html");

save2Html.addEventListener("click", async () => {
  console.log("Save button is clicked");
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  console.log("tab", tab);

  // TODO: Continue!
});
