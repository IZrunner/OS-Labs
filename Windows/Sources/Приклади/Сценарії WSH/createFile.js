var FSO=WScript.CreateObject("Scripting.FileSystemObject");
var fname="n:\\test.txt";
if (!FSO.FileExists(fname))
{
	WScript.Echo("Creating file "+fname);
	file=FSO.CreateTextFile("n:\\test.txt");
	file.WriteLine("New file");
	file.Close();
}
file=FSO.GetFile(fname);
file.Copy(fname+".copy");
file.Delete();