import { Stomp, CompatClient } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let currentRoomName: string = '';
let webSocketEndPoint: string = 'http://localhost:8024/ws';
let stompClient!: CompatClient;
//Initialize SockJS
function initializeSockJs(): void {
    let ws = new SockJS(webSocketEndPoint);
    stompClient = Stomp.over(ws);
    stompClient.connect({}, () => {
        onConnected();
    });
}
// Subscribe to the topic.
function onConnected() {
    if (stompClient.connected) {
        // Subscribe to the specific topic            
        stompClient.subscribe('/topic/public/' + currentRoomName, onDataRecived);
        connectToRoom(currentRoomName);
    }
}
//Receive the remote action and apply to currenty document.
function onDataRecived(data: any) {
    if (collborativeEditingHandler) {
        var content = JSON.parse(data.body);
        if (content.payload.operations != null) {
            container.documentEditor.collaborativeEditingHandlerModule.applyRemoteAction("action", content.payload);
        }
    }
}