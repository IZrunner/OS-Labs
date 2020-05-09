var WshShell, WshFldrs, SpecFldr, s; //Оголошуємо змінні
//Створюємо об'єкт WshShell
WshShell = WScript.CreateObject("Wscript.Shell");
//Створюємо об'єкт WshSpecialFolders
WshFldrs = WshShell.SpecialFolders;
s = "List of all special folders: " + "\n\n";
//Перебираємо всі елементи колекції WshFldrs

for (var i=0; i<WshFldrs.length; i++) {
	 s+=WshFldrs(i)+"\n"; //Формуємо рядок зі значеннями аргументів 
}

WScript.Echo(s);