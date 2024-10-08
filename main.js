
function injectScript() {
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL('content.js');
    document.body.append(s);
}
 if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectScript);
    } else {
        injectScript();
    }