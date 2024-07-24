const { app, BrowserWindow, ipcMain, screen } = require('electron')
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: false, // Używaj preload script
        contextIsolation: true,
    },
    
  /*   fullscreen: true */
  })

  win.loadURL("http://localhost:3000");
  ipcMain.on('close-window', () => {
    win.close();
  });
  ipcMain.on('resize-window', (event, { width, height }) => {
    if (win) {
      win.setSize(width, height);
    }
  });
}



app.on('ready', () => {
    createWindow();

})
    

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});