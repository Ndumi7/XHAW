document.getElementById('calculateBtn').addEventListener('click', function() {
  // Get selected courses
  const selectedCourses = Array.from(document.querySelectorAll('input[name="course"]:checked'));
  if (selectedCourses.length === 0) {
    alert('Please select at least one course.');
    return;
  }

  // Calculate fees
  let total = 0;
  selectedCourses.forEach(course => {
    total += parseFloat(course.dataset.fee);
  });

  // Apply discount
  let discount = 0;
  if (selectedCourses.length === 2) discount = 0.05;
  else if (selectedCourses.length === 3) discount = 0.10;
  else if (selectedCourses.length > 3) discount = 0.15;

  total = total * (1 - discount);

  // Apply VAT 15%
  total = total * 1.15;

  // Display total
  document.getElementById('totalFee').textContent = `Total Fee (including discount & VAT): R${total.toFixed(2)}`;
});


const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  // Simple validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Show success message
  successMessage.style.display = 'block';

  // Clear the form fields
  contactForm.reset();

  // Optional: hide the message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
});

