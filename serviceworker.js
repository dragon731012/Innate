self.addEventListener('notificationclick', function(event) {
  // Handle notification click event here (e.g., open a specific page or perform an action)
  console.log('Notification clicked');
});

self.addEventListener('notificationclose', function(event) {
  // Handle notification close event here
  console.log('Notification closed');
});

