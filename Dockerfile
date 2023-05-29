FROM mcr.microsoft.com/windows/nanoserver:1803-amd6

RUN powershell -NoProfile -Command Remove-Item -Recurse C:\inetpub\wwwroot\*

WORKDIR /inetpub/wwwroot

COPY content/ .