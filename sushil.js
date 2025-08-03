function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-buttons button');

  // Highlight active button
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === category.toLowerCase());
  });

  projects.forEach(project => {
    const isMatch = category === 'all' || project.dataset.category === category;

    // Optional fade effect
    project.style.opacity = 0;
    setTimeout(() => {
      project.style.display = isMatch ? 'block' : 'none';
      project.style.opacity = isMatch ? 1 : 0;
    }, 200);
  });
}
