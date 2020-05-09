FSO = WScript.CreateObject("Scripting.FileSystemObject");
file1 = FSO.GetFile(WScript.ScriptFullName);
WScript.Echo("Size of script file " + file1.Name + " is " + file1.Size);
file1.Attributes = 1;
