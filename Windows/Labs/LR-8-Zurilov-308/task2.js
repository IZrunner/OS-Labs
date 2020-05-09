//WScript.Echo("RIP AND TEAR!");

var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.Run("calc.exe");
WScript.Sleep(500);
WshShell.SendKeys("(12345-678)/910");
WshShell.SendKeys("{ENTER}");
