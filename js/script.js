// Initialize AOS
AOS.init();

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Work Page Filtering and Search (only runs if on work.html)
if (document.getElementById('article-grid')) {
    const articles = document.querySelectorAll('.article-card');
    const searchInput = document.getElementById('search');
    const filterButtons = document.querySelectorAll('.filters button');

    // Filter Function
    function filterArticles(category) {
        articles.forEach(article => {
            if (category === 'all' || article.dataset.category === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Search Function
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        articles.forEach(article => {
            const title = article.querySelector('h3').textContent.toLowerCase();
            const excerpt = article.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });

    // Filter Button Clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterArticles(button.dataset.filter);
        });
    });

    // Initial Filter
    filterArticles('all');
}
