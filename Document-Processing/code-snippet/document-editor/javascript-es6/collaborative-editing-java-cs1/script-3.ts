container.contentChange = function (args: ContainerContentChangeEventArgs) {
    if (collborativeEditingHandler) {
        //Send the editing action to server
        collborativeEditingHandler.sendActionToServer(args.operations as Operation[]);
    }
}