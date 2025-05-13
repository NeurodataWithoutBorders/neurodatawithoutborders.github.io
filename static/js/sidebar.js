document.addEventListener('DOMContentLoaded', function() {
  // Get the toggle button and sidebar
  const toggleButton = document.querySelector('.sidebar-toggle');
  const sidebar = document.getElementById('eventResourcesSidebar');
  
  // Function to toggle the sidebar
  function toggleSidebar() {
    if (sidebar) {
      sidebar.classList.toggle('show-sidebar');
    }
  }
  
  // Add click event to toggle button
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleSidebar);
  }
  
  // Close sidebar when clicking outside of it
  document.addEventListener('click', function(event) {
    // Check if sidebar is open and click is outside sidebar and not on toggle button
    if (
      sidebar && 
      sidebar.classList.contains('show-sidebar') && 
      !sidebar.contains(event.target) && 
      event.target !== toggleButton
    ) {
      sidebar.classList.remove('show-sidebar');
    }
  });
});
