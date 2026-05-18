import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
function App() {
const [notifications, setNotifications] = useState([]);

  useEffect(() => {
  fetch('http://4.224.186.213/evaluation-service/notifications')
    .then(response => response.json())
    .then(data => setNotifications(data))
    .catch(error => console.error('Error fetching notifications:', error));
}, []);


  return (
    <div className="App">
      <header className="App-header">
        
        <p><code></code> 
        Top 10 Notifications System </p>
      </header>
      <div className="notifications-container">
        {notifications.map(notification => (
          <div key={notification.id} className="notification">
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
          </div>
        ))}
        
      </div>

      

    </div>
  );

};



export default App;
