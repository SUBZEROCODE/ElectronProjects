const electron = require('electron')
const {app,BrowserWindow} = electron

let mainWindow

app.on('ready', () => {

  mainWindow = new BrowserWindow({width:1200,height:1000})

  mainWindow.loadURL('file://' + __dirname + '/cryptoHacker.html');

  mainWindow.webContents.openDevTools()

})

//TODO: Some task
