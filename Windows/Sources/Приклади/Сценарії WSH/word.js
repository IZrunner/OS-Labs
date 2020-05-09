var strDoc="n:\\test.docx";
var d=new Date();  //отримуємо поточну дату
var strText;
strText+=d.getDate()+"/";  //витягуємо день
strText+=(d.getMonth()+1)+"/";  //місяць
strText+=d.getYear();	//рік
strText+="Row is added from WSH-script\n";
if (WScript.CreateObject("Scripting.FileSystemObject").FileExists(strDoc))
{
	var oWord=WScript.CreateObject("Word.Application");
	var oDoc=oWord.Documents.Open(strDoc);
	oDoc.Content.InsertAfter(strText);
	oDoc.Save();
	oDoc.Close();
	oWord.Quit();
}
else
{
	WScript.Echo("Document ["+strDoc+"] not found");
	WScript.Quit(1);
}
WScript.Quit(0);