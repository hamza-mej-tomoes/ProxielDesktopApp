import React, { useEffect, useState  } from 'react';
import './App.css';

// const { ipcRenderer } = window.require('electron');
// const { ipcRenderer } = window

function App() {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);

  const handleSwitchToggle1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleSwitchToggle2 = () => {
    setIsChecked2(!isChecked2);
  };

  useEffect(() => {
    const sendNotification = (title, body) => {
      console.log('body',body)
      console.log('title',title)

      if (!title || !body) {
        alert('Please enter notification title and body.');
        return;
      }

      // new Notification(title, { body });
      // const notification = new Notification({
      //   title,
      //   body,
      // });
      // notification.show();

      // console.log(ipcRenderer);

      // ipcRenderer.send('send-notification', {
      //   title,
      //   body,
      // });
    };

    // Schedule notifications (adjust time as needed)
    const morningTime = new Date();
    morningTime.setHours(12, 10, 0); // 10:00 AM
    const afternoonTime = new Date();
    afternoonTime.setHours(14, 5, 0); // 3:00 PM

    setInterval(() => {
      const now = new Date();
      if (now.getHours() === morningTime.getHours() && now.getMinutes() === morningTime.getMinutes()) {
        console.log(now.getHours(), morningTime.getHours() , now.getMinutes() , morningTime.getMinutes()) //console log
        sendNotification('Morning Exercise Reminder', 'Time to do your morning exercises!');
      } else if (now.getHours() === afternoonTime.getHours() && now.getMinutes() === afternoonTime.getMinutes()) {
        console.log(now.getHours(), afternoonTime.getHours() , now.getMinutes() , afternoonTime.getMinutes()) //console log
        sendNotification('Afternoon Exercise Reminder', 'Time to do your afternoon exercises!');
      }
    }, 6000); // Check every minute for the specified times
  }, []);
  
  const scale = 1.5;

  // 783 535
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* First Half */}
        <div className="" style={{width: '57%', color:'#32395F',height: '100vh', backgroundImage: `url('https://img.freepik.com/free-photo/doctor-working-with-laptop_23-2147646059.jpg?t=st=1715265775~exp=1715269375~hmac=686c3046a58bd0d4792a22069548aadd88b612c72ec9840951f393b35411c26c&w=740')`, backgroundSize: 'cover' }}>
          <div className="d-flex justify-content-between mx-sm-2 mt-sm-1 mx-5 mt-4 nav-app">
            {/* Left Side Elements */}
            <div className="d-flex align-items-center justify-content-between">
              <p className="me-3 me-sm-2 logo" style={{ backgroundColor: '#007dbf', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="me-2 ps-2" height="27" width="27" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" style={{ fill: '#FFF' }}/></svg>
              </p>
              <p className="fs-2 title" style={{ fontWeight: 600}}>Configuration</p>
            </div>
            <div className="d-flex align-items-center right-nav">
              <div className="d-flex flex-column me-4 mt-3 meteo" style={{ fontWeight: 600}}>
                <div className="d-flex justify-content-between" >
                  <p className="m-0 p-0">
                    <svg className="mt-2 mt-sm-0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="20" height="20" viewBox="0 0 24 24"><path d="M19.584,15.001c-.789-1.809-2.589-3.001-4.584-3.001-2.757,0-5,2.243-5,5v.036c-1.694,.243-3,1.704-3,3.464,0,1.93,1.57,3.5,3.5,3.5h9c2.481,0,4.5-2.019,4.5-4.5,0-2.453-1.973-4.454-4.416-4.499Zm-.084,7.999H10.5c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.527-2.5h.557l-.06-.553c-.016-.146-.024-.296-.024-.447,0-2.206,1.794-4,4-4,1.692,0,3.209,1.072,3.772,2.667l.118,.333h.609c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5Zm-12.445-6.765c-.331-.311-.634-.655-.899-1.036l-4.336,2.524-.504-.864,4.334-2.523c-.355-.73-.569-1.521-.631-2.336H0v-1H5.019c.064-.831,.284-1.62,.633-2.335L1.316,6.142l.504-.864,4.337,2.525c.451-.65,1.018-1.214,1.67-1.662L5.309,1.808l.865-.503,2.519,4.333c.708-.34,1.486-.556,2.307-.619V0h1V5.02c.808,.063,1.589,.277,2.305,.62l2.521-4.335,.865,.503-2.519,4.333c.647,.443,1.216,1.003,1.672,1.66l4.336-2.524,.504,.864-4.334,2.523c.305,.629,.505,1.305,.595,1.999-.353-.164-.717-.305-1.096-.409-.122-.526-.312-1.035-.584-1.504-.981-1.697-2.807-2.75-4.765-2.75-3.032,0-5.5,2.467-5.5,5.5,0,1.087,.316,2.139,.916,3.041,.283,.425,.622,.798,.999,1.122-.305,.165-.593,.355-.86,.572Z"/></svg>
                  </p>
                  <p className="m-0 p-0 fs-4 meteo-number">23°C</p>
                </div>
                <p>Partly Cloudy</p>
              </div>

              <div className='nav-separator'  style={{ borderLeft: '2px solid silver', margin: '0 20px 0 10px', height: '50px' }}></div>
              
              <div className="d-flex flex-column time" style={{ fontWeight: 600}}>
                <p className="d-flex  justify-content-end text-righ fs-4 m-0 p-0 time-number">12:00</p>
                <p className="d-flex  justify-content-end text-right m-0 p-0 time-title" >Today 21 Oct. 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Half */}
        <div className="h-100" style={{width: '43%'}}>
          <div className="mt-lg-4 mt-sm-3 second-section" style={{ margin: '0 90px'}}>
            {/* Section 1 */}
            <div className="">
              <div className="header-section-two d-flex justify-content-between align-items-center fs-5">
                <p className='time-notification mt-sm-2' style={{ fontWeight: 600, color:'#32395F' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" viewBox="0 0 512 512" height="16" width="16"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" style={{ fill: '#007dbf' }}/></svg>
                  HEURE DE NOTIFICATION</p>
                <p className='fs-1' style={{ color:'#007dbf' }}>+</p>
              </div>
            </div>
            {/* Section 2 */}
            <div className="alert d-flex justify-content-between align-items-center justify-content-center px-lg-4 px-sm-3 py-lg-3 py-sm-2 mb-lg-4 rounded" style={{ backgroundColor: '#E2F1F8' }}>
              <div className="d-flex row justify-content-between align-items-center">
                <p className="mb-0 fs-2 time" style={{ fontWeight: 600, color:'#32395F' }}>09:00</p>
                <p className="mb-0 description" style={{ fontWeight: 600, color:'#32395F', fontSize:'14px' }}>Une fois | <span className="" style={{ fontWeight: 600, color:'#708090', fontSize:'14px' }}>Alert dans 02h30min</span></p>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch1" checked={isChecked1} onChange={handleSwitchToggle1} style={{ display: 'none' }} />
                <label className="form-check-label" htmlFor="switch1" style={{ cursor: 'pointer' }}>
                  <div className="switch" style={{ width: '50px', height: '30px', borderRadius: '15px', position: 'relative' }}>
                    <div className="switch-inner" style={{ width: '100%', height: '100%', borderRadius: '15px', backgroundColor: isChecked1 ? '#007dbf' : '#ccc', position: 'absolute', transition: 'transform 0.2s' }}></div>
                    <div className="switch-switch" style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', position: 'absolute', top: '2px', left: isChecked1 ? '22px' : '2px', transition: 'left 0.2s' }}></div>
                  </div>
                </label>
              </div>
            </div>
            {/* Section 2 */}
            <div className="alert d-flex justify-content-between align-items-center justify-content-center px-lg-4 px-sm-3 py-lg-3 py-sm-2 mt-lg-4 rounded" style={{ backgroundColor: '#E2F1F8' }}>
              <div className="d-flex row justify-content-between align-items-center fs-6">
                <p className="mb-0 fs-2 time" style={{ fontWeight: 600, color:'#32395F' }}>09:00</p>
                <p className="mb-0 description" style={{ fontWeight: 600, color:'#32395F', fontSize:'14px' }}>Une fois | <span className="" style={{ fontWeight: 600, color:'#708090', fontSize:'14px' }}>Alert dans 02h30min</span></p>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch2" checked={isChecked2} onChange={handleSwitchToggle2} style={{ display: 'none' }} />
                <label className="form-check-label" htmlFor="switch2" style={{ cursor: 'pointer' }}>
                  <div className="switch" style={{ width: '50px', height: '30px', borderRadius: '15px', position: 'relative' }}>
                    <div className="switch-inner" style={{ width: '100%', height: '100%', borderRadius: '15px', backgroundColor: isChecked2 ? '#007dbf' : '#ccc', position: 'absolute', transition: 'transform 0.2s' }}></div>
                    <div className="switch-switch" style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', position: 'absolute', top: '2px', left: isChecked2 ? '22px' : '2px', transition: 'left 0.2s' }}></div>
                  </div>
                </label>
              </div>
            </div>
            <span class="d-block border-bottom border-muted border-1 mt-lg-5 mb-lg-4 mt-sm-2 mb-sm-2"></span>
            <div className="type-notification">
              {/* <div className="d-flex row align-items-center justify-content-center"> */}
                <div className="title d-flex justify-content-between align-items-center fs-5">
                  <p style={{ fontWeight: 600, color:'#32395F' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" viewBox="0 0 512 512" height="15" width="15"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" style={{ fill: '#007dbf' }}/></svg>
                    TYPE DE NOTIFICATION
                  </p>
                </div>
                <div className="row">
                  <div className="petite-notification col-md-6 col-sm-6">
                    <div
                      className="elements elements1 d-flex justify-content-between fs-4 rounded py-lg-3"
                      style={{
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, border-color 0.3s',
                        border: '2px solid #EFEFEF',
                        backgroundColor: '#transparent',
                        padding: '10px', // Adjust padding as needed
                      }}
                      onClick={(e) => {
                        const checkbox = e.currentTarget.querySelector('input[type="checkbox"]');
                        checkbox.click();
                        const parent = e.currentTarget.closest('.d-flex');

                        if (checkbox.checked) {
                          e.currentTarget.style.borderColor = '#007dbf';
                          parent.style.backgroundColor = '#e2f1f8';
                        } else {
                          e.currentTarget.style.borderColor = '#EFEFEF';
                          parent.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div className="window-element d-flex row justify-content-between fs-4 p-lg-2">
                        <div className="d-flex justify-content-between align-items-center pb-lg-3 pb-sm-2">
                          <p className="title m-0 text-nowrap" style={{ fontSize: '13px', color:'#32395F', fontWeight: 600}}>Petite notification</p>
                          <input type="checkbox" style={{ transform: `scale(${scale})` }} />
                        </div>
                        <div className="pe-lg-5 pe-sm-4 window-notification" style={{ height: '160px' }}>
                          <div class="window-petite-notification card rounded h-100">
                            <div class="card-header bg-transparent d-flex justify-content-start align-items-center py-0" style={{ height: '20px' }}>
                              <span class="mb-3" style={{ color: '#00000090', fontSize: '30px' }}>...</span>
                            </div>
                            <div class="d-flex justify-content-end align-items-end ps-5 ps-sm-4 pe-3 pe-sm-1 mb-3 mb-sm-1 h-100" style={{ height: '5px' }}>
                              <div class="card-body bg-warning rounded" >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="petite-notification col-md-6 col-sm-6">
                    <div
                      className="elements elements2 d-flex justify-content-between fs-4 rounded py-lg-3"
                      style={{
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, border-color 0.3s',
                        border: '2px solid #EFEFEF',
                        backgroundColor: '#transparent',
                        padding: '10px', // Adjust padding as needed
                      }}
                      onClick={(e) => {
                        const checkbox = e.currentTarget.querySelector('input[type="checkbox"]');
                        checkbox.click();
                        const parent = e.currentTarget.closest('.d-flex');

                        if (checkbox.checked) {
                          e.currentTarget.style.borderColor = '#007dbf';
                          parent.style.backgroundColor = '#e2f1f8';
                        } else {
                          e.currentTarget.style.borderColor = '#EFEFEF';
                          parent.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div className="window-element d-flex row justify-content-between fs-4 p-lg-2">
                        <div className="d-flex justify-content-between align-items-center pb-lg-3 pb-sm-2">
                          <p className="title m-0 text-nowrap" style={{ fontSize: '13px', color:'#32395F', fontWeight: 600}}>Grande notification</p>
                          <input type="checkbox" style={{ transform: `scale(${scale})` }} />
                        </div>
                        <div className="pe-lg-5 pe-sm-4 window-notification" style={{ height: '160px' }}>
                          <div class="window-grande-notification card rounded h-100">
                            <div class="card-header bg-transparent d-flex justify-content-start align-items-center py-0" style={{ height: '20px' }}>
                              <span class="mb-3" style={{ color: '#00000090', fontSize: '30px' }}>...</span>
                            </div>
                            <div class="px-lg-5 px-sm-3 h-100 d-flex align-items-center">
                              <div class="card-body bg-warning rounded" style={{ height: '80px' }}>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <span class="d-block border-bottom border-muted border-1 my-lg-5 my-sm-3"></span>
            <div class="row px-2 "> 
              <button class="btn btn-lg rounded text-white py-lg-4 py-sm-2" style={{ backgroundColor: '#007dbf' }}>ENREGISTER LA NOTIFICATION</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
