var stompClient = null;
//Initialize SockJS
function onCreated(data) {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, function (error) {
        console.error('Error during WebSocket connection', error);
    });
}
// Subscribe to the topic.
function onConnected() {
    if (stompClient.connected) {
        stompClient.subscribe('/topic/public/' + documentName, onMessageReceived);
        joinGroup(documentName);
    }
}
//Receive the remote action and apply to currenty document.
function onMessageReceived(data) {
    var content = JSON.parse(data.body);
    if (content.payload.operations != null) {
        container.documentEditor.collaborativeEditingHandlerModule.applyRemoteAction("action", content.payload);
    }
}