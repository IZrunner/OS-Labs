//WScript.Echo("RIP AND TEAR!");

var fileSystemObject, argumentFolderName, filesCollection, newFolder, creationYear, creationMonth;
fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");

if(WScript.Arguments(0) != "" && fileSystemObject.FolderExists(WScript.Arguments(0)) == true)
{ // if the first argument is not an empty string and is a directory
    argumentFolderName = fileSystemObject.GetFolder(WScript.Arguments(0)); // set directory to a variable
    filesCollection = new Enumerator(argumentFolderName.Files); // set files collection
    
    for(; !filesCollection.atEnd(); filesCollection.moveNext())
    {
        var currentFile = filesCollection.item(); // get current file
        var fileDateCreated = new String(currentFile.DateCreated); // convert date to string
        creationYear = fileDateCreated.substring(29,33); // extract month from date
        creationMonth = fileDateCreated.substring(4,7); // extract year from date
        
        // currentFile.Move("D:\\folder\\");
        // WScript.Echo(fileDateCreated);
        // WScript.Echo(creationYear);
        // WScript.Echo(creationMonth);

        if(!fileSystemObject.FolderExists(creationYear)) 
        { // if a folder with the year doesn't exist
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear);
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Jan");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Feb");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Mar");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Apr");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\May");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Jun");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Jul");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Aug");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Sep");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Oct");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Nov");
            newFolder = fileSystemObject.CreateFolder(argumentFolderName + "\\" + creationYear + "\\Dec");

            currentFile.Move(argumentFolderName + "\\" + creationYear + "\\" + creationMonth + "\\");
        }
        else // if the folder already exists
        {
            currentFile.Move(argumentFolderName + "\\" + creationYear + "\\" + creationMonth + "\\"); 
        }
    }
}