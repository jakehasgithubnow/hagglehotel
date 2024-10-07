// Simulated data that would normally come from a server
const hotelData = {
    hotelName: "Zenit Málaga",
    hotelAddress: "Cuba, 1-3, Malaga Centro, 29013 Málaga, Spain",
    rating: 8.3,
    reviewCount: 2206,
    amenities: ["Pets allowed", "Free WiFi", "Parking", "Restaurant"],
    checkIn: "Thu 19 Dec 2024",
    checkOut: "Thu 26 Dec 2024",
    stayLength: "1 week",
    roomDetails: "1 room for 2 adults",
    initialPrice: 538.20,
    roomType: "Double or Twin Room",
    cancellationPolicy: "Free cancellation before 18 December 2024",
    guestCount: "2 adults",
    cleanlinessRating: 8.8
};

// Function to update the page with hotel data
function updateHotelInfo(data) {
    document.getElementById('hotelName').textContent = data.hotelName;
    document.getElementById('hotelAddress').textContent = data.hotelAddress;
    document.getElementById('hotelRating').textContent = `${data.rating} Very good · ${data.reviewCount} reviews`;
    
    const amenitiesContainer = document.getElementById('hotelAmenities');
    amenitiesContainer.innerHTML = '';
    data.amenities.forEach(amenity => {
        const span = document.createElement('span');
        span.textContent = amenity;
        amenitiesContainer.appendChild(span);
    });

    document.getElementById('checkIn').textContent = data.checkIn;
    document.getElementById('checkOut').textContent = data.checkOut;
    document.getElementById('stayLength').textContent = data.stayLength;
    document.getElementById('roomDetails').textContent = data.roomDetails;
    document.getElementById('totalPrice').textContent = `€ ${data.initialPrice.toFixed(2)}`;
    document.getElementById('roomType').textContent = data.roomType;
    document.getElementById('cancellationPolicy').textContent = data.cancellationPolicy;
    document.getElementById('guestCount').textContent = data.guestCount;
    document.getElementById('cleanlinessRating').textContent = `Exceptionally clean rooms - ${data.cleanlinessRating}`;
}

// Function to simulate negotiation process
function simulateNegotiation() {
    const steps = document.querySelectorAll('#negotiationSteps li');
    let currentStep = 0;

    function updateStep() {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('completed');
            if (currentStep < steps.length - 1) {
                steps[currentStep + 1].classList.add('in-progress');
            }
            currentStep++;
            if (currentStep < steps.length) {
                setTimeout(updateStep, 2000); // Wait 2 seconds before next step
            } else {
                // Negotiation complete, update price
                const newPrice = hotelData.initialPrice * 0.85; // 15% discount
                document.getElementById('totalPrice').textContent = `€ ${newPrice.toFixed(2)}`;
                document.getElementById('totalPrice').style.color = 'green';
            }
        }
    }

    updateStep();
}

// Function to update the number of people who saved
function updatePeopleSaved() {
    let saved = 112; // Start with the initial number
    const savedElement = document.getElementById('peopleSaved');

    function incrementSaved() {
        saved++;
        savedElement.textContent = `${saved} people have saved today!`;
        setTimeout(incrementSaved, Math.random() * 10000 + 5000); // Random interval between 5-15 seconds
    }

    incrementSaved();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateHotelInfo(hotelData);
    simulateNegotiation();
    updatePeopleSaved();

    // Add event listener for "Show on map" button
    document.querySelector('.show-map-btn').addEventListener('click', function() {
        alert('This would open a map view of the hotel location.');
    });
});
