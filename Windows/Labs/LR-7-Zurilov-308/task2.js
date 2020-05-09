// WScript.Echo("RIP AND TEAR!");

var fileSystemObject, driveObject;

fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
if(WScript.Arguments(0) != "" && WScript.Arguments(0).length == 1)
{ // if argument is non-empty string and a drive 
    driveObject = fileSystemObject.GetDrive(WScript.Arguments(0)); // assign drive variable
    WScript.Echo("Total drive size : " + (driveObject.TotalSize / 1073741824) + " GB");
    WScript.Echo("Free space : " + (driveObject.FreeSpace / 1073741824) + " GB");
}
    