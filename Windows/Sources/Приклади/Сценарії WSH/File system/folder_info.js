var FSO,WshShell,FoldSize,Folder,s;
FSO = WScript.CreateObject("Scripting.FileSystemObject");
//CurrentDirectory = FSO.GetAbsolutePathName(".");
Folder = FSO.GetFolder(FSO.GetAbsolutePathName("."));
s = "Current directory: " + Folder.Name + "\n";
s += "Creation date: " + Folder.DateCreated + "\n";
FoldSize = Folder.Size/1024;
s += "Folder size: " + FoldSize + "Kb\n";
WScript.Echo(s);