async function run() {
  try {
    // Check if the Notification API is supported
    if (!('Notification' in window)) {
      console.error('Notifications are not supported on this browser');
      return;
    }

    const registration = await navigator.serviceWorker.register("serviceworker.js", {
      scope: "./"
    });

    // Get the button element
    const button = document.getElementById("subscribe");

    // Function to handle button click
    async function subscribeButtonClicked() {
      try {
        // Request permission to show notifications
        let permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          console.error('Permission to show notifications denied');
          return;
        }

        // Notify immediately upon successful registration
        registration.showNotification("Subscription Successful", {
          body: "You are now subscribed to notifications!",
          icon: "/favicon.ico", // Use favicon.ico as the notification icon
        });

        // Schedule notifications at 1:00 PM daily
        const options = {
          body: "Check your messages!",
          icon: "/favicon.ico", // Use favicon.ico as the notification icon
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
        console.error('Error requesting notification permission:', error);
      }
    }

    // Add event listener to the button
    button.addEventListener("click", subscribeButtonClicked);

  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
}

run();
