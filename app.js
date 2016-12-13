//main process

const electron = require('electron')
const {app, BrowserWindow} = electron   //"pulls out" the app from the electron object

app.on('ready', ()=> {
  let win /*window*/ = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadURL(`file://${__dirname}/core/main.html`)
  win.webContents.openDevTools()
})
