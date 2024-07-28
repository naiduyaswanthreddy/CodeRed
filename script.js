function checkPassengerCount() {
    var passengers = document.getElementById('passengers').value;
    var bikeOption = document.getElementById('bike');

    if (passengers > 1) {
        bikeOption.disabled = true;
    } else {
        bikeOption.disabled = false;
    }
}
// Assume this is the gender retrieved from the profile page
window.onload = function() {
    // This should be replaced with the actual selector for the gender element on the profile page
    var genderElement = document.querySelector('#genderElement');

    // Retrieve the gender from the profile page
    var genderFromProfile = genderElement.textContent || genderElement.innerText;

    var femaleOption = document.querySelector('#gender option[value="female"]');
    var maleOption = document.querySelector('#gender option[value="male"]');

    // Disable the "Female" option if the gender from the profile is "Male"
    if (genderFromProfile === "male") {
        femaleOption.disabled = true;
    }
    // Similarly, disable the "Male" option if the gender from the profile is "Female"
    else if (genderFromProfile === "female") {
        maleOption.disabled = true;
    }
}
// This is just a placeholder. In a real application, you would fetch this data from the server.
var availableRides = [
    { id: 1, destination: 'Mangalgiri', seats: 3 },
    { id: 2, destination: 'Amrita Vishwa Vidyapeetham', seats: 2 },
    { id: 3, destination: 'Vijayawada', seats: 2 },
    { id: 4, destination: 'Guntur', seats: 1 }
];

window.onload = function() {
    var ridesDiv = document.querySelector('#available-rides');

    // Create a checkbox for each available ride and add it to the div
    availableRides.forEach(function(ride) {
        var rideItem = document.createElement('div');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'ride-' + ride.id;
        checkbox.name = 'ride';
        checkbox.value = ride.id;

        var label = document.createElement('label');
        label.htmlFor = 'ride-' + ride.id;
        label.textContent = 'Ride to ' + ride.destination + ', ' + ride.seats + ' seats available';

        rideItem.appendChild(checkbox);
        rideItem.appendChild(label);
        ridesDiv.appendChild(rideItem);
    });
};

window.onload = function() {
    // Load saved values from local storage
    var savedVehicleType = localStorage.getItem('TypeOfVehicle');
    var savedEmptySeats = localStorage.getItem('EmptySeats');

    if (savedVehicleType) {
        document.getElementById('TypeOfVehicle').value = savedVehicleType;
    }

    if (savedEmptySeats) {
        document.getElementById('EmptySeats').value = savedEmptySeats;
    }

    // Save values to local storage when they change
    document.getElementById('TypeOfVehicle').addEventListener('change', function() {
        localStorage.setItem('TypeOfVehicle', this.value);
    });

    document.getElementById('EmptySeats').addEventListener('change', function() {
        localStorage.setItem('EmptySeats', this.value);
    });
};
document.getElementById('btnGenerateCode').addEventListener('click', function() {
    // Generate a 6-digit OTP
    var otp = Math.floor(100000 + Math.random() * 900000);

    // Display the OTP to the user
    alert('Your OTP is: ' + otp);

    // TODO: Send the OTP to the user's phone number
    // This requires a backend server and an SMS gateway
});
function getDistance(pickup, dropoff) {
    // Create a new instance of the Google Maps Distance Matrix service
    var service = new google.maps.DistanceMatrixService();

    // Make a request for distance calculation
    service.getDistanceMatrix(
        {
            origins: [pickup],
            destinations: [dropoff],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
        }, callback);
}

function getDistance(pickup, dropoff) {
    // For testing purposes, return a fixed distance of 20km
    return 20000; // distance in meters
}

document.getElementById('fare-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var pickup = document.getElementById('pickup').value;
    var dropoff = document.getElementById('dropoff').value;

    var distance = getDistance(pickup, dropoff); // This will now return 20000
    var fare = distance / 300; // Calculate the fare

    // Display a popup message with the total fare
    alert('Total fare: ' + fare + ' rupees');
});
