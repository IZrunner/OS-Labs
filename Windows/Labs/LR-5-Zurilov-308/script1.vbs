WScript.Echo("Hello, Console World!")
set WshShell = CreateObject("WScript.Shell")
messageButton = WshShell.Popup("Hello World!",20,"Message Box",1) 
