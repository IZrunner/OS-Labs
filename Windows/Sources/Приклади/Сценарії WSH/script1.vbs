Option Explicit

Dim WshShell, WshFldrs, SpecFldr, s 'Оголошуємо змінні
'Створюємо об'єкт WshShell
Set WshShell = WScript.CreateObject("Wscript.Shell")
'Створюємо об'єкт WshSpecialFolders
Set WshFldrs = WshShell.SpecialFolders
s = "List of all special folders: " & vbCrLf & vbCrLf
'Перебираємо всі елементи колекції WshFldrs
For Each SpecFldr In WshFldrs
  'Формуємо рядки з шляхами до спеціальних папках
  s = s & SpecFldr & vbCrLf
Next
WScript.Echo s

