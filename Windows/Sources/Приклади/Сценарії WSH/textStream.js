var FSO=WScript.CreateObject("Scripting.FileSystemObject");
if ((WScript.Arguments.length>0) && (FSO.FileExists(WScript.Arguments(0))))
{
	var TextStream=FSO.OpenTextFile(WScript.Arguments(0));
	var n=1;
	while (!TextStream.AtEndOfStream)
	{
		Str=TextStream.ReadLine();
		if (Str.indexOf("rem ")==-1)
			WScript.Echo(n+" "+Str);
		n++;
	}
	TextStream.Close();
}
else
	WScript.Echo("Using script: "+WScript.ScriptFullName+" filename");