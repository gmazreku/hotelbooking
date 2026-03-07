// Index - sätt dagens datum
const dateInput = document.querySelector('.search-field input[type="date"]');
if (dateInput) {
  dateInput.valueAsDate = new Date();
}

// Booking - dölj rum och visa bekräftelse
document.querySelectorAll('.btn-book').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.rooms').style.display = 'none';
    document.getElementById('confirmation-box').style.display = 'block';
  });
});