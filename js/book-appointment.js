document.getElementById('spaBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    new bootstrap.Modal(document.getElementById('bookingConfirmation')).show();
    this.reset();
});