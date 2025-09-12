function openDocument(responseText: string, roomName: string): void {
    let data = JSON.parse(responseText);
    //Update the room and version information to collaborative editing handler.
    collborativeEditingHandler.updateRoomInfo(roomName, data.version, serviceUrl + 'api/collaborativeediting/');
    //Open the document
    container.documentEditor.open(data.sfdt);
    setTimeout(function () {
        // connect to server using ScketJS
        connectToRoom({ action: 'connect', roomName: roomName, currentUser: container.currentUser });
    });
}
//Send the user information to the other users that I have joined.
function connectToRoom(data: any) {
    var userInfo = {
        currentUser: container.currentUser,
        clientVersion: 0,
        roomName: currentRoomName,
        connectionId: "",
    };
    //Send the user information to server
    stompClient.send("/app/join/" + currentRoomName, {}, JSON.stringify(userInfo));
};