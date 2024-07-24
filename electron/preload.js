const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  closeWindow: () => ipcRenderer.send('close-window'),
  resizeWindow: (width, height) => ipcRenderer.send('resize-window', { width, height }),
});
