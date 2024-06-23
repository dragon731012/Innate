// Interval for checking data updates (every 10 seconds)
const INTERVAL = 10 * 1000; // 10 seconds in milliseconds

// Function to fetch data from the server
async function fetchData() {
  try {
    const response = await fetch('/api/data'); // Replace with your server API endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Function to handle data updates
async function handleDataUpdate() {
  const currentData = await fetchData();
  if (!currentData) return;

  // Compare currentData with previously stored data or perform desired actions
  // Example: Notify user if there's a change in data
  if (hasDataChanged(currentData)) {
    self.registration.showNotification('Data Update', {
      body: 'You have recieved a DM!',
      icon: '/favicon.ico' // Replace with your icon path
    });
    // Optionally, update stored data or perform additional actions
  }

  // Schedule the next data check
  setTimeout(handleDataUpdate, INTERVAL);
}

// Function to check if data has changed (example implementation)
function hasDataChanged(newData) {
  // Compare newData with previously stored data or perform specific checks
  // Example: Compare timestamps, content, etc.
  // For simplicity, always return true to simulate a change
  return true;
}

// Listen for the 'install' event
self.addEventListener('install', function(event) {
  console.log('Service worker installed');
  // Immediately activate the service worker
  self.skipWaiting();
});

// Listen for the 'activate' event
self.addEventListener('activate', function(event) {
  console.log('Service worker activated');
});

// Listen for 'fetch' events
self.addEventListener('fetch', function(event) {
  // Optional: Respond with custom responses or cache data
  // Example: Cache API responses or serve custom offline content
  event.respondWith(fetch(event.request));
});

// Start monitoring data updates when the service worker is installed
self.addEventListener('install', function(event) {
  console.log('Service worker installed');
  handleDataUpdate(); // Start checking for data updates
});
