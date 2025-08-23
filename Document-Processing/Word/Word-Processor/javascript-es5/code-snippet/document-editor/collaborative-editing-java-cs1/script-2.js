function openDocument(responseText, roomName) {
    let data = JSON.parse(responseText);
    //Update the room and version information to collaborative editing handler.
    connections.updateRoomInfo(roomName, data.version, serviceUrl + 'api/collaborativeediting/');
    //open the document
    container.documentEditor.open(data.sfdt);
    setTimeout(function () {
        // connect to server using ScketJS
        connectToRoom({ action: 'connect', roomName: roomName, currentUser: container.currentUser });
    });
}
//Send the user information to the other users that I have joined.
function connectToRoom(documentName) {
    var userInfo = {
        currentUser: username,
        clientVersion: 0,
        roomName: documentName,
        connectionId: "",
    };
    // Send the joinGroup message to the server
    stompClient.send("/app/join/" + documentName, {}, JSON.stringify(userInfo));
}