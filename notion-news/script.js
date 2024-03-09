const urlParams = new URLSearchParams(window.location.search);
const RSS_URL = urlParams.get("feedUrl"); // Get the "feedUrl" parameter from the URL

if (!RSS_URL) {
    console.error("Please provide a feed URL using the 'feedUrl' parameter");
}

fetch(RSS_URL)


    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll("item");
        let html = `
        <main class="FeedsWidget_feedsWidget__2E6dM default light">
            <div class="RefreshButton_container__SycaW">
                <button class="RefreshButton_refreshButton__2F2eY">👉 Refresh content 👈</button>
            </div>
            <ul>
                <li class="Feed_feed__2AZsj">
                    <h2>US Top News and Analysis</h2>
                    <ol class="FeedItems_feedItems__vZ4_T">
                    `;

        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const description = item.querySelector("description").textContent;
            const pubDate = item.querySelector("pubDate").textContent;
            const link = item.querySelector("link").textContent;

            // Create the list item structure
            html += `
        <li class="FeedItem_feedItem__37JEo">
          <p>${title}</p>
          <a href="${link}" target="_blank" target="_blank"></a>
          <time>${formatPubDate(pubDate)}</time>
        </li>
      `;
        });
        html += "</ol></li></ul></main>";



        // Function to format the published date (optional)
        function formatPubDate(pubDate) {
            const dateObj = new Date(pubDate);
            const year = dateObj.getFullYear();
            const month = dateObj.getMonth() + 1; // Months are zero-indexed
            const day = dateObj.getDate();
            const hours = dateObj.getHours().toString().padStart(2, "0"); // Pad with leading zero
            const minutes = dateObj.getMinutes().toString().padStart(2, "0");
            return `${month}/${day}/${year} ${hours}:${minutes}`;
        }

        document.getElementById("__next").innerHTML = html;
    })
    .catch(error => console.error(error));

