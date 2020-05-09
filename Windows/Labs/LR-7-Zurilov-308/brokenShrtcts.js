// These are not notes, they are Doom Slayer Testaments 

var WshShell = WScript.CreateObject("WScript.Shell");
strDesktop = WshShell.SpecialFolders("Desktop");
var oShellLink = WshShell.CreateShortcut(strDesktop + "\\I am a note 1.lnk");
// oShellLink.TargetPath = WScript.ScriptFullName;
oShellLink.TargetPath = "In_the_first_age\\in_the_first_battle\\when_the_shadows_first_lengthened\\one_stood";
oShellLink.WindowStyle = 1;
oShellLink.IconLocation = "notepad.exe, 0";
oShellLink.Description = "I am definitely a note 1";
oShellLink.WorkingDirectory = strDesktop;
oShellLink.Save();

var WshShell = WScript.CreateObject("WScript.Shell");
strDesktop = WshShell.SpecialFolders("Desktop");
var oShellLink = WshShell.CreateShortcut(strDesktop + "\\I am a note 2.lnk");
// oShellLink.TargetPath = WScript.ScriptFullName;
oShellLink.TargetPath = "Tempered_by_the_fires_of_Hell\\his_iron_will_remained_steadfast_through_the_passage_that_preys_upon_the_weak";
oShellLink.WindowStyle = 1;
oShellLink.IconLocation = "notepad.exe, 0";
oShellLink.Description = "I am definitely a note 2";
oShellLink.WorkingDirectory = strDesktop;
oShellLink.Save();

var WshShell = WScript.CreateObject("WScript.Shell");
strDesktop = WshShell.SpecialFolders("Desktop");
var oShellLink = WshShell.CreateShortcut(strDesktop + "\\I am a note 3.lnk");
// oShellLink.TargetPath = WScript.ScriptFullName;
oShellLink.TargetPath = "And_those_that_tasted_the_bite_of_his_sword\\named_him\\the_Doom_Slayer";
oShellLink.WindowStyle = 1;
oShellLink.IconLocation = "notepad.exe, 0";
oShellLink.Description = "I am definitely a note 3";
oShellLink.WorkingDirectory = strDesktop;
oShellLink.Save();