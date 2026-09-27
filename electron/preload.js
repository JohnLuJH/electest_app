import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    sendMsg: (msg) => ipcRenderer.send('msg', msg),
    onMsg: (callback) => ipcRenderer.on('msg-reply', callback)
})