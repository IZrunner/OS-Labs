@echo off

:: check if the amount of arguments is > 0
set argumentsCounter=0
for %%x in (%*) do (
    set /A argumentsCounter+=1
)
if %argumentsCounter%==0 (
    type %~nx0
    goto ExitPoint
) else (
    echo There are more than zero arguments
)

set /P directoryPrint="Choose type of printing (t for terminal, f for file) [t/f]:"
if %directoryPrint%==t if %2==/d dir %1 /od
if %directoryPrint%==f if %2==/d dir %1 /od > catalog.txt
if %directoryPrint%==t if %2==/a dir %1 /on
if %directoryPrint%==f if %2==/a dir %1 /on > catalog.txt

:ExitPoint
echo Batch file execution finished