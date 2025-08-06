document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');

    // Toggle active class on buttons
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
      btn.classList.toggle('active', btn === button);
    });

    // Show/hide projects
    document.querySelectorAll('.project-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
