document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search input');
    const searchResults = document.createElement('div');
    searchResults.classList.add('search-results');
    document.body.appendChild(searchResults);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query) {
            searchResults.innerHTML = `<p>Results for "${query}"</p>`;
            // Simulate search results
            const results = ['flight', 'hotel', 'car rental', 'holiday packages']
                .filter(item => item.includes(query))
                .map(item => `<div>${item}</div>`)
                .join('');
            searchResults.innerHTML += results;
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && !searchInput.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Modal for promo section
    const promoButton = document.querySelector('#promo button');
    const promoModal = document.createElement('div');
    promoModal.classList.add('modal');
    promoModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Learn more about our Premium Economy.</p>
        </div>
    `;
    document.body.appendChild(promoModal);

    if (promoButton) {
        promoButton.addEventListener('click', () => {
            promoModal.style.display = 'block';
        });
    }

    const closeModal = promoModal.querySelector('.close');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            promoModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === promoModal) {
            promoModal.style.display = 'none';
        }
    });
});
