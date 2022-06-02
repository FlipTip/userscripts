// ==UserScript==
// @name         YT Downloader
// @namespace    http://tampermonkey.net/
// @version      1
// @description  youtube downloader
// @author       fliptip
// @include      https://*.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/FlipTip/userscripts/main/yt_downloader.user.js
// ==/UserScript==

(function() {

    window.addEventListener('load', () => {
        let download = document.getElementById("player").getElementsByTagName("video")[0];
        
        var src = download.src;
        
        const title = document.getElementsByClassName("slim-video-information-title")[0];
        
        
        let link = document.createElement("a");
        link.download = true
        link.title = title.innerHTML
        link.href = src;
        link.innerHTML = "Download"
        // link.style.color = "red"

        let share = document.createElement("button");
        share.href = src;
        share.innerHTML = "Share"
        share.style.color = "red"

        document.getElementsByClassName("slim-video-metadata-information-standalone-badge")[0].appendChild(link);
        document.getElementsByClassName("slim-video-metadata-information-standalone-badge")[0].appendChild(share);
       
  const shareData = {
    url: src
  };

  // Share must be triggered by "user activation"
  share.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
    } catch(err) {
    }
  });
    });
})();
