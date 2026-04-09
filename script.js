const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('active');

    faqButtons.forEach((otherButton) => {
      otherButton.closest('.faq-item').classList.remove('active');
      otherButton.setAttribute('aria-expanded', 'false');
    });

    if (isOpen === false) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

const updatedDate = document.getElementById('updated-date');
if (updatedDate) {
  const today = new Date();
  updatedDate.textContent = today.toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
