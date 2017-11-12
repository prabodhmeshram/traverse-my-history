/* 
 For registering all the frontend Events
*/

document.addEventListener('click', () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].url);
    });
});