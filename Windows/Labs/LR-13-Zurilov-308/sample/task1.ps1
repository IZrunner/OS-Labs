$destinationDirectory = Read-Host "Input destination directory: "
if (Test-Path $destinationDirectory)
    {
        'The largest file in directory: '
        Get-ChildItem -Path $destinationDirectory -Recurse | 
        Sort-Object -descending -property length | Select-Object -first 1 name, 
        @{Name="Gigabytes";Expression={[Math]::round($_.length / 1GB, 2)}}
        
        'The smallest file in directory: '

        Get-ChildItem -Path $destinationDirectory -Recurse | 
        Sort-Object -descending -property length | Select-Object -last 1 name, 
        @{Name="Gigabytes";Expression={[Math]::round($_.length / 1GB, 2)}}
    }
else 
    {
        "Directory input error"
    }