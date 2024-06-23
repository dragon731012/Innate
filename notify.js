async function run() {
  try {
    const registration = await navigator.serviceWorker.register("serviceworker.js", {
      scope: "./"
    });

    // Check if the Notification API is supported
    if (!('Notification' in window)) {
      console.error('Notifications are not supported on this browser');
      return;
    }

    // Check if permission to show notifications has been granted already
    let permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.error('Permission to show notifications denied');
      return;
    }

    // Schedule notifications at 1:00 PM daily
    const options = {
      body: "Check your messages!",
      icon: "/favicon.ico", // Replace with your icon path
    };

    // Function to schedule notification at 1:00 PM
    const scheduleNotification = () => {
      const now = new Date();
      let notificationTime = new Date();
      notificationTime.setHours(13, 0, 0, 0); // Set 1:00 PM

      if (notificationTime < now) {
        notificationTime.setDate(notificationTime.getDate() + 1); // Schedule for the next day if 1:00 PM already passed today
      }

      const delay = notificationTime.getTime() - now.getTime();
      setTimeout(() => {
        registration.showNotification("Daily Reminder", options);
        scheduleNotification(); // Schedule next notification for the next day
      }, delay);
    };

    // Start scheduling notifications
    scheduleNotification();

  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
}

run();
