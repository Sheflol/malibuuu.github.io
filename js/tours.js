document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const tourItems = document.querySelectorAll('.tour-item');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const destination = document.getElementById('destination').value.toLowerCase();
        const duration = document.getElementById('duration').value;
        const priceMin = document.getElementById('price-min').value;
        const priceMax = document.getElementById('price-max').value;
        const tourType = document.getElementById('tour-type').value;

        tourItems.forEach(function(tourItem) {
            const tourDestination = tourItem.dataset.destination.toLowerCase();
            const tourDuration = tourItem.dataset.duration;
            const tourPrice = parseFloat(tourItem.dataset.price);
            const tourTypeData = tourItem.dataset.type;

            let match = true;

            if (destination && !tourDestination.includes(destination)) {
                match = false;
            }

            if (duration && tourDuration !== duration) {
                match = false;
            }

            if (priceMin && tourPrice < parseFloat(priceMin)) {
                match = false;
            }
            if (priceMax && tourPrice > parseFloat(priceMax)) {
                match = false;
            }

            if (tourType && tourTypeData !== tourType) {
                match = false;
            }

            if (match) {
                tourItem.style.display = 'block';
            } else {
                tourItem.style.display = 'none';
            }
        });
    });
});