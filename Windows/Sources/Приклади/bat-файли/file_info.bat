@echo off 
if "%1"=="" goto NoDir

echo ��⠫쭠 ?��ଠ�?� �� 䠩�� ��⠫��� %1
for %%f in (*.*) do (
  echo ?�'� 䠩��: %%f
  echo ?�'� 䠩�� ��� �����: %%~f
  echo ����� ?�'� 䠩��: %%~ff
  echo �?�쪨 ?�'� 䠩��: %%~nf
  echo ���: %%~df
  echo ����७�� 䠩��: %%~xf
  echo ��� � �� ��⠭��� ��?�� 䠩��: %%~tf
  echo ����?� 䠩��: %%~zf
  echo .  
)
goto End

:NoDir
echo �� ������� ��४��?�!

:End
echo ��������� ����⭮�� 䠩�� �����襭�
pause

