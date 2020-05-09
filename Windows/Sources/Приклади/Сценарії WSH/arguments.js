var args;
args=WScript.Arguments;
for (var i=0; i<args.length; i++)
	WScript.Echo("Argument "+i+": "+args(i));