import React, { useEffect } from 'react';
import './App.css';

// const { ipcRenderer } = window.require('electron');

function App() {
  useEffect(() => {
    const sendNotification = (title, body) => {
      if (!title || !body) {
        alert('Please enter notification title and body.');
        return;
      }

      // new Notification(title, { body });

      // ipcRenderer.send('send-notification', {
      //   title,
      //   body,
      // });
    };

    // Schedule notifications (adjust time as needed)
    const morningTime = new Date();
    morningTime.setHours(10, 0, 0); // 10:00 AM
    const afternoonTime = new Date();
    afternoonTime.setHours(13, 1, 0); // 3:00 PM

    setInterval(() => {
      const now = new Date();
      if (now.getHours() === morningTime.getHours() && now.getMinutes() === morningTime.getMinutes()) {
        sendNotification('Morning Exercise Reminder', 'Time to do your morning exercises!');
      } else if (now.getHours() === afternoonTime.getHours() && now.getMinutes() === afternoonTime.getMinutes()) {
        console.log(now.getHours(), afternoonTime.getHours() , now.getMinutes() , afternoonTime.getMinutes())
        sendNotification('Afternoon Exercise Reminder', 'Time to do your afternoon exercises!');
      }
    }, 6000); // Check every minute for the specified times
  }, []);

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* First Half */}
        <div className="col-md-6 " style={{ color:'#32395F',height: '100vh', backgroundImage: `url('https://img.freepik.com/free-photo/doctor-working-with-laptop_23-2147646059.jpg?t=st=1715265775~exp=1715269375~hmac=686c3046a58bd0d4792a22069548aadd88b612c72ec9840951f393b35411c26c&w=740')`, backgroundSize: 'cover' }}>
          <div className="d-flex justify-content-between mx-5">
            {/* Left Side Elements */}
            <div className="d-flex align-items-center justify-content-between fs-4">
              <p className="me-3">
                <svg id="Layer_1" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m20.859 15.331-3.772 6.155a5.235 5.235 0 0 1 -3.87 2.477 5.315 5.315 0 0 1 -.628.037 5.212 5.212 0 0 1 -3-.955 4.741 4.741 0 0 1 -6.689-6.566l-1.315-1.313a5.264 5.264 0 0 1 .955-8.2l5.767-3.566a8.859 8.859 0 0 1 10.327.551l1.659-1.659a1 1 0 1 1 1.414 1.414l-1.657 1.658a8.951 8.951 0 0 1 .809 9.967zm-12.794 6.316-3.719-3.72a2.721 2.721 0 0 0 .463 3.264 2.827 2.827 0 0 0 3.256.456zm9.921-15.6a6.887 6.887 0 0 0 -8.617-.947l-5.777 3.566a3.265 3.265 0 0 0 -.592 5.086l7.29 7.291a3.265 3.265 0 0 0 5.093-.6l3.755-6.125a6.937 6.937 0 0 0 -1.152-8.276zm1.279 17.953a1 1 0 0 1 -.591-1.808 8.633 8.633 0 0 0 3.315-5.407 1 1 0 1 1 1.953.43 10.7 10.7 0 0 1 -4.088 6.593 1 1 0 0 1 -.589.192zm-18.265-18.261a1 1 0 0 1 -.8-1.594 10.692 10.692 0 0 1 6.713-4.125 1 1 0 1 1 .4 1.96 8.636 8.636 0 0 0 -5.513 3.354 1 1 0 0 1 -.8.405z"/></svg>
              </p>
              <p>Configuration</p>
            </div>
            <div className="d-flex ">
              <div className="d-flex row me-4">
                <div className="d-flex justify-content-between fs-4 ">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="20" height="20" viewBox="0 0 24 24"><path d="M19.584,15.001c-.789-1.809-2.589-3.001-4.584-3.001-2.757,0-5,2.243-5,5v.036c-1.694,.243-3,1.704-3,3.464,0,1.93,1.57,3.5,3.5,3.5h9c2.481,0,4.5-2.019,4.5-4.5,0-2.453-1.973-4.454-4.416-4.499Zm-.084,7.999H10.5c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.527-2.5h.557l-.06-.553c-.016-.146-.024-.296-.024-.447,0-2.206,1.794-4,4-4,1.692,0,3.209,1.072,3.772,2.667l.118,.333h.609c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5Zm-12.445-6.765c-.331-.311-.634-.655-.899-1.036l-4.336,2.524-.504-.864,4.334-2.523c-.355-.73-.569-1.521-.631-2.336H0v-1H5.019c.064-.831,.284-1.62,.633-2.335L1.316,6.142l.504-.864,4.337,2.525c.451-.65,1.018-1.214,1.67-1.662L5.309,1.808l.865-.503,2.519,4.333c.708-.34,1.486-.556,2.307-.619V0h1V5.02c.808,.063,1.589,.277,2.305,.62l2.521-4.335,.865,.503-2.519,4.333c.647,.443,1.216,1.003,1.672,1.66l4.336-2.524,.504,.864-4.334,2.523c.305,.629,.505,1.305,.595,1.999-.353-.164-.717-.305-1.096-.409-.122-.526-.312-1.035-.584-1.504-.981-1.697-2.807-2.75-4.765-2.75-3.032,0-5.5,2.467-5.5,5.5,0,1.087,.316,2.139,.916,3.041,.283,.425,.622,.798,.999,1.122-.305,.165-.593,.355-.86,.572Z"/></svg>
                  </p>
                  <p>23°C</p>
                </div>
                <p>Partly Cloudy</p>
              </div>
              <span class="text-secondary">|</span>
              <div className="d-flex row justify-content-end">
                <p className="text-righ d-flex row justify-content-end fs-4 lh-0.5">12:00</p>
                <p className="text-right d-flex row justify-content-end lh-0.5">Today 21 Oct. 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Half */}
        <div className="col-md-6 h-100">
          <div className="mx-5 my-5">
            <div className="row">
              <div className="col">
                {/* Section 1 */}
                <div className="d-flex row align-items-center justify-content-center">
                  <div className="d-flex justify-content-between align-items-center fs-4">
                    <p>🕓 HEURE DE NOTIFICATION</p>
                    <p className='fs-1'>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 rounded" style={{ backgroundColor: '#E2F1F8' }}>
              <div className="col">
                {/* Section 2 */}
                <div className="d-flex justify-content-between align-items-center justify-content-center px-4 py-3">
                  <div className="d-flex row justify-content-between align-items-center fs-6">
                    <p className="mb-0 fs-3">09:00</p>
                    <p className="mb-0">une fois | alert dans 02h30min</p>
                  </div>
                  <p className='fs-1'>+</p>
                </div>
              </div>
            </div>
            <div className="row mt-5 rounded" style={{ backgroundColor: '#E2F1F8' }}>
              <div className="col">
                {/* Section 2 */}
                <div className="d-flex justify-content-between align-items-center justify-content-center px-4 py-3">
                  <div className="d-flex row justify-content-between align-items-center fs-6">
                    <p className="mb-0 fs-3">09:00</p>
                    <p className="mb-0">une fois | alert dans 02h30min</p>
                  </div>
                  <p className='fs-1'>+</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* Section 1 */}
                <div className="d-flex row align-items-center justify-content-center">
                  <div className="d-flex justify-content-between align-items-center fs-4">
                    <p>TYPE DE NOTIFICATION</p>
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center fs-4 rounded border border-primary col-md-6"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.target.querySelector('input[type="checkbox"]').click();
                      e.target.closest('.d-flex').classList.toggle('#E2F1F8');
                    }}
                  >
                    <div className="d-flex row justify-content-between align-items-center fs-4">
                      <div className="d-flex justify-content-between align-items-center fs-4">
                        <p>Petite notification</p>
                        <label>
                         <input type="checkbox" />
                        </label>
                      </div>
                      <div>
                        <img
                          src="https://via.placeholder.com/100x100"
                          alt="Image"
                          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center fs-4 rounded border border-primary col-md-6"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.target.querySelector('input[type="checkbox"]').click();
                      e.target.closest('.d-flex').classList.toggle('#E2F1F8');
                    }}
                  >
                    <div className="d-flex row justify-content-between align-items-center fs-4">
                      <div className="d-flex justify-content-between align-items-center fs-4">
                        <p>Petite notification</p>
                        <label>
                          <input type="checkbox" />
                        </label>
                      </div>
                      <div>
                        <img
                          src="https://via.placeholder.com/100x100"
                          alt="Image"
                          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
