var ws = require('ws');

var wss = new ws.Server({
    port: 5000
}, () => console.log(`Server started on 5000`));


wss.on('connection', function connection(ws) {
    ws.id = Date.now();
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadcastMessage(message, ws.id)
                break;
            case 'connection':
                broadcastMessage(message)
                break;
        }
    })
})

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        if(client.id === id) {
            client.send(JSON.stringify(message))
        }
    })
}
