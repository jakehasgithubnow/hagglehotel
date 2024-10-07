// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        hotelName: params.get('name') || 'Hotel Name Not Provided',
        hotelAddress: params.get('address') || 'Address Not Provided',
        price: params.get('price') || 'Price Not Specified',
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
    document.getElementById('totalPrice').textContent = `€ ${data.price}`; // Simply display the price from URL
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

// ... (keep the existing getUrlParams and updateHotelInfo functions)

const negotiationSteps = [
    { text: "We've found the right phone number", delay: 2000 },
    { text: "The phone's ringing", delay: 4000 },
    { text: "The hotel has answered", delay: 6000 },
    { text: "We're discussing better deals", delay: 15000 },
    { text: "The hotel has confirmed a better deal for you!", delay: 120000 }
];

function updateNegotiationStep(index) {
    const step = negotiationSteps[index];
    const stepElement = document.querySelector(`#negotiationSteps li:nth-child(${index + 1})`);
    
    stepElement.classList.remove('in-progress');
    stepElement.classList.add('completed');
    stepElement.innerHTML = `✓ ${step.text}`;

    if (index < negotiationSteps.length - 1) {
        document.querySelector(`#negotiationSteps li:nth-child(${index + 2})`).classList.add('in-progress');
    }
}

function initializeNegotiationSteps() {
    const stepsContainer = document.getElementById('negotiationSteps');
    stepsContainer.innerHTML = ''; // Clear existing steps

    negotiationSteps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step.text;
        li.className = index === 0 ? 'in-progress' : '';
        li.innerHTML = `<span class="loading"></span> ${step.text}`;
        stepsContainer.appendChild(li);

        setTimeout(() => updateNegotiationStep(index), step.delay);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const hotelData = getUrlParams();
    updateHotelInfo(hotelData);
    
    // Start the simulated negotiation process
    initializeNegotiationSteps();
});
