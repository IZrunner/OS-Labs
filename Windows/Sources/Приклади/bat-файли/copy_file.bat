@echo off
rem ���?��� 䠩�� (1-� ��㬥�� - 䠩�; 2-� ��㬥�� - ��४��?�, �㤨 ���� ����?��� ᪮�?�
xcopy %1 %2 /d /c > nul
rem ��ॢ?ઠ ��?譮��? ���?���
if errorlevel 0 goto Success

rem ����� � 䠩�? ��?�� ?��ଠ�?� �� ������� �� ���?��?
echo �������: %1 >> logcopy.log
goto End

:Success
rem ����� � 䠩�? ��?�� ?��ଠ�?� �� ��?譥 ���?���
echo ��?譮: %1 >> logcopy.log

:End