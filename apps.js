document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        const sanitizedQuery = encodeURIComponent(query);

        fetch (`superheroes.php?query=${sanitizedQuery}`)
        .then(response => response.text())
        .then(data => {
            resultsDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching superheroes:', error);
        });
    }); 
});