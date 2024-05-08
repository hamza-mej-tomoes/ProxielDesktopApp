import React, { useEffect } from 'react';
import './App.css';


function App() {
  useEffect(() => {
    
    const sendNotification = (title, body) => {
      new Notification({ title, body }).show();
    };

    // Schedule notifications (adjust time as needed)
    const morningTime = new Date();
    morningTime.setHours(10, 0, 0); // 10:00 AM
    const afternoonTime = new Date();
    afternoonTime.setHours(17, 6, 0); // 3:00 PM

    setInterval(() => {
      const now = new Date();
      if (now.getHours() === morningTime.getHours() && now.getMinutes() === morningTime.getMinutes()) {
        sendNotification('Morning Exercise Reminder', 'Time to do your morning exercises!');
      } else if (now.getHours() === afternoonTime.getHours() && now.getMinutes() === afternoonTime.getMinutes()) {
        console.log(now.getHours(),afternoonTime.getHours(), now.getMinutes(),afternoonTime.getMinutes())
        sendNotification('Afternoon Exercise Reminder', 'Time to do your afternoon exercises!');
      }
    }, 60000); // Check every minute for the specified times
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is your Electron React App for sending exercise reminders!
        </p>
      </header>
    </div>
  );
}

export default App;
