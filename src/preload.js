const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendNotification: (message) => ipcRenderer.send('notify', message)
});