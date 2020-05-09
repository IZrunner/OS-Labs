//WScript.Echo("RIP AND TEAR!");

var fileSystemObject, filesCollection, argumentFolderName;

fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");

if(WScript.Arguments(0) != "" && fileSystemObject.FolderExists(WScript.Arguments(0)) == true)  
{   // if the first argument is not an empty string and is a directory
    argumentFolderName = fileSystemObject.GetFolder(WScript.Arguments(0)); // set directory to a variable  
    filesCollection = new Enumerator(argumentFolderName.Files); // set files collection
    WScript.Echo(argumentFolderName); // print directory to ensure
    
    for(; !filesCollection.atEnd(); filesCollection.moveNext()) // loop the collection to ensure
    {
        //WScript.Echo(filesCollection.item());
        var currentFile = filesCollection.item(); // get current file
        if(fileSystemObject.GetExtensionName(currentFile) == "txt") 
        {   // if file extension is .txt and it's not readonly
            currentFile.Attributes = 1; // set the file "readonly" attribute
            currentFile.Attributes = currentFile.Attributes + 2; // set the file "hidden" attribute
        } 
    }        
}
else
{
    WScript.Echo("please, enter an existing directory");
}