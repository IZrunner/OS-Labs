@echo off

:: check if to-copy directory name is not null
:: %~p1 - extracts the path from %1
if exist %1\* (
    echo Argument is a directory 
) else (
    echo Directory is not defined 
    goto ExitPoint
)

:: check whether to continue operations after command is typed
set /P intentVar="Continue predefined operations [y/n]?:"
if %intentVar%==y (
    echo Goto MainAlgorithm
    goto MainAlgorithm
) else (
    echo Goto ExitPoint
    goto ExitPoint
)

:: check if the amount of arguments is > 0
:MainAlgorithm
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

:: Loop to copy files
for %%t in (*.txt) do (
    if not %%t==%2 xcopy %%t %1
)
goto ExitPoint

:ExitPoint
echo Batch file execution finished