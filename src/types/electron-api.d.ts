export {}

declare global {
    interface Window {
        electronAPI: {
            sendMsg: (msg:string)=>void
            onMsg: (callback:(event:any, msg:string)=>void)=>void
        }
    }
}
