document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchBox = document.getElementById("search-box");

    searchButton.addEventListener("click", () => {
        const query = searchBox.value.trim();
        if (query) {
            alert(`Searching for "${query}"...`);
        } else {
            alert("Please enter a search term.");
        }
    });
});
