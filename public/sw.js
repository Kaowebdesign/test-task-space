/* eslint-disable no-restricted-globals */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

/**
 * Token info
 * @type {string[]}
 */
let token = null
let user = null

/**
 * Ports for refresh
 * @type {*[]}
 */
let arrPortsForRefresh = []

const arrRootConnects = []

let peers = []

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

const sendData = (data, port, isRefresh) => {
    if (isRefresh) {
        const jsonData = JSON.stringify(data)
        arrPortsForRefresh.forEach(function (peersPort) {
            peersPort.postMessage(jsonData)
        })
        arrPortsForRefresh = []
    } else if (port) {
        port.postMessage(JSON.stringify(data))
    } else {
        peers.forEach(function (peersPort) {
            peersPort.postMessage(JSON.stringify(data))
        })
        peers = []
    }
}

/**
 * Exposed "method" for saving the token
 */

self.addEventListener('message', function(event) {
    console.log('[sw] message event')
    switch (event.data?.type) {
        case 'SET_TOKEN': {
            token = event.data.token;
            break;
        }
        case 'SET_USER_DATA': {
            user = event.data.user;
            break;
        }
        case 'CONNECT': {
            arrRootConnects.push(event.ports[0]);

            sendData({ type: 'CONNECT',  data: { token, user } }, event.ports[0]);
            break;
        }
        case 'LOGOUT': {
            console.log('[sw] logout')
            token = null
            user = null
            sendData({ type: 'LOGOUT', data: { token, user } }, event.ports[0])
        }
        default: break;
    }
})

