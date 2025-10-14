container.contentChange = function (args: ContainerContentChangeEventArgs) {
    if (connections) {
        //Send current changes to server to broadcast it to other users.
        connections.sendActionToServer(args.operations)
    }
}