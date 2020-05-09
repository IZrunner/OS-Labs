//WScript.Echo("RIP AND TEAR!");

var WshShell, fileSystemObject, currentDateObject, currentDirectoryObject, directoryFilesCollection;
var filesCounter = 0;

fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
currentDateObject = new Date();
WshShell = WScript.CreateObject("WScript.Shell");
currentDirectoryObject = fileSystemObject.GetFolder(WshShell.CurrentDirectory); // get current directory
directoryFilesCollection = new Enumerator(currentDirectoryObject.Files);


if(fileSystemObject.FileExists("log.txt")) // if file already exists
{
    var logFileObject = fileSystemObject.OpenTextFile("log.txt", 8, true); // open file to write data from new line
    logFileObject.WriteLine("\nToday is : " + currentDateObject.getDate() + "." + (currentDateObject.getMonth() + 1) + "." + currentDateObject.getFullYear() 
        + "\nIt's " 
        + currentDateObject.getHours() + ":" + currentDateObject.getMinutes() + ":" + currentDateObject.getSeconds() + " o'clock"); // writ date and time
    logFileObject.WriteLine("Current folder's size : " + (currentDirectoryObject.Size / 1048576) + " MB"); // write directory size (originally - in bytes)
    for(; !directoryFilesCollection.atEnd(); directoryFilesCollection.moveNext()) // count amount of files in current directory
    {
        filesCounter++;
    }
    logFileObject.WriteLine("There are : " + filesCounter + " files in this directory"); // write the amount of files
    logFileObject.Close();
}
else // if file doesn't exist
{
    var logFileObject = fileSystemObject.CreateTextFile("log.txt"); 
    logFileObject.WriteLine("\nToday is : " + currentDateObject.getDate() + "." + (currentDateObject.getMonth() + 1) + "." + currentDateObject.getFullYear() 
        + "\nIt's " 
        + currentDateObject.getHours() + ":" + currentDateObject.getMinutes() + ":" + currentDateObject.getSeconds() + " o'clock"); // writ date and time
    logFileObject.WriteLine("Current folder's size : " + (currentDirectoryObject.Size / 1048576) + " MB"); // write directory size (originally - in bytes)
    for(; !directoryFilesCollection.atEnd(); directoryFilesCollection.moveNext()) // count amount of files in current directory
    {
        filesCounter++;
    }
    logFileObject.WriteLine("There are : " + filesCounter + " files in this directory"); // write the amount of files
    logFileObject.Close();
}