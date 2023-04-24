const { app, BrowserWindow } = require('electron');
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    resizable: false,
    minimizable: false,
    maximizable: false,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'public/Home.html'));

  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

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