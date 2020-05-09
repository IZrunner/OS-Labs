#Create new form
$form=New-Object System.Windows.Forms.Form
$form.Text="Sample Form"
$form.Width=290
$form.Height=200

#Button-Show
$buttonShow=New-Object System.Windows.Forms.Button
$buttonShow.Text="Show"
$buttonShow.Top=20
$buttonShow.Left=20
$buttonShow.Width=70
$buttonShow.Height=25

#Button-Hide
$buttonHide=New-Object System.Windows.Forms.Button
$buttonHide.Text="Hide"
$buttonHide.Top=20
$buttonHide.Left=110
$buttonHide.Width=70
$buttonHide.Height=25

#Button-Clear
$buttonClear=New-Object System.Windows.Forms.Button
$buttonClear.Text="Clear"
$buttonClear.Top=20
$buttonClear.Left=200
$buttonClear.Width=70
$buttonClear.Height=25

#locate buttons on form
$form.Controls.Add($buttonShow)
$form.Controls.Add($buttonHide)
$form.Controls.Add($buttonClear)

#Text field
$texField=New-Object System.Windows.Forms.TextBox
$texField.Top=75
$texField.Left=20
$form.Controls.Add($texField)

#Show text
$buttonShow.Add_Click(
{
  $texField.Visible = $True  
})

#Hide text
$buttonHide.Add_Click(
{
  $texField.Visible = $False  
})

#Clear text
$buttonClear.Add_Click(
{
    $texField.Text = ""
})

#Entry point
$form.ShowDialog() 