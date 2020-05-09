$sampleText = Read-Host "Input your message to the world: "
<#"In the first age, int the first battle, when the shadows first lengthened - one stood..."#>
<#EXCEL OUTPUT#>
$excel = New-Object -ComObject excel.application
$excel.visible = $False <#make process hidden#>
$workbook = $excel.Workbooks.Add()
$worksheet= $workbook.Worksheets.Item(1)
$worksheet.Name = "ID"
$worksheet.Cells.Item(1,1).Value = $sampleText
$workbook.SaveAs("D:\Sample Text.xls") 
$workbook.Close()
$excel.Quit()

<#WORD OUTPUT#>
$word = New-Object -ComObject word.application
$word.Visible = $false
$doc = $word.Documents.Add()
$doc.Content.InsertAfter($sampleText)
$doc.SaveAs("D:\Sample Text.docx")
$doc.Close()
$word.Quit()