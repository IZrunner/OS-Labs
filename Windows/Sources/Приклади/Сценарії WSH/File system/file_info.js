var FSO,f,s;
FSO = WScript.CreateObject("Scripting.FileSystemObject");
f = FSO.GetFile("N:\\CADSM2019paper91.pdf");
s = "File: " + f.Name + "\n";
s += "Creation date: " + f.DateCreated + "\n";
s += "Type: " + f.Type + "\n";
WScript.Echo(s);