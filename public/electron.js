const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webSecurity: false,
      // preload: path.join(app.getAppPath(), '../src/preload.js'),
    },
    
});

mainWindow.loadURL('http://localhost:3000'); // Assuming your React app runs on localhost:3000 during development

mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notification", body: message }).show();
});

// receive notification from sendNotification app.js
ipcMain.on('send-notification', (event, data) => {
  console.log('teeest ipcMain', data)
  const { title, body } = data;

  const notification = new Notification({
    title,
    body,
  });

  notification.show();
});