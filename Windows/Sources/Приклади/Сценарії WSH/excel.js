//створюмо об'єкт - excel-додаток
var objXL=WScript.CreateObject("Excel.Application");

//робимо вікно видимим і створюємо робочу книгу
objXL.Visible=true;
objXL.WorkBooks.Add();

//встановлюємо ширину першого стовпця
objXL.Columns(1).ColumnWidth=20;

//записуємо рядок у комірку (1,1)
objXL.Cells(1,1).Value="Created from WSH";

objXL.ActiveWorkbook.SaveAs("N:\\test.xlsx");
objXL.ActiveWorkbook.Close();
objXL.Application.Quit();
WScript.Echo("Finished");
WScript.Quit();

