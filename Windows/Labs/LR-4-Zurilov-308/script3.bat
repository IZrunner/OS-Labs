@echo off

for %%e in (%1\*.) do (
    if not exist noextension mkdir noextension        
    move %%e noextension
)

for %%e in (%1\*) do (
    if not exist %%~xe mkdir %%~xe
    move %%e %%~xe
)