@echo off

@echo on
for /R %%g in (*.js) do js-beautify -r -t %%g
for %%g in (*.js) do js-beautify -t %%g

echo Edicion finalizada..
PAUSE