// Index - sätt dagens datum i kalenderfältet
const dateInput = document.querySelector('.search-field input[type="date"]');
if (dateInput) {
  dateInput.valueAsDate = new Date();
}

// Booking - filtrera rum baserat på URL-parameter
const params = new URLSearchParams(window.location.search);
const selectedRoom = params.get('room');
const guests = parseInt(params.get('guests')) || 1;

document.querySelectorAll('.room-card').forEach(card => {
  if (selectedRoom && card.dataset.room !== selectedRoom) {
    card.style.display = 'none';
  } else {
    const basePrice = parseInt(card.dataset.price);
    const totalPrice = basePrice * guests;
    const pricePerPerson = basePrice;
    card.querySelector('.room-price strong').textContent = totalPrice + ' SEK';
    card.querySelector('.per-person').textContent = pricePerPerson + ' SEK per person';
  }
});

// Booking - dölj rum och visa bekräftelse
document.querySelectorAll('.btn-book').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.rooms').style.display = 'none';
    document.getElementById('confirmation-box').style.display = 'block';
  });
});