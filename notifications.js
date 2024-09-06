if (Notification.permission !== "granted") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      createNotification();
    }
  });
} else {
  createNotification();  
}

function createNotification() {
  setTimeout(()=>{
  const notification = new Notification("Test notification", {
    body: "test notification"
  });

  notification.onclick = function (event) {
    event.preventDefault();
    window.open(window.location.href, '_blank'); 
  };

  setTimeout(notification.close.bind(notification), 5000);
  },5000);
}
