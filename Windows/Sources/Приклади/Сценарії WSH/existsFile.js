var FileName, fso;
WScript.StdOut.WriteLine("Input full filename");
FileName=WScript.StdIn.ReadLine();
fso=WScript.CreateObject("Scripting.FileSystemObject");
if (fso.FileExists(FileName))
	WScript.StdOut.WriteLine("This file has already existed");
else
	WScript.StdOut.WriteLine("This file doesn't exist");
