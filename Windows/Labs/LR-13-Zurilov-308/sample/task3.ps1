$sourceDirectory = Read-Host "Input the source directory: "
$destinationDirectory = Read-Host "Input the destination directory: "
$sourceFilesCollection =  Get-ChildItem -Path $sourceDirectory -File
$destinationFilesCollection = Get-ChildItem -Path $destinationDirectory -File

foreach ($sourceFile in $sourceFilesCollection)
    {
        foreach ($destinationFile in $destinationFilesCollection)
            {
                if ($sourceFile -match $destinationFile)
                    {
                        $choice = Read-Host "Which duplicate would you like to delete: the source one '$sourceFile' [a] or the destination one '$destinationFile' [b] ?"                    
                        switch ($choice) 
                        {
                            "a" {Remove-Item $sourceFile.FullName}
                            "b" {Remove-Item $destinationFile.FullName}    
                        }
                    }
            }
    }