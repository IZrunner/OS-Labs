@echo off
cls
if "%1"=="" goto NoDir

if not exist %1 goto NotExistedDir 

rem ��������� ���� �� ��࠭
echo s - to Screen (�� ��࠭)
echo f - to File (� 䠩�)
echo p - to Printer (�� �ਭ��)
rem ��������� �?������ ��� ��������
choice /c:sfp /m:"�㤨 ������� ��?�� ��⠫���"
cls
rem �����祭�� �஡������ ������
if errorlevel 3 goto ToPrinter
if errorlevel 2 goto ToFile
if errorlevel 1 goto ToScreen
echo ���?� �� �㫮 �஡����
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
echo �� �������� ��⠫�� ��� ᪠�㢠���!
goto End

:NotExistedDir
echo �������� ��⠫�� �� ��������!

:End
echo ��������� ����⭮�� 䠩�� �����襭�
pause
