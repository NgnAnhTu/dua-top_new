# Chọn base image từ Docker Hub
#FROM nginx:latest
# Copy các file của ứng dụng vào thư mục html của Nginx
#COPY . /usr/share/nginx/html
# Khai báo cổng mà ứng dụng sẽ lắng nghe
#EXPOSE 80
# Khởi động Nginx khi container được chạy
#CMD ["nginx", "-g", "daemon off;"]
#--------------------------------------------------------------------------
# The general framwork of my script is based on fragments from all over the Internet, including
# the following website.  Since there is no clear owner of this information and it was contributed
# by many people, I am assuming that an MIT license is appropriate.
# https://fluentbytes.com/deploying-asp-net-4-5-to-docker-on-windows/

# docker run -p 8088:80 --restart always --name aspnetdocker -dit abitofhelp/aspnetdocker 
# Now we can browse to the website. Be aware that you can only reach the container from the outside, 
# so if you would browse to localhost, which results in the #127.0.0.0 you will not see any results. 
# You need to address your machine on its actual hostname or outside IP address.


# docker run -d -p 8091:80 --name aspnetdocker abitofhelp/aspnetdocker
# docker exec -it 82e08c546fd5 powershell


#FROM microsoft/aspnet:4.7.2-windowsservercore-1803
FROM mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2019
FROM mcr.microsoft.com/dotnet/aspnet:7.0

SHELL [ "powershell.exe", "-Command"]

#--------------------------------------------------------------------------------
# Install Additional Applications
#--------------------------------------------------------------------------------

# Copy and install msdeploy service
ADD "https://download.visualstudio.microsoft.com/download/pr/e1828da1-907a-46fe-a3cf-f3b9ea1c485c/035860f3c0d2bab0458e634685648385/webdeploy_amd64_en-us.msi" c:/msi/
RUN Start-Process msiexec.exe -ArgumentList '-i', 'c:\msi\WebDeploy_amd64_en-US.msi', '/quiet', '/norestart' -NoNewWindow
# RUN net.exe start msdepsvc 

 RUN powershell.exe -Command Install-PackageProvider -Name NuGet -RequiredVersion 2.8.5.201 -Force

# Copy and install PSWebDeploy, which is a powershell module for IIS publishing.
RUN powershell.exe -Command Install-Module -Name pswebdeploy -RequiredVersion 1.0.2  -Force
RUN powershell.exe -Command Import-Module PSWebDeploy; Get-Module
#RUN powershell.exe Install-Module PSWebDeploy
#--------------------------------------------------------------------------------


#--------------------------------------------------------------------------------
# Configure IIS
#--------------------------------------------------------------------------------
# Remove default IIS site's contents
RUN powershell.exe -NoProfile -Command Remove-Item -Recurse C:\inetpub\wwwroot\*

# Resolving the 403 authorization issue: https://github.com/microsoft/iis-docker/issues/5
# Adding a user so i can connect through IIS Manager.
RUN NET.exe USER testing "Pizza123!!" /ADD
RUN NET.exe LOCALGROUP "Administrators" "testing" /add

# Grant Permissions so anyone can access the wwwroot folder.
# Using the new PowerShell 3 --% to stop PS from parsing anytthing after it.
RUN icacls.exe "C:\inetpub\wwwroot\*" --% /grant "everyone:(OI)(CI)F /T"

# Install neccassary IIS features
RUN powershell.exe Install-WindowsFeature Web-Mgmt-Service
RUN powershell.exe Install-WindowsFeature Web-Windows-Auth
RUN powershell.exe Install-WindowsFeature NET-Framework-45-ASPNET
RUN powershell.exe Install-WindowsFeature Web-Asp-Net45
RUN powershell.exe Install-WindowsFeature NET-WCF-HTTP-Activation45

# Start the Web Management Service...
RUN net.exe start wmsvc
# Configure it to autostart at boot...
RUN sc.exe config WMSVC start= auto
# Enable remote connections to the web management service. 
RUN powershell.exe -NoProfile -Command Set-ItemProperty -Path HKLM:\SOFTWARE\Microsoft\WebManagement\Server -Name EnableRemoteManagement -Value 1
#--------------------------------------------------------------------------------


#--------------------------------------------------------------------------------
# Web Deploy the Application to IIS Inside of the Container
#--------------------------------------------------------------------------------
RUN mkdir c:\app
#ADD AspNetDocker.zip /app/AspNetDocker.zip
#ADD AspNetDocker.deploy.cmd /app/AspNetDocker.deploy.cmd
#ADD AspNetDocker.SetParameters.xml /app/AspNetDocker.SetParameters.xml
#ADD AspNetDocker.SourceManifest.xml /app/AspNetDocker.SourceManifest.xml
RUN mkdir c:\inetpub\wwwroot\aspnetdocker
#RUN powershell.exe Sync-Website -ComputerName http://localhost -SourcePackage /app/AspNetDocker.zip -TargetPath /inetpub/wwwroot
RUN powershell.exe Sync-Website -ComputerName http://localhost -SourcePackage /app/ -TargetPath /inetpub/wwwroot
#RUN powershell.exe -NoProfile -Command ./AspNetDocker.deploy.cmd /Y

# There may be ACL issues during deployment: https://fluentbytes.com/how-to-fix-error-this-access-control-list-is-not-in-canonical-form-and-therefore-cannot-be-modified-error-count-1/
#WORKDIR /
#RUN mkdir c:\inetpub\wwwroot\aspnetdocker
#RUN mkdir c:\fixAcls
#ADD fixAcls.ps1 /fixAcls
#RUN powershell.exe -executionpolicy bypass /fixAcls/fixAcls.ps1
#WORKDIR /app
#RUN powershell.exe -NoProfile -Command ./AspNetDocker.deploy.cmd /Y
#--------------------------------------------------------------------------------


#--------------------------------------------------------------------------------
# Configure the Container
#--------------------------------------------------------------------------------
EXPOSE 80