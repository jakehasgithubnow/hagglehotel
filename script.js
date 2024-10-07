// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        hotelName: params.get('name') || 'Hotel Name Not Provided',
        hotelAddress: params.get('address') || 'Address Not Provided',
        price: parseFloat(params.get('price')) || 0,
        roomType: params.get('room_type') || 'Room Type Not Specified',
        cancellationPolicy: params.get('cancellation_policy') || 'Cancellation Policy Not Specified',
        checkIn: params.get('checkin_date') || 'Check-in Date Not Specified',
        checkOut: params.get('checkout_date') || 'Check-out Date Not Specified',
        checkInTime: params.get('checkin_time') || 'Check-in Time Not Specified',
        checkOutTime: params.get('checkout_time') || 'Check-out Time Not Specified',
        stayLength: params.get('length_of_stay') || 'Length of Stay Not Specified',
        hotelFacilities: params.get('hotel_facilities') ? params.get('hotel_facilities').split(',') : [],
        roomFacilities: params.get('room_facilities') ? params.get('room_facilities').split(',') : []
    };
}

// Function to update the page with hotel data
function updateHotelInfo(data) {
    document.getElementById('hotelName').textContent = data.hotelName;
    document.getElementById('hotelAddress').textContent = data.hotelAddress;
    document.getElementById('totalPrice').textContent = `€ ${data.price.toFixed(2)}`;
    document.getElementById('roomType').textContent = data.roomType;
    document.getElementById('cancellationPolicy').textContent = data.cancellationPolicy;
    document.getElementById('checkIn').textContent = `${data.checkIn} ${data.checkInTime}`;
    document.getElementById('checkOut').textContent = `${data.checkOut} ${data.checkOutTime}`;
    document.getElementById('stayLength').textContent = data.stayLength;

    // Update hotel facilities
    const hotelFacilitiesContainer = document.getElementById('hotelFacilities');
    hotelFacilitiesContainer.innerHTML = '';
    data.hotelFacilities.forEach(facility => {
        const span = document.createElement('span');
        span.textContent = facility;
        span.className = 'facility-chip';
        hotelFacilitiesContainer.appendChild(span);
    });

    // Update room facilities
    const roomFacilitiesContainer = document.getElementById('roomFacilities');
    roomFacilitiesContainer.innerHTML = '';
    data.roomFacilities.forEach(facility => {
        const span = document.createElement('span');
        span.textContent = facility;
        span.className = 'facility-chip';
        roomFacilitiesContainer.appendChild(span);
    });
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
                const currentPrice = parseFloat(document.getElementById('totalPrice').textContent.replace('€ ', ''));
                const newPrice = currentPrice * 0.85; // 15% discount
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
    const hotelData = getUrlParams();
    updateHotelInfo(hotelData);
    simulateNegotiation();
    updatePeopleSaved();

    // Add event listener for "Show on map" button
    document.querySelector('.show-map-btn').addEventListener('click', function() {
        alert('This would open a map view of the hotel location.');
    });
});
