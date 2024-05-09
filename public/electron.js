const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '../public/index.html'),
        protocol: 'file:',
        slashes: true,
      })
  );
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('send-notification', (event, data) => {
  const { title, body } = data;

  const notification = new Notification({
    title,
    body,
  });

  notification.show();
});