document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch articles from the JSON file
    async function fetchArticles() {
        try {
            const response = await fetch('path/to/your/formatted_data.json');
            const articles = await response.json();
            displayArticles(articles);
        } catch (error) {
            console.error("Error fetching the articles:", error);
        }
    }

    // Function to display articles
    function displayArticles(articles) {
        const archiveResults = document.getElementById('archiveResults');
        archiveResults.innerHTML = ''; // Clear existing results

        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'article';
            articleDiv.setAttribute('data-category', article.category);
            articleDiv.setAttribute('data-month', article.date.split('-')[1]);
            articleDiv.setAttribute('data-year', article.date.split('-')[0]);

            articleDiv.innerHTML = `
                <h3>${article.category} - ${article.date}</h3>
                <p><strong>Page:</strong> ${article.page}</p>
                <p>${article.description}</p>
            `;

            archiveResults.appendChild(articleDiv);
        });
    }

    // Function to filter and search articles in archive.html
    function searchArticles() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const category = document.getElementById('categoryFilter').value.toLowerCase();
        const month = document.getElementById('monthFilter').value;
        const year = document.getElementById('yearFilter').value;
        const articles = document.querySelectorAll('.article');

        articles.forEach(article => {
            const title = article.querySelector('h3').innerText.toLowerCase();
            const description = article.querySelector('p:last-of-type').innerText.toLowerCase();
            const articleCategory = article.getAttribute('data-category').toLowerCase();
            const articleMonth = article.getAttribute('data-month');
            const articleYear = article.getAttribute('data-year');

            const matchesQuery = title.includes(query) || description.includes(query) || articleCategory.includes(query);
            const matchesCategory = !category || articleCategory === category;
            const matchesMonth = !month || articleMonth === month;
            const matchesYear = !year || articleYear === year;

            if (matchesQuery && matchesCategory && matchesMonth && matchesYear) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Load articles and set up event listeners
    fetchArticles(); // Fetch and display all articles initially
    document.getElementById('search-input').addEventListener('keyup', searchArticles);
    document.getElementById('categoryFilter').addEventListener('change', searchArticles);
    document.getElementById('monthFilter').addEventListener('change', searchArticles);
    document.getElementById('yearFilter').addEventListener('change', searchArticles);
});
