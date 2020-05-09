var FSO,f,s,FolderName,SubFolders,FileName,FilePath;
FSO = WScript.CreateObject("Scripting.FileSystemObject");
FolderName = "N:\\New folder";

//створення нового каталогу
FSO.CreateFolder(FolderName);
f = FSO.GetFolder(FolderName);
SubFolders = f.SubFolders;
SubFolders.Add("Another folder");

//створення нового файлу
WScript.StdOut.Write("Input filename: ");
FileName = WScript.StdIn.ReadLine();
FilePath = FolderName + "\\" + FileName;
f = FSO.CreateTextFile(FilePath);

WScript.StdOut.WriteLine("Input strings to write to file ('QUIT' - finish");
str = ""
while (true)
{
	str = WScript.StdIn.ReadLine();
	if (str=="QUIT") break;
	f.WriteLine(str);
}

f.Close();
WScript.Echo("File " + FilePath + " is created");