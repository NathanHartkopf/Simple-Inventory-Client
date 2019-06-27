export class ServerConnect {
    websocket: WebSocket | undefined = undefined
    constructor () {
        this.connect()
    }
    connect () {
        return new Promise (res => {
            this.websocket = new WebSocket('ws://localhost:1337')
            let { websocket: s } = this
    
            s.onopen = () => console.log("Connected to Server")
            s.onerror = e => {throw(e)}
        })
    }
}