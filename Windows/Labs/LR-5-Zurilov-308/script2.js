var resultString="";
var userInput=WScript.StdIn.ReadLine();

while(userInput!="Quit"){
	resultString+=userInput;
	userInput = WScript.StdIn.ReadLine();
}

var objExcel = WScript.CreateObject("Excel.Application");
var objBook = objExcel.WorkBooks.Add();

objExcel.Cells(1,1).Value = resultString;
objBook.SaveAs("D:\\userInputExcel.xlsx");
objBook.Close();
objExcel.Quit();

var objWord = WScript.CreateObject("Word.Application");
var objDoc = objWord.Documents.Add();
objDoc.Content.InsertAfter(resultString)
objDoc.SaveAs("D:\\userInputWord.docx");
objDoc.Close();
objWord.Quit();