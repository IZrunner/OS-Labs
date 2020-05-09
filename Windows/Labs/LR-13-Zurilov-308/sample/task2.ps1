$destinationDirectory = Read-Host "Input destination directory: "
if (Test-Path $destinationDirectory)
    {
       Get-ChildItem -Path $destinationDirectory -File | 
       Where-Object {$_.Extension -eq ".docx" -or $_.Extension -eq ".txt"}
    }
elseif (!Test-Path $destinationDirectory)
    {"Directory input error"}
else {"No *.docx and/or *.txt files in directory"}