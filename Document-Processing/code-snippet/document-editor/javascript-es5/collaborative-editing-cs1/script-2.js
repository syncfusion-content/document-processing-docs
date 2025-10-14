function openDocument(responseText, roomName) {
    let data = JSON.parse(responseText);
    // Get collaborative editing module.
    connections = container.documentEditor.collaborativeEditingHandlerModule;
    // Configure collaborative editing room name in collaborative editing module
    connections.updateRoomInfo(roomName, data.version, serviceUrl);
    container.documentEditor.open(data.sfdt);
    setTimeout(function () {
        // connect to signalR room with specified name.
        start({ action: 'connect', roomName: roomName, currentUser: container.currentUser }, null);
    });
}