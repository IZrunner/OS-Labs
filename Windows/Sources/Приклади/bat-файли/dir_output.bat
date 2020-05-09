@echo off
cls
if "%1"=="" goto NoDir

if not exist %1 goto NotExistedDir 

rem Виведення меню на екран
echo s - to Screen (на екран)
echo f - to File (у файл)
echo p - to Printer (на принтер)
rem Виведення п?дказки для введення
choice /c:sfp /m:"Куди виводити вм?ст каталогу"
cls
rem Визначення зробленого вибору
if errorlevel 3 goto ToPrinter
if errorlevel 2 goto ToFile
if errorlevel 1 goto ToScreen
echo Виб?р не було зроблено
goto End

:ToScreen
dir %1 | more
goto End

:ToFile
dir %1 > .\catalog.txt
goto End

:ToPrinter
dir %1 > prn
goto End

:NoDir
echo Не вказаний каталог для сканування!
goto End

:NotExistedDir
echo Вказаний каталог не знайдено!

:End
echo Виконання пакетного файлу завершене
pause
