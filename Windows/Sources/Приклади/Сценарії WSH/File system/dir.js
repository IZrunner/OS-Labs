var fso,f,fl,fc,s;
fso = WScript.CreateObject("Scripting.FileSystemObject");
f = fso.GetFolder("N:\\");
fc = new Enumerator(f.Files);
for (; !fc.atEnd(); fc.moveNext())
{
	s += fc.item();
	s += "\n";
}
WScript.Echo(s);