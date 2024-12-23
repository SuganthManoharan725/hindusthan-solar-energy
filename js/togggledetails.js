  // Handle main service section (Solar Power Plant, etc.)
  document.querySelectorAll('.service-toggle').forEach(function(button) {
    const target = document.querySelector(button.getAttribute('data-bs-target'));

    // Toggle icon when main service is expanded/collapsed
    target.addEventListener('show.bs.collapse', function() {
        button.querySelector('.service-toggle-icon').textContent = '−'; // Change icon to '−'
    });

    target.addEventListener('hide.bs.collapse', function() {
        button.querySelector('.service-toggle-icon').textContent = '+'; // Change icon to '+'
    });
});

// Handle nested types (On-Grid, Off-Grid, etc.)
document.querySelectorAll('.type-toggle').forEach(function(button) {
    const target = document.querySelector(button.getAttribute('data-bs-target'));

    // Toggle icon when type section is expanded/collapsed
    target.addEventListener('show.bs.collapse', function() {
        button.querySelector('.type-toggle-icon').textContent = '−'; // Change icon to '−'
    });

    target.addEventListener('hide.bs.collapse', function() {
        button.querySelector('.type-toggle-icon').textContent = '+'; // Change icon to '+'
    });
});
