// WScript.Echo("RIP AND TEAR!");

var fileSystemObject, WshShell, currentDirectoryObject, desktopDirectoryObject, directoryFilesCollection, 
    shortcutObject, currentDateObject;

fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
currentDateObject = new Date();
WshShell = WScript.CreateObject("WScript.Shell");
currentDirectoryObject = WshShell.SpecialFolders("Desktop"); // get Desktop directory 
desktopDirectoryObject = fileSystemObject.GetFolder(currentDirectoryObject); // assign it to object to work with
directoryFilesCollection = desktopDirectoryObject.Files; // collection of files on Desktop (not casting to Enumerator)

WScript.Echo("Number of files found: " + directoryFilesCollection.Count); // more than shortcuts themselves (counts files and folders as well)

for(var shortcutsEnum = new Enumerator(directoryFilesCollection); !shortcutsEnum.atEnd(); shortcutsEnum.moveNext()) 
{   // temporarily casting to Enumerator 
    if(fileSystemObject.GetExtensionName(shortcutsEnum.item()) == "lnk") 
    {   // working only with shortcuts 
        shortcutObject = shortcutsEnum.item(); // assigning item to variable (it's a File object, not a Shortcut object)
        shortcutObject = WshShell.CreateShortcut(shortcutsEnum.item()); // casting item to Shortcut type by setting file itself as an argument, because we can
        //WScript.Echo(shortcutObject.TargetPath); // path to executable file of a shortcut object
        if(fileSystemObject.FileExists(shortcutObject.TargetPath))
        {
            WScript.Echo("Shortcut is legit. Executable exists");
        }
        else
        {
           if(fileSystemObject.FileExists("log.txt")) // if log file already exists - append log data
           {
                var logFileObject = fileSystemObject.OpenTextFile("log.txt", 8, true); // open file to write data from new line
                logFileObject.WriteLine("\nDeletion date : " + currentDateObject.getDate() + "." + (currentDateObject.getMonth() + 1) + "." + currentDateObject.getFullYear());
                logFileObject.WriteLine("Shortcut name : " + shortcutsEnum.item());
                logFileObject.WriteLine("Shortcut target path : " + shortcutObject.TargetPath);
                logFileObject.Close();
                fileSystemObject.DeleteFile(shortcutObject);
           }
           else // if log file doesn't exist - create file and write log data
           {
                var logFileObject = fileSystemObject.CreateTextFile("log.txt");
                logFileObject.WriteLine("\nDeletion date : " + currentDateObject.getDate() + "." + (currentDateObject.getMonth() + 1) + "." + currentDateObject.getFullYear());
                logFileObject.WriteLine("Shortcut name : " + shortcutsEnum.item());
                logFileObject.WriteLine("Shortcut target path : " + shortcutObject.TargetPath);
                logFileObject.Close();
                fileSystemObject.DeleteFile(shortcutObject);
           }
        }
    }    
}






