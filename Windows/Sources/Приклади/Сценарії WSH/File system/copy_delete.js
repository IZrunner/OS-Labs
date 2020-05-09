var FSO,f,WshShell,WshFldrs,PathCopy,FileName;
FSO = WScript.CreateObject("Scripting.FileSystemObject");
Shell = WScript.CreateObject("WScript.Shell");
SpecFolds = Shell.SpecialFolders;

//отримання посилання на спеціальний каталог робочого столу
PathCopy = SpecFolds.item("Desktop") + "\\";
f = FSO.GetFile("N:\\test.docx");

//копіювання файлу test.docx на робочий стіл
f.Copy(PathCopy);

WScript.StdOut.Write("Input name of file to delete: ");
FileName = WScript.StdIn.ReadLine();
if (FSO.FileExists(FileName))
{
	FSO.DeleteFile(FileName);
	WScript.Echo("File " + FileName + " is deleted");
}
else
	WScript.Echo("File " + FileName + " does not exist!");