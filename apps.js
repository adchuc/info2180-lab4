document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const resultDiv = document.getElementById('results');

    searchBtn.addEventListener('click', function() {
        fetch ('superheroes.php')
        .then(response => response.text())
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching superheroes:', error);
        });
    }); 
});